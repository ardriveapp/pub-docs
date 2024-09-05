---
next: false
---

# Migrating to Turbo From Irys

::: tip Irys Version Management
This was tested using Irys SDK v0.1.1 Future versions of the Irys SDK, and by extension the Irys CLI, may introduce breaking changes. It is suggested that developers lock their version.
:::

## Overview

In the interest of maintaining robust and decentralized infrastructure throughout the Arweave community, it is important to provide options and alternatives to single points of potential failure. With this in mind, ArDrive Turbo provides an Irys-compatible API, allowing for simple migrations across services if desired.

## Using Irys SDK with Turbo

Turbo can be selected as the upload method for projects that currently use the Irys SDK by setting the `url` value to `https://turbo.ardrive.io` when instantiating the Irys instance: 

```javascript
// import Irys as normal
import Irys from "@irys/sdk";
import fs from "fs";

// load Arweave wallet
const wallet = JSON.parse(
  fs
    .readFileSync(
      "Keyfile.json",
    )
    .toString(),
);

const init = async () => {
  const token = "arweave";
  const irys = new Irys({
    url: "https://turbo.ardrive.io", // URL of the node you want to connect to, https://turbo.ardrive.io will facilitate upload using ArDrive Turbo.
    token, // Token used for payment and signing
    key: wallet, // Arweave wallet
  });

  const receipt = await irys.upload("file/to/upload");
  console.log(receipt);
}
```

## Using Irys CLI with Turbo 

Selecting Turbo as the upload method using the Irys CLI is similarly simple. `https://turbo.ardrive.io` can be set as the target node when using the `upload` or `upload-dir` CLI commands with the `-h` flag:

```
irys upload importantFile.pdf -h https://turbo.ardrive.io --tags superImportant needsPermanence
```

```
irys upload-dir ./bigFolder -h https://turbo.ardrive.io 
```

Other flags may be used as normal


## Purchasing Turbo Credits with the Irys SDK

All uploads to Arweave through Turbo are paid for using Turbo Credits. Turbo Credits can be purchased through the `fund` method in the Irys SDK when the Irys instance is set to use Turbo. Currently, Turbo supports purchasing Turbo Credits with Arweave tokens (AR), Eth, and Sol.

```typescript
const irys = async () => {
	const token = "ethereum";

	const irys = new Irys({
		url: "https://turbo.ardrive.io", // URL of the node you want to connect to, https://turbo.ardrive.io will facilitate upload using ArDrive Turbo.
		token, // Token used for payment
		key: process.env.PRIVATE_KEY, // ETH private key
	});
	return irys;
};

try {
	const fundTx = await irys.fund(irys.utils.toAtomic(0.05)); // converts 0.05 ETH to its equivalent in Wei
	console.log(`Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${irys.token}`);
} catch (e) {
	console.log("Error funding node ", e);
}
```