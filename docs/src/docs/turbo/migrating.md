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

ArDrive Turbo can be selected as the upload method for projects that currently use the Irys SDK by setting the `url` value to `https://up.arweave.net` when instantiating the Irys instance: 

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
    url: "https://up.arweave.net", // URL of the node you want to connect to, https://up.arweave.net will facilitate upload using ArDrive Turbo.
    token, // Token used for payment and signing
    key: wallet, // Arweave wallet
  });

  const receipt = await irys.upload("file/to/upload");
  console.log(receipt);
}
```

## Using Irys CLI with Turbo 

Selecting Turbo as the upload method using the Irys CLI is similarly simple. `https://up.arweave.net` can be set as the target node when using the `upload` or `upload-dir` CLI commands with the `-h` flag:

```
irys upload importantFile.pdf -h https://up.arweave.net --tags superImportant needsPermanence
```

```
irys upload-dir ./bigFolder -h https://up.arweave.net 
```

Other flags may be used as normal


## Differences


### Crypto Top Ups / Withdrawals

Turbo does not natively support block chains other than Arweave. This means that some features dealing with other chains, like topping up your Irys balance with other coins, or withdrawing from your Irys balance are not *currently* supported.

## Wallet Extensions and Providers

Turbo is not *yet* designed to interact with wallet extensions and providers that are not a part of the Arweave ecosystem. While the ArDrive Web App does support generating an Arweave wallet from an EVM wallet using Metamask, Turbo cannot facilitate uploading using an EVM wallet directly.

## GraphQL

Projects that do claim to allow uploading from non-arweave wallets actually accept payment on their front ends and handle the actual uploading using an Arweave wallet. As such, the `owner` of an upload will not match the non-arweave wallet address and the upload cannot be found by searching for it in GraphQL. This value can, however, be added as a tag on the upload and searched in that way.