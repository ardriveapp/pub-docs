# Using Turbo SDK with Next.js

## Overview

This guide demonstrates how to configure the `@ardrive/turbo-sdk` in a Next.js application with proper polyfills for client-side usage. Next.js uses webpack under the hood, which requires specific configuration to handle Node.js modules that the Turbo SDK depends on.

> [!WARNING]
> Polyfills are required when using the Turbo SDK in Next.js applications. The SDK relies on Node.js modules like `crypto`, `buffer`, `process`, and `stream` that are not available in the browser by default.

## Prerequisites

- Next.js 13+ (with App Router or Pages Router)
- Node.js 18+
- Basic familiarity with Next.js configuration

## Installation

First, install the required dependencies:

```bash
npm install @ardrive/turbo-sdk
```

For client-side usage, you'll also need polyfill packages:

```bash
npm install --save-dev crypto-browserify stream-browserify process buffer
```

> [!NOTE] > **Wallet Integration Dependencies**: The Turbo SDK includes `@dha-team/arbundles` as a peer dependency, which provides the necessary signers for browser wallet integration (like `InjectedEthereumSigner` and `ArconnectSigner`). You can import these directly without additional installation.

## Configuration

### Step 1: Configure Webpack Polyfills

Create or update your `next.config.js` file to include the necessary polyfills:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Only configure polyfills for client-side bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
        process: require.resolve("process/browser"),
        fs: false,
        net: false,
        tls: false,
      };

      // Provide global process and Buffer
      config.plugins.push(
        new config.webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
```

### Step 2: TypeScript Configuration (Optional)

If you're using TypeScript, update your `tsconfig.json` to include proper module resolution:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "lib": ["es2015", "dom", "dom.iterable"]
    // ... other options
  }
}
```

#### TypeScript Wallet Types

Create a `types/wallet.d.ts` file to properly type wallet objects:

```typescript
// types/wallet.d.ts
interface Window {
  ethereum?: {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on?: (event: string, handler: (...args: any[]) => void) => void;
    removeListener?: (event: string, handler: (...args: any[]) => void) => void;
    isMetaMask?: boolean;
  };
  arweaveWallet?: {
    connect: (permissions: string[]) => Promise<void>;
    disconnect: () => Promise<void>;
    getActiveAddress: () => Promise<string>;
    getPermissions: () => Promise<string[]>;
    sign: (transaction: any) => Promise<any>;
    getPublicKey: () => Promise<string>;
  };
}
```

## Usage Examples

### Basic Rate Fetching Component

Create a client-side component that uses the Turbo SDK for rate information:

```tsx
"use client"; // Required for Next.js App Router

import { TurboFactory } from "@ardrive/turbo-sdk/web";
import { useEffect, useState } from "react";

export default function TurboRates() {
  const [turbo, setTurbo] = useState(null);
  const [rates, setRates] = useState(null);
  const [uploadCost, setUploadCost] = useState(null);

  useEffect(() => {
    // Initialize unauthenticated Turbo client
    const initTurbo = async () => {
      try {
        const turboClient = TurboFactory.unauthenticated();
        setTurbo(turboClient);

        // Fetch current rates
        const currentRates = await turboClient.getFiatRates();
        setRates(currentRates);
      } catch (error) {
        console.error("Failed to initialize Turbo:", error);
      }
    };

    initTurbo();
  }, []);

  const calculateUploadCost = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !turbo) return;

    try {
      const cost = await turbo.getUploadCosts({
        bytes: [file.size],
      });
      setUploadCost(cost[0]);
    } catch (error) {
      console.error("Error calculating cost:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Turbo Upload Cost Calculator</h2>

      {rates && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Current Rates (per GiB):</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify(rates.fiat, null, 2)}
          </pre>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="file" className="block text-sm font-medium mb-2">
          Select File to Calculate Upload Cost:
        </label>
        <input
          type="file"
          id="file"
          onChange={calculateUploadCost}
          className="block w-full text-sm border rounded-lg p-2"
        />
      </div>

      {uploadCost && (
        <div className="mt-4 p-3 bg-blue-100 rounded">
          <p>
            <strong>Upload Cost:</strong> {uploadCost.winc} winc
          </p>
          <p>
            <strong>File Size:</strong> {uploadCost.adjustedBytes} bytes
          </p>
        </div>
      )}
    </div>
  );
}
```

### Wallet Integration Examples

> [!IMPORTANT] > **Never expose private keys in browser applications!** Always use browser wallet integrations for security.

#### MetaMask Integration

Connect to MetaMask for Ethereum-funded uploads:

> [!NOTE]
> For MetaMask integration, you'll need to use `InjectedEthereumSigner` from `@dha-team/arbundles`, which is available as a peer dependency through the Turbo SDK.

```tsx
"use client";

import { TurboFactory } from "@ardrive/turbo-sdk/web";
import { InjectedEthereumSigner } from "@dha-team/arbundles";
import { useState, useCallback } from "react";

export default function MetaMaskUploader() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const connectMetaMask = useCallback(async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      // Request account access
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // Get the current account
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setAddress(accounts[0]);
        setConnected(true);

        // Log current chain for debugging
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log("Connected to chain:", chainId);
      }
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
    }
  }, []);

  const uploadWithMetaMask = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !connected) return;

    setUploading(true);

    try {
      // Create a provider wrapper for InjectedEthereumSigner
      const providerWrapper = {
        getSigner: () => ({
          signMessage: async (message: string | Uint8Array) => {
            const accounts = await window.ethereum!.request({
              method: "eth_accounts",
            });
            if (accounts.length === 0) {
              throw new Error("No accounts available");
            }

            // Convert message to hex if it's Uint8Array
            const messageToSign =
              typeof message === "string"
                ? message
                : "0x" +
                  Array.from(message)
                    .map((b) => b.toString(16).padStart(2, "0"))
                    .join("");

            return await window.ethereum!.request({
              method: "personal_sign",
              params: [messageToSign, accounts[0]],
            });
          },
        }),
      };

      // Create the signer using InjectedEthereumSigner
      const signer = new InjectedEthereumSigner(providerWrapper);
      const turbo = TurboFactory.authenticated({
        signer,
        token: "ethereum", // Important: specify token type for Ethereum
      });

      // Upload file with progress tracking
      const result = await turbo.uploadFile({
        fileStreamFactory: () => file.stream(),
        fileSizeFactory: () => file.size,
        dataItemOpts: {
          tags: [
            { name: "Content-Type", value: file.type },
            { name: "App-Name", value: "My-Next-App" },
            { name: "Funded-By", value: "Ethereum" },
          ],
        },
        events: {
          onProgress: ({ totalBytes, processedBytes, step }) => {
            console.log(
              `${step}: ${Math.round((processedBytes / totalBytes) * 100)}%`
            );
          },
          onError: ({ error, step }) => {
            console.error(`Error during ${step}:`, error);
            console.error("Error details:", JSON.stringify(error, null, 2));
          },
        },
      });

      setUploadResult(result);
    } catch (error) {
      console.error("Upload failed:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">MetaMask Upload</h2>

      {!connected ? (
        <button
          onClick={connectMetaMask}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Connect MetaMask
        </button>
      ) : (
        <div>
          <p className="mb-4 text-green-600">
            ✅ Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </p>

          <div className="mb-4">
            <label
              htmlFor="metamask-file"
              className="block text-sm font-medium mb-2"
            >
              Select File to Upload:
            </label>
            <input
              type="file"
              id="metamask-file"
              onChange={uploadWithMetaMask}
              disabled={uploading}
              className="block w-full text-sm border rounded-lg p-2"
            />
          </div>

          {uploading && (
            <div className="mb-4 p-3 bg-yellow-100 rounded">
              🔄 Uploading... Please confirm transaction in MetaMask
            </div>
          )}

          {uploadResult && (
            <div className="mt-4 p-3 bg-green-100 rounded">
              <p>
                <strong>✅ Upload Successful!</strong>
              </p>
              <p>
                <strong>Transaction ID:</strong> {uploadResult.id}
              </p>
              <p>
                <strong>Data Size:</strong> {uploadResult.totalBytes} bytes
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

#### Wander Wallet Integration (formerly ArConnect)

Connect to Wander wallet for Arweave-funded uploads:

```tsx
"use client";

import { TurboFactory, ArconnectSigner } from "@ardrive/turbo-sdk/web";
import { useState, useCallback } from "react";

export default function WanderWalletUploader() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const connectWanderWallet = useCallback(async () => {
    try {
      if (!window.arweaveWallet) {
        alert("Wander wallet is not installed!");
        return;
      }

      // Required permissions for Turbo SDK
      const permissions = [
        "ACCESS_ADDRESS",
        "ACCESS_PUBLIC_KEY",
        "SIGN_TRANSACTION",
        "SIGNATURE",
      ];

      // Connect to wallet
      await window.arweaveWallet.connect(permissions);

      // Get wallet address
      const walletAddress = await window.arweaveWallet.getActiveAddress();
      setAddress(walletAddress);
      setConnected(true);
    } catch (error) {
      console.error("Failed to connect to Wander wallet:", error);
    }
  }, []);

  const uploadWithWanderWallet = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !connected) return;

    setUploading(true);

    try {
      // Create ArConnect signer using Wander wallet
      const signer = new ArconnectSigner(window.arweaveWallet);
      const turbo = TurboFactory.authenticated({ signer });
      // Note: No need to specify token for Arweave as it's the default

      // Upload file with progress tracking
      const result = await turbo.uploadFile({
        fileStreamFactory: () => file.stream(),
        fileSizeFactory: () => file.size,
        dataItemOpts: {
          tags: [
            { name: "Content-Type", value: file.type },
            { name: "App-Name", value: "My-Next-App" },
            { name: "Funded-By", value: "Arweave" },
          ],
        },
        events: {
          onProgress: ({ totalBytes, processedBytes, step }) => {
            console.log(
              `${step}: ${Math.round((processedBytes / totalBytes) * 100)}%`
            );
          },
          onError: ({ error, step }) => {
            console.error(`Error during ${step}:`, error);
          },
        },
      });

      setUploadResult(result);
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Wander Wallet Upload</h2>

      {!connected ? (
        <button
          onClick={connectWanderWallet}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Connect Wander Wallet
        </button>
      ) : (
        <div>
          <p className="mb-4 text-green-600">
            ✅ Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </p>

          <div className="mb-4">
            <label
              htmlFor="wander-file"
              className="block text-sm font-medium mb-2"
            >
              Select File to Upload:
            </label>
            <input
              type="file"
              id="wander-file"
              onChange={uploadWithWanderWallet}
              disabled={uploading}
              className="block w-full text-sm border rounded-lg p-2"
            />
          </div>

          {uploading && (
            <div className="mb-4 p-3 bg-yellow-100 rounded">
              🔄 Uploading... Please confirm transaction in Wander wallet
            </div>
          )}

          {uploadResult && (
            <div className="mt-4 p-3 bg-green-100 rounded">
              <p>
                <strong>✅ Upload Successful!</strong>
              </p>
              <p>
                <strong>Transaction ID:</strong> {uploadResult.id}
              </p>
              <p>
                <strong>Data Size:</strong> {uploadResult.totalBytes} bytes
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

## Common Issues and Solutions

### Build Errors

If you encounter build errors related to missing modules:

1. **"Module not found: Can't resolve 'fs'"**

   - Ensure `fs: false` is set in your webpack fallback configuration

2. **"process is not defined"**

   - Make sure you have the `ProvidePlugin` configuration for process

3. **"Buffer is not defined"**
   - Verify the Buffer polyfill is properly configured in `ProvidePlugin`

### Runtime Errors

1. **"crypto.getRandomValues is not a function"**

   - This usually indicates the crypto polyfill isn't working. Double-check your webpack configuration.

2. **"TypeError: e.startsWith is not a function"**

   - This indicates incorrect signer usage. For MetaMask integration, use `InjectedEthereumSigner` from `@dha-team/arbundles`, not `EthereumSigner`.
   - `EthereumSigner` expects a private key string, while `InjectedEthereumSigner` expects a provider wrapper.

3. **"No accounts available" during wallet operations**

   - Ensure the wallet is properly connected before attempting operations
   - Add validation to check account availability after connection

4. **Message signing failures with wallets**

   - For `InjectedEthereumSigner`, ensure your provider wrapper correctly implements the `getSigner()` method
   - Handle both string and Uint8Array message types in your `signMessage` implementation
   - Use MetaMask's `personal_sign` method with proper parameter formatting

5. **Server-side rendering issues**
   - Always use `'use client'` directive for components that use the Turbo SDK
   - Consider dynamic imports with `ssr: false` for complex cases:

```tsx
import dynamic from "next/dynamic";

const TurboUploader = dynamic(() => import("./TurboUploader"), {
  ssr: false,
});
```

### Wallet Integration Issues

1. **Incorrect Signer Import**

   ```tsx
   // ❌ INCORRECT - For browser wallets
   import { EthereumSigner } from "@ardrive/turbo-sdk/web";

   // ✅ CORRECT - For browser wallets
   import { InjectedEthereumSigner } from "@dha-team/arbundles";
   ```

2. **Provider Interface Mismatch**

   ```tsx
   // ❌ INCORRECT - window.ethereum doesn't have getSigner()
   const signer = new InjectedEthereumSigner(window.ethereum);

   // ✅ CORRECT - Use a provider wrapper
   const providerWrapper = {
     getSigner: () => ({
       signMessage: async (message: string | Uint8Array) => {
         // Implementation here
       },
     }),
   };
   const signer = new InjectedEthereumSigner(providerWrapper);
   ```

3. **Missing Dependencies**

   If you encounter import errors for `@dha-team/arbundles`, note that it's available as a peer dependency through `@ardrive/turbo-sdk`. You may need to ensure it's properly resolved in your build process.

## Best Practices

1. **Use Client Components**: Always mark components using the Turbo SDK with `'use client'`

2. **Error Handling**: Implement proper error handling for network requests and wallet interactions

3. **Environment Variables**: Store sensitive configuration in environment variables:

```javascript
// next.config.js
const nextConfig = {
  env: {
    TURBO_UPLOAD_URL: process.env.TURBO_UPLOAD_URL,
    TURBO_PAYMENT_URL: process.env.TURBO_PAYMENT_URL,
  },
  // ... webpack config
};
```

4. **Bundle Size**: Consider code splitting for large applications to reduce bundle size

5. **Wallet Security**:
   - **Never expose private keys** in client-side code
   - Always use browser wallet integrations (MetaMask, Wander, etc.)
   - Request only necessary permissions from wallets
   - Validate wallet connections before use
   - Handle wallet disconnection gracefully

## Production Deployment

For production deployments:

1. **Verify polyfills work correctly** in your build environment
2. **Test wallet connections** with various providers (Wander, MetaMask, etc.)
3. **Monitor bundle sizes** to ensure polyfills don't significantly increase your app size
4. **Use environment-specific configurations** for different Turbo endpoints
5. **Implement proper error boundaries** for wallet connection failures
6. **Add loading states** for wallet operations to improve UX
7. **Test across different browsers** to ensure wallet compatibility

## Implementation Verification

To verify your MetaMask integration is working correctly:

1. **Check Console Logs**: After connecting to MetaMask, you should see:

   ```
   Connected to chain: 0x1 (or appropriate chain ID)
   ```

2. **Test Balance Retrieval**: Add this to verify your authenticated client works:

   ```tsx
   // After creating authenticated turbo client
   const balance = await turbo.getBalance();
   console.log("Current balance:", balance);
   ```

3. **Verify Signer Setup**: Your implementation should:

   - Use `InjectedEthereumSigner` from `@dha-team/arbundles`
   - Include a proper provider wrapper with `getSigner()` method
   - Handle both string and Uint8Array message types
   - Use MetaMask's `personal_sign` method

4. **Common Success Indicators**:
   - No `TypeError: e.startsWith is not a function` errors
   - Successful wallet connection and address display
   - Ability to fetch balance without errors
   - Upload operations work with proper MetaMask transaction prompts

## Additional Resources

- [Turbo SDK Documentation](../index.md)
- [Web Usage Examples](../turbo-web.md)
- [Next.js Webpack Configuration](https://nextjs.org/docs/pages/api-reference/next-config-js/webpack)
- [ArDrive Examples Repository](https://github.com/ardriveapp/turbo-sdk/tree/main/examples)

---

For more examples and advanced usage patterns, refer to the [Turbo SDK examples directory](https://github.com/ardriveapp/turbo-sdk/tree/main/examples) or the main [SDK documentation](../index.md).
