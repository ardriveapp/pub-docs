# @ardriveapp/turbo-sdk 🚀

Welcome to the `@ardrive/turbo-sdk`! This SDK provides functionality for interacting with the Turbo Upload and Payment Services and is available for both NodeJS and Web environments.

## AI-Assisted Development

To help developers get started quickly, we provide specialized documentation designed for AI code assistants. You can point your AI assistant to:

* [SDK Documentation for AI](https://docs.ardrive.io/docs/turbo/turbo-sdk/ai-sdk.html)
* [CLI Documentation for AI](https://docs.ardrive.io/docs/turbo/turbo-sdk/ai-cli.html)

For developers who want to use these docs with local AI tools or include them in their projects, you can access the raw markdown files directly from GitHub:

* [Raw SDK Documentation for AI](https://raw.githubusercontent.com/ardriveapp/pub-docs/refs/heads/production/docs/src/docs/turbo/turbo-sdk/ai-sdk.md)
* [Raw CLI Documentation for AI](https://raw.githubusercontent.com/ardriveapp/pub-docs/refs/heads/production/docs/src/docs/turbo/turbo-sdk/ai-cli.md)

**Note on AI Usage**: While AI assistants can be helpful for learning and prototyping, any code they generate should be treated as a starting point. Always review, test, and validate AI-generated code against this standard documentation before using it in your applications.

## Installation

```shell
npm install @ardrive/turbo-sdk
```

or

```shell
yarn add @ardrive/turbo-sdk
```

## Quick Start

```typescript
import { TurboFactory, ArweaveSigner } from '@ardrive/turbo-sdk';

// load your JWK directly to authenticate
const jwk = fs.readFileSync('./my-jwk.json');
const address = arweave.wallets.jwkToAddress(jwk);
const turbo = TurboFactory.authenticated({ privateKey: jwk });

// or provide your own signer
const signer = new ArweaveSigner(jwk);
const turbo = TurboFactory.authenticated({ signer });

// get the wallet balance
const { winc: balance } = await turbo.getBalance();

// prep file for upload
const filePath = path.join(__dirname, './my-image.png');
const fileSize = fs.statSync(filePath).size;

// get the cost of uploading the file
const [{ winc: fileSizeCost }] = await turbo.getUploadCosts({
  bytes: [fileSize],
});

// check if balance greater than upload cost
if (balance < fileSizeCost) {
  const { url } = await turbo.createCheckoutSession({
    amount: fileSizeCost,
    owner: address,
    // add a promo code if you have one
  });
  // open the URL to top-up, continue when done
  open(url);
  return;
}

// upload the file
try {
  const { id, owner, dataCaches, fastFinalityIndexes } = await turbo.uploadFile({
    fileStreamFactory: () => fs.createReadStream(filePath),
    fileSizeFactory: () => fileSize,
     // optional
    dataItemOpts: {
      tags: [
        // Content-type tag lets gateways know how to serve the data, if omitted, files will be downloaded as binary. 
        {
          name: "Content-Type",
          value: "text/plain",
        },
        {
          name: "My-Custom-Tag",
          value: "my-custom-value",
        },
      ],
      // no timeout or AbortSignal provided
    },
  });
  // upload complete!
  console.log('Successfully upload data item!', { id, owner, dataCaches, fastFinalityIndexes });
} catch (error) {
  // upload failed
  console.error('Failed to upload data item!', error);
} finally {
  const { winc: newBalance } = await turbo.getBalance();
  console.log('New balance:', newBalance);
}
```

## Usage

The SDK is provided in both CommonJS and ESM formats, and it's compatible with bundlers such as Webpack, Rollup, and ESbuild. Utilize the appropriate named exports provided by this SDK's [package.json] based on your project's configuration. Refer to the [examples] directory to see how to use the SDK in various environments.

### Web

#### Bundlers (Webpack, Rollup, ESbuild, etc.)

CommonJS:

```typescript
import { TurboFactory } from "@ardrive/turbo-sdk";

const turbo = TurboFactory.unauthenticated();
const rates = await turbo.getFiatRates();
```

ESM:

```typescript
import { TurboFactory } from "@ardrive/turbo-sdk/<node/web>";

const turbo = TurboFactory.unauthenticated();
const rates = await turbo.getFiatRates();
```

Browser:

```html
<script type="module">
  import { TurboFactory } from "https://unpkg.com/@ardrive/turbo-sdk";

  const turbo = TurboFactory.unauthenticated();
  const rates = await turbo.getFiatRates();
</script>
```

***NOTE***: Polyfills are not provided by default for bundled web projects (Vite, ESBuild, Webpack, Rollup, etc.) . Depending on your apps bundler configuration and plugins, you will need to provide polyfills for various imports including `crypto`, `process`, `fs` and `buffer`. Refer to your bundler's documentation for how to provide the necessary polyfills.

### NodeJS

#### CommonJS

Project's `package.json`:

```json
{
  "type": "commonjs",
  "scripts": {
    "test": "ts-node ./index.ts"
  },
  "dependencies": {
    "@ardrive/turbo-sdk": "latest",
    "arweave": "^1.14.4",
    "typescript": "^5.4.2"
  },
  "devDependencies": {
    "ts-node": "^10.9.2"
  }
}
```

Project's `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "node",
    "target": "ES2021",
    "esModuleInterop": true
  },
  "include": ["./index.ts"],
  "exclude": ["node_modules"]
}
```

Usage:

```javascript
import {
  TurboFactory,
  USD,
  WinstonToTokenAmount,
  developmentTurboConfiguration,
} from "@ardrive/turbo-sdk";
import Arweave from "arweave";
import fs from "fs";
import path from "path";

(async () => {
  /**
   * Generate a key from the arweave wallet.
   */
  const arweave = new Arweave({});
  const jwk = await arweave.wallets.generate();
  /**
   * Use the arweave key to create an authenticated turbo client
   */
  const turboAuthClient = TurboFactory.authenticated({
    privateKey: jwk,
    ...developmentTurboConfiguration,
  });

  /**
   * Fetch the balance for the private key.
   */
  const balance = await turboAuthClient.getBalance();
  console.log("Balance:", balance);

  /**
   * Fetch the estimated amount of winc returned for 10 USD (1000 cents).
   */
  const estimatedWinc = await turboAuthClient.getWincForFiat({
    amount: USD(10),
  });
  console.log("10 USD to winc:", estimatedWinc);

  /**
   * Post local files to the Turbo service.
   */
  console.log("Posting raw file to Turbo service...");
  const filePath = path.join(__dirname, "../../files/1KB_file");
  const fileSize = fs.statSync(filePath).size;
  const uploadResult = await turboAuthClient.uploadFile({
    fileStreamFactory: () => fs.createReadStream(filePath),
    fileSizeFactory: () => fileSize,
    signal: AbortSignal.timeout(10_000), // cancel the upload after 10 seconds
  });
  console.log(JSON.stringify(uploadResult, null, 2));

  /**
   * Tops up a wallet with Credits using tokens.
   * Default token is AR, using Winston as the unit.
   */
  const topUpResult = await turboAuthClient.topUpWithTokens({
    tokenAmount: WinstonToTokenAmount(100_000_000), // 0.0001 AR
  });
  console.log(JSON.stringify(topUpResult, null, 2));
})();
```

#### ESM

Project's `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "test": "ts-node ./index.ts"
  },
  "dependencies": {
    "@ardrive/turbo-sdk": "latest",
    "arweave": "^1.14.4"
  },
  "devDependencies": {
    "ts-node": "^10.9.2"
  }
}
```

Project's `tsconfig.json`:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext"
  },
  "include": ["./index.ts"],
  "exclude": ["node_modules"],
  "ts-node": {
    "esm": true
  }
}
```

Usage:

```typescript
// or use @ardrive/turbo-sdk/web depending on your environment
import {
  TurboFactory,
  USD,
  WinstonToTokenAmount,
  developmentTurboConfiguration,
} from "@ardrive/turbo-sdk/node";
import Arweave from "arweave";
import fs from "fs";

(async () => {
  /**
   * Generate a key from the arweave wallet.
   */
  const arweave = new Arweave({});
  const jwk = await arweave.wallets.generate();
  /**
   * Use the arweave key to create an authenticated turbo client
   */
  const turboAuthClient = TurboFactory.authenticated({
    privateKey: jwk,
    ...developmentTurboConfiguration,
  });

  /**
   * Fetch the balance for the private key.
   */
  const balance = await turboAuthClient.getBalance();
  console.log("Balance:", balance);

  /**
   * Fetch the estimated amount of winc returned for 10 USD (1000 cents).
   */
  const estimatedWinc = await turboAuthClient.getWincForFiat({
    amount: USD(10),
  });
  console.log("10 USD to winc:", estimatedWinc);

  /**
   * Post local files to the Turbo service.
   */
  console.log("Posting raw file to Turbo service...");
  const filePath = new URL("../../files/1KB_file", import.meta.url).pathname;
  const fileSize = fs.statSync(filePath).size;
  const uploadResult = await turboAuthClient.uploadFile({
    fileStreamFactory: () => fs.createReadStream(filePath),
    fileSizeFactory: () => fileSize,
    signal: AbortSignal.timeout(10_000), // cancel the upload after 10 seconds
  });
  console.log(JSON.stringify(uploadResult, null, 2));

  /**
   * Tops up a wallet with Credits using tokens.
   * Default token is AR, using Winston as the unit.
   */
  const topUpResult = await turboAuthClient.topUpWithTokens({
    tokenAmount: WinstonToTokenAmount(100_000_000), // 0.0001 AR
  });
  console.log(JSON.stringify(topUpResult, null, 2));
})();
```

### Typescript

The SDK provides TypeScript types. When you import the SDK in a TypeScript project:

```typescript
import { TurboFactory } from "@ardrive/turbo-sdk/web";

// or '@ardrive/turbo-sdk/node' for Node.js projects
```

Types are exported from `./lib/types/[node/web]/index.d.ts` and should be automatically recognized, offering benefits such as type-checking and autocompletion.

Examples:

Examples are available in the [examples] directory. To run examples:

- `yarn example:web` - opens up the example web page
- `yarn example:cjs` - runs example CJS node script
- `yarn example:esm` - runs example ESM node script

## APIs

### TurboFactory

#### `unauthenticated()`

- Creates an instance of a client that accesses Turbo's unauthenticated services.

  ```typescript
  const turbo = TurboFactory.unauthenticated();
  ```

#### `authenticated()`

Creates an instance of a client that accesses Turbo's authenticated and unauthenticated services. Requires either a signer, or private key to be provided.

- Construct Turbo with an Arweave JWK

  ```typescript
  const jwk = await arweave.crypto.generateJWK();
  const turbo = TurboFactory.authenticated({ privateKey: jwk });
  ```

- Construct Turbo with an Arweave signer

  ```typescript
  const signer = new ArweaveSigner(jwk);
  const turbo = TurboFactory.authenticated({ signer });
  ```

- Construct Turbo with an Arconnect signer

  ```typescript
  const signer = new ArconnectSigner(window.arweaveWallet);
  const turbo = TurboFactory.authenticated({ signer });
  ```

- Construct Turbo with an ETH signer

  ```typescript
  const signer = new EthereumSigner(privateKey);
  const turbo = TurboFactory.authenticated({ signer });
  ```

- Construct Turbo with an ETH private key

  ```typescript
  const turbo = TurboFactory.authenticated({
    privateKey: ethHexadecimalPrivateKey,
    token: "ethereum",
  });
  ```

- Construct Turbo with POL (MATIC) Private Key

  ```typescript
  const turbo = TurboFactory.authenticated({
  privateKey: ethHexadecimalPrivateKey,
  token: 'pol',
  });
```

- Construct Turbo with a HexSolanaSigner

  ```typescript
  const signer = new HexSolanaSigner(bs58.encode(secretKey));
  const turbo = TurboFactory.authenticated({ signer });
  ```

- Construct Turbo with a SOL secret Key

  ```typescript
  const turbo = TurboFactory.authenticated({
    privateKey: bs58.encode(secretKey),
    token: "solana",
  });
  ```

- KYVE Private Key

  ```typescript
  const turbo = TurboFactory.authenticated({
    privateKey: kyveHexadecimalPrivateKey,
    token: 'kyve',
  });
  ```

- KYVE Mnemonic

  ```typescript
  import { privateKeyFromKyveMnemonic } from '@ardrive/turbo-sdk';

  const turbo = TurboFactory.authenticated({
    privateKey: privateKeyFromKyveMnemonic(mnemonic),
    token: 'kyve',
  });
  ```

### TurboUnauthenticatedClient

#### `getSupportedCurrencies()`

- Returns the list of currencies supported by the Turbo Payment Service for topping up a user balance of AR Credits (measured in Winston Credits, or winc).

  ```typescript
  const currencies = await turbo.getSupportedCurrencies();
  ```

#### `getSupportedCountries()`

- Returns the list of countries supported by the Turbo Payment Service's top up workflow.

  ```typescript
  const countries = await turbo.getSupportedCountries();
  ```

#### `getFiatToAR({ currency })`

- Returns the current raw fiat to AR conversion rate for a specific currency as reported by third-party pricing oracles.

  ```typescript
  const fiatToAR = await turbo.getFiatToAR({ currency: "USD" });
  ```

#### `getFiatRates()`

- Returns the current fiat rates for 1 GiB of data for supported currencies, including all top-up adjustments and fees.

  ```typescript
  const rates = await turbo.getFiatRates();
  ```

#### `getWincForFiat({ amount })`

- Returns the current amount of Winston Credits including all adjustments for the provided fiat currency, amount. To leverage promo codes, see [TurboAuthenticatedClient].

  ```typescript
  const { winc, paymentAmount, quotedPaymentAmount, adjustments } =
    await turbo.getWincForFiat({
      amount: USD(100),
      // promo codes require an authenticated client
    });
  ```

#### `getUploadCosts({ bytes })`

- Returns the estimated cost in Winston Credits for the provided file sizes, including all upload adjustments and fees.

  ```typescript
  const [uploadCostForFile] = await turbo.getUploadCosts({ bytes: [1024] });
  const { winc, adjustments } = uploadCostForFile;
  ```

#### `uploadSignedDataItem({ dataItemStreamFactory, dataItemSizeFactory, signal })`

- Uploads a signed data item. The provided `dataItemStreamFactory` should produce a NEW signed data item stream each time is it invoked. The `dataItemSizeFactory` is a function that returns the size of the file. The `signal` is an optional [AbortSignal] that can be used to cancel the upload or timeout the request.

  ```typescript
  const filePath = path.join(__dirname, "./my-signed-data-item");
  const dataItemSize = fs.statSync(filePath).size;
  const uploadResponse = await turbo.uploadSignedDataItem({
    dataItemStreamFactory: () => fs.createReadStream(filePath),
    dataItemSizeFactory: () => dataItemSize,
    signal: AbortSignal.timeout(10_000), // cancel the upload after 10 seconds
  });
  ```

#### `createCheckoutSession({ amount, owner })`

- Creates a Stripe checkout session for a Turbo Top Up with the provided amount, currency, owner. The returned URL can be opened in the browser, all payments are processed by Stripe. To leverage promo codes, see [TurboAuthenticatedClient].

- Arweave (AR) Fiat Top UP

  ```typescript
  const { url, winc, paymentAmount, quotedPaymentAmount, adjustments } =
  await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicArweaveAddress,
    // promo codes require an authenticated client
  });

  // Open checkout session in a browser
  if (process.platform === 'darwin') {
    // macOS
    exec(`open ${url}`);
  } else if (process.platform === 'win32') {
    // Windows
    exec(`start "" "${url}"`, { shell: true });
  } else {
    // Linux/Unix
    open(url);
  }
  ```

- Ethereum (ETH) Fiat Top Up

  ```typescript
  const turbo = TurboFactory.unauthenticated({ token: 'ethereum' });

  const { url, winc, paymentAmount } = await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicEthereumAddress,
  });
  ```

- Solana (SOL) Top Up

  ```typescript
  const turbo = TurboFactory.unauthenticated({ token: 'solana' });

  const { url, winc, paymentAmount } = await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicSolanaAddress,
  });
  ```

- Polygon (POL / MATIC) Fiat Top UP

  ```typescript
  const turbo = TurboFactory.unauthenticated({ token: 'pol' });

  const { url, winc, paymentAmount } = await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicPolygonAddress,
  });
  ```

- KYVE Fiat Top Up

  ```typescript
  const turbo = TurboFactory.unauthenticated({ token: 'kyve' });

  const { url, winc, paymentAmount } = await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicKyveAddress,
  });
  ```

- Eth on Base Network Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'base-eth' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: ETHToTokenAmount(0.00001), // 0.00001 ETH bridged on Base Network
  });
  ```

#### `submitFundTransaction({ txId})`

- Submits the transaction ID of a funding transaction to Turbo Payment Service for top up processing. The `txId` is the transaction ID of the transaction to be submitted.

  - Note: use this API if you've already executed your token transfer to the Turbo wallet. Otherwise, consider using `topUpWithTokens` to execute a new token transfer to the Turbo wallet and submit its resulting transaction ID for top up processing all in one go.

  ```typescript
  const turbo = TurboFactory.unauthenticated(); // defaults to arweave token type
  const { status, id, ...fundResult } = await turbo.submitFundTransaction({
    txId: "my-valid-arweave-fund-transaction-id",
  });
  ```

### TurboAuthenticatedClient

#### `getBalance()`

- Issues a signed request to get the credit balance of a wallet measured in AR (measured in Winston Credits, or winc).

  ```typescript
  const { winc: balance } = await turbo.getBalance();
  ```

#### `signer.getNativeAddress()`

- Returns the [native address](https://docs.ar.io/glossary.html#native-address) of the connected signer.

  ```typescript
  const address = await turbo.signer.getNativeAddress();
  ```

#### `getWincForFiat({ amount, promoCodes })`

- Returns the current amount of Winston Credits including all adjustments for the provided fiat currency, amount, and optional promo codes.

  ```typescript
  const { winc, paymentAmount, quotedPaymentAmount, adjustments } =
    await turbo.getWincForFiat({
      amount: USD(100),
      promoCodes: ["MY_PROMO_CODE"], // promo codes require an authenticated client
    });
  ```

#### `createCheckoutSession({ amount, owner, promoCodes })`

- Creates a Stripe checkout session for a Turbo Top Up with the provided amount, currency, owner, and optional promo codes. The returned URL can be opened in the browser, all payments are processed by Stripe. Promo codes require an authenticated client.

  ```typescript
  const { url, winc, paymentAmount, quotedPaymentAmount, adjustments } =
  await turbo.createCheckoutSession({
    amount: USD(10.0), // $10.00 USD
    owner: publicArweaveAddress,
    promoCodes: ['MY_PROMO_CODE'], // promo codes require an authenticated client
  });

  // Open checkout session in a browser
  if (process.platform === 'darwin') {
    // macOS
    exec(`open ${url}`);
  } else if (process.platform === 'win32') {
    // Windows
    exec(`start "" "${url}"`, { shell: true });
  } else {
    // Linux/Unix
    open(url);
  }
  ```

#### `uploadFile({ fileStreamFactory, fileSizeFactory, signal })`

- Signs and uploads a raw file. The provided `fileStreamFactory` should produce a NEW file data stream each time is it invoked. The `fileSizeFactory` is a function that returns the size of the file. The `signal` is an optional [AbortSignal] that can be used to cancel the upload or timeout the request. `dataItemOpts` is an optional object that can be used to configure tags, target, and anchor for the data item upload.

  ```typescript
  const filePath = path.join(__dirname, "./my-unsigned-file.txt");
  const fileSize = fs.stateSync(filePath).size;
  const uploadResult = await turbo.uploadFile({
    fileStreamFactory: () => fs.createReadStream(filePath),
    fileSizeFactory: () => fileSize,
    dataItemOpts: {
      // optional
      tags: [
        {
          name: "Content-Type",
          value: "text/plain",
        },
        {
          name: "My-Custom-Tag",
          value: "my-custom-value",
        },
      ],
      // no timeout or AbortSignal provided
    },
  });
  ```

#### `uploadFolder({ folderPath, files, dataItemOpts, signal, maxConcurrentUploads, throwOnFailure, manifestOptions})`

- Signs and uploads a folder of files. For NodeJS, the `folderPath` of the folder to upload is required. 
- For the browser, an array of `files` is required. 
- The `dataItemOpts` is an optional object that can be used to configure tags, target, and anchor for the data item upload. 
- The `signal` is an optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that can be used to cancel the upload or timeout the request. 
- The `maxConcurrentUploads` is an optional number that can be used to limit the number of concurrent uploads. 
- The `throwOnFailure` is an optional boolean that can be used to throw an error if any upload fails. 
- The `manifestOptions` is an optional object that can be used to configure the manifest file, including a custom index file, fallback file, or whether to disable manifests altogether. Manifests are enabled by default.

NodeJS Upload Folder

```typescript
const folderPath = path.join(__dirname, './my-folder');
const { manifest, fileResponses, manifestResponse } = await turbo.uploadFolder({
  folderPath,
  dataItemOpts: {
    // optional
    tags: [
      {
        // User defined content type will overwrite file content type
        name: 'Content-Type',
        value: 'text/plain',
      },
      {
        name: 'My-Custom-Tag',
        value: 'my-custom-value',
      },
    ],
    // no timeout or AbortSignal provided
  },
  manifestOptions: {
    // optional
    indexFile: 'custom-index.html',
    fallbackFile: 'custom-fallback.html',
    disableManifests: false,
  },
});
```

Browser Upload Folder

```typescript
<input type="file" id="folder" name="folder" webkitdirectory />
<script type="module">
  const folderInput = document.getElementById('folder');

  folderInput.addEventListener('change', async (event) => {
    const selectedFiles = folderInput.files;
    console.log('Folder selected:', selectedFiles);

    const { manifest, fileResponses, manifestResponse } =
      await turbo.uploadFolder({
        files: Array.from(selectedFiles).map((file) => file),
      });

    console.log(manifest, fileResponses, manifestResponse);
  });
</script>
```

#### `topUpWithTokens({ tokenAmount, feeMultiplier })`

- Tops up the connected wallet with Credits by submitting a payment transaction for the token amount to the Turbo wallet and then submitting that transaction ID to Turbo Payment Service for top up processing.

  - The `tokenAmount` is the amount of tokens in the token type's smallest unit value (e.g: Winston for arweave token type) to fund the wallet with.
    - Note: As of release 1.5.0, only AR tokens are supported with `topUpWithTokens`.
  - The `feeMultiplier` (optional) is the multiplier to apply to the reward for the transaction to modify its chances of being mined. Credits will be added to the wallet balance after the transaction is confirmed on the given blockchain. Defaults to 1.0, meaning no multiplier.

- Arweave (AR) Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'arweave' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: WinstonToTokenAmount(100_000_000), // 0.0001 AR
    feeMultiplier: 1.1, // 10% increase in reward for improved mining chances
  });
  ```

  - AR.IO Network (ARIO) Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'ario' })

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: ARIOToTokenAmount(100), // 100 $ARIO
  })
  ```

- Ethereum (ETH) Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'ethereum' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: ETHToTokenAmount(0.00001), // 0.00001 ETH
  });
  ```

- Solana (SOL) Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'solana' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: SOLToTokenAmount(0.00001), // 0.00001 SOL
  });
  ```

- Polygon ( POL / MATIC ) Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'pol' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: POLToTokenAmount(0.00001), // 0.00001 POL
  });
  ```

- KYVE Crypto Top Up

  ```typescript
  const turbo = TurboFactory.authenticated({ signer, token: 'kyve' });

  const { winc, status, id, ...fundResult } = await turbo.topUpWithTokens({
    tokenAmount: KYVEToTokenAmount(0.00001), // 0.00001 KYVE
  });
  ```

####  `shareCredits({ approvedAddress, approvedWincAmount, expiresBySeconds })`

Shares credits from the connected wallet to the provided native address and approved winc amount. This action will create a signed data item for the approval.

```typescript
const { approvalDataItemId, approvedWincAmount } = await turbo.shareCredits({
  approvedAddress: '2cor...VUa',
  approvedWincAmount: 0.08315565032,
  expiresBySeconds: 3600,
});
```

#### `revokeCredits({ approvedAddress })`

Revokes all credits shared from the connected wallet to the provided native address.

```typescript
const revokedApprovals = await turbo.revokeCredits({
  approvedAddress: '2cor...VUa',
});
```

#### `getCreditShareApprovals({ userAddress })`

Returns all given or received credit share approvals for the connected wallet or the provided native address.

```typescript
const { givenApprovals, receivedApprovals } =
  await turbo.getCreditShareApprovals({
    userAddress: '2cor...VUa',
  });
```

## CLI

### Install CLI

Global installation:

```shell
npm install -g @ardrive/turbo-sdk
```

or

```shell
yarn global add @ardrive/turbo-sdk
```

or install locally as a dev dependency:

```shell
npm install --save-dev @ardrive/turbo-sdk
```

or

```shell
yarn add -D @ardrive/turbo-sdk
```

### CLI Usage

```shell
turbo --help
```

or from local installation:

```shell
yarn turbo --help
```

```shell
npx turbo --help
```

#### Options

- `-V, --version` - output the version number
- `-h, --help` - display help for command
- `--dev` - Enable development endpoints (default: false)
- `-g, --gateway <url>` - Set a custom crypto gateway URL
- `-t, --token <token>` - Token type for the command or connected wallet (default: "arweave")
- `--cu-url <url>` - Set a custom AO compute unit URL
- `--process-id <id>` - Set a custom target process ID for AO action

- `-w, --wallet-file <filePath>` - Wallet file to use with the action. Formats accepted: JWK.json, KYVE or ETH private key as a string, or SOL Secret Key as a Uint8Array
- `-m, --mnemonic <phrase>` - Mnemonic to use with the action (KYVE only)
- `-p, --private-key <key>` - Private key to use with the action

#### Commands

##### `balance`

Get the balance of a connected wallet or native address in Turbo Credits.

Command Options:

- `-a, --address <nativeAddress>` - Native address to get the balance of

e.g:

```shell
turbo balance --address `crypto-wallet-public-native-address` --token solana
```

```shell
turbo balance --wallet-file `../path/to/my/wallet.json` --token arweave
```

##### `top-up`

Top up a connected wallet or native address with Turbo Credits using a supported fiat currency. This command will create a Stripe checkout session for the top-up amount and open the URL in the default browser.

Command Options:

- `-a, --address <nativeAddress>` - Native address to top up
- `-c, --currency <currency>` - Currency to top up with
- `-v, --value <value>` - Value of fiat currency for top up. e.g: 10.50 for $10.50 USD

e.g:

```shell
# Open Stripe hosted checkout session in browser to top up for 10.00 USD worth of Turbo Credits
turbo top-up --address 'crypto-wallet-public-native-address' --token ethereum --currency USD --value 10
```

##### `crypto-fund`

Fund a wallet with Turbo Credits by submitting a payment transaction for the crypto amount to the Turbo wallet and then submitting that transaction id to Turbo Payment Service for top up processing. Alternatively, submit a transaction ID of an existing funding transaction to Turbo Payment Service for top up processing.

Command Options:

- `-v, --value <value>` - Value of crypto token for fund. e.g: 0.0001 for 0.0001 KYVE
- `-i, --tx-id <txId>` - Transaction ID of an existing funding transaction
- `-w, --wallet-file <filePath>` - Wallet file to use with the action. Formats accepted: JWK.json, KYVE or ETH private key as string, or SOL Secret Key as a Uint8Array

e.g:

```shell
turbo crypto-fund --value 0.0001 --token kyve --private-key 'b27...45c'
```

```shell
turbo crypto-fund --tx-id 'my-valid-arweave-fund-transaction-id' --token arweave
```

```shell
turbo crypto-fund --value 100 --token ario --wallet-file ../path/to/arweave/wallet/with/ario.json
```

```shell
# Use a custom AO process ID and compute unit:
turbo crypto-fund --value 100 --token ario --process-id agYcCFJtrMG6cqMuZfskIkFTGvUPddICmtQSBIoPdiA --cu-url https://cu.ao-testnet.xyz
```

##### `upload-folder`

Upload a folder of files and create and upload a manifest file for the folder upload to the Turbo Upload Service.

Command Options: 

- `-f, --folder-path <folderPath>` - Path to the folder to upload
- `--index-file <indexFile>` - File to use for the "index" path in the resulting manifest
- `--fallback-file <fallbackFile` - File to use for the "fallback" path in the resulting manifest
- `--no-manifest` - Disable manifest creation
- `--max-concurrency <maxConcurrency>` - Maximum number of concurrent uploads

e.g:

```shell
turbo upload-folder --folder-path '../path/to/my/folder' --token solana --wallet-file ../path/to/sol/sec/key.json
```

##### `upload-file`

Upload a file to the Turbo Upload Service.

Command Options:

- `-f, --file-path <filePath>` - Path to the file to upload

e.g:

```shell
turbo upload-file --file-path '../path/to/my/file.txt' --token ethereum --wallet-file ../path/to/eth/private/key.txt
```

##### `price`

Get the current credit price estimate from Turbo Payment Service for a given value and price type.

Command Options: 

- `--value <value>` - Value to get the price for. e.g: 10.50 for $10.50 USD, 1024 for 1 KiB, 1.1 for 1.1AR
- `--type <type>` - Type of price to get, e.g: 'bytes', 'arweave', 'usd', 'kyve'. Default: 'bytes'

e.g:

```shell
turbo price --value 10.50 --type usd
```

```shell
turbo price --value 1024 --type bytes
```

```shell
turbo price --value 1.1 --type arweave
```


#### `share-credits`

Shares credits from the connected wallet to the provided native address and approved winc amount.

Command Options:

- `-a, --address <nativeAddress>` - Native address that will receive the Credits
- `-v, --value <value>` - Value of winc to share to the target address
- `-e, --expires-by-seconds <seconds>` - Expiry time in seconds for the credit share approval

e.g:

```bash
turbo share-credits --address 2cor...VUa --value 0.083155650320 --wallet-file ../path/to/my/wallet --expires-by-seconds 3600
```

#### `revoke-credits`

Revoke all credits shared from the connected wallet to the provided native address.

Command Options:

- `-a, --address <nativeAddress>` - Native address to revoke credit share approvals for

e.g:

```bash
turbo revoke-credits --wallet-file ../path/to/my/wallet
```

#### `list-share`

List all given and received credit share approvals from the connected wallet or the provided native address.

Command Options:
- `-a, --address <nativeAddress>` - Native address to list credit share approvals for

e.g:

```bash
turbo list-shares --address 2cor...VUa --wallet-file ../path/to/my/wallet
```

## Turbo Credit Sharing

Users can share their purchased Credits with other users' wallets by creating Credit Share Approvals. These approvals are created by uploading a signed data item with tags indicating the recipient's wallet address, the amount of Credits to share, and an optional amount of seconds that the approval will expire in. The recipient can then use the shared Credits to pay for their own uploads to Turbo.

Shared Credits cannot be re-shared by the recipient to other recipients. Only the original owner of the Credits can share or revoke Credit Share Approvals. Credits that are shared to other wallets may not be used by the original owner of the Credits for sharing or uploading unless the Credit Share Approval is revoked or expired.

Approvals can be revoked at any time by similarly uploading a signed data item with tags indicating the recipient's wallet address. This will remove all approvals and prevent the recipient from using the shared Credits. All unused Credits from expired or revoked approvals are returned to the original owner of the Credits.

To use the shared Credits, recipient users must provide the wallet address of the user who shared the Credits with them in the `x-paid-by` HTTP header when uploading data. This tells Turbo services to look for and use Credit Share Approvals to pay for the upload before using the signer's balance.

For user convenience, during upload the Turbo CLI will use any available Credit Share Approvals found for the connected wallet before using the signing wallet's balance. To instead ignore all Credit shares and only use the signer's balance, use the `--ignore-approvals` flag. To use the signer's balance first before using Credit shares, use the `--use-signer-balance-first` flag. In contrast, the Turbo SDK layer does not provide this functionality and will only use approvals when `paidBy` is provided.

The Turbo SDK provides the following methods to manage Credit Share Approvals:

- `shareCredits`: Creates a Credit Share Approval for the specified wallet address and amount of Credits.
- `revokeCredits`: Revokes all Credit Share Approvals for the specified wallet address.
- `listShares`: Lists all Credit Share Approvals for the specified wallet address or connected wallet.
- `dataItemOpts: { ...opts, paidBy: string[] }`: Upload methods now accept `paidBy`, an array of wallet addresses that have provided Credit Share Approvals to the user from which to pay, in the order provided and as necessary, for the upload.

The Turbo CLI provides the following commands to manage Credit Share Approvals:

- `share-credits`: Creates a Credit Share Approval for the specified wallet address and amount of Credits.
- `revoke-credits`: Revokes all Credit Share Approvals for the specified wallet address.
- `list-shares`: Lists all Credit Share Approvals for the specified wallet address or connected wallet.
- `paidBy: --paid-by <paidBy...>`: Upload commands now accept `--paid-by`, an array of wallet addresses that have provided credit share approvals to the user from which to pay, in the order provided and as necessary, for the upload.
- `--ignore-approvals`: Ignore all Credit Share Approvals and only use the signer's balance.
- `--use-signer-balance-first`: Use the signer's balance first before using Credit Share Approvals.


## Developers

### Requirements

- `nvm`
- `node` (>= 18)
- `yarn`

### Setup & Build

- `yarn install` - installs dependencies
- `yarn build` - builds web/node/bundled outputs

### Testing

- `yarn test` - runs integration tests against dev environment (e.g. `https://payment.ardrive.dev` and `https://upload.ardrive.dev`)
- `yarn test:docker` - runs integration tests against locally running docker containers (recommended)
- `yarn example:web` - opens up the example web page
- `yarn example:cjs` - runs example CJS node script
- `yarn example:esm` - runs example ESM node script

### Linting & Formatting

- `yarn lint:check` - checks for linting errors
- `yarn lint:fix` - fixes linting errors
- `yarn format:check` - checks for formatting errors
- `yarn format:fix` - fixes formatting errors

### Architecture

- Code to interfaces.
- Prefer type safety over runtime safety.
- Prefer composition over inheritance.
- Prefer integration tests over unit tests.

## Contributions

If you encounter any issues or have feature requests, please file an issue on our GitHub repository. Contributions, pull requests, and feedback are both welcome and encouraged.

For more information on how to contribute, please see [CONTRIBUTING.md](https://github.com/ardriveapp/turbo-sdk/blob/main/CONTRIBUTING.md).

[package.json]: https://github.com/ardriveapp/turbo-sdk/blob/main/package.json
[examples]: https://github.com/ardriveapp/turbo-sdk/tree/main/examples
[TurboAuthenticatedClient]: #turboauthenticatedclient
[AbortSignal]: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
