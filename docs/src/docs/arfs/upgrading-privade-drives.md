---
prev: false
---

# Upgrading Private Drives

## Overview

[Private drives](./privacy.md#private-drives) rely on a combination of user-set password and a wallet signature for encryption and decryption. [Wander](https://www.wander.app/), formerly ArConnect, is a popular Arweave wallet that is depreciating its `signature()` method in favor of `signDataItem()`. Because of this, the method used for obtaining signatures for private drives must change as well. ArFS v0.15 was introduced to address this need.

Because private drive entities exist on chain and their encryption cannot be altered, an upgrade is required to allow continued access to "V1" private drives. This upgrade essentially takes a signature from the drive owner wallet, encrypts it using the required signature structure for V2 private drives, and places it on Arweave. This allows the signature to be fetched and decrypted using the latest methods before using it to decrypt the private drive in the V1 format.

## Upgrading

### Using ArDrive

The upgrade process has been made simple by using the [ArDrive app](https://app.ardrive.io/). 

1. Log into ArDrive

    If the connected wallet has V1 private drives that need to be updated, a banner will appear at the top of the screen.

    <img class='amazingdiagram' :src='$withBase("/images/upgrade-banner.png")' />

2. Click on the "Update Now!" button on the banner

    This will open a modal listing the drives that need to be updated, and linking to more information about the upgrade process.

    <img class='amazingdiagram' :src='$withBase("/images/upgrade-modal.png")' />

3. Click "Update"

    The process of upgrading the private drives will begin, and involve signing messages depending on how many drives are being upgraded. When the process is complete, a new modal will appear listing the drives that have been successfully updated.

    <img class='amazingdiagram' :src='$withBase("/images/upgrade-complete.png")' />


### Manually

coming soon. Or maybe not, do we need a guide for manually upgrading drives?