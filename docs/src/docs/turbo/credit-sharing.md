---
# permalink: "/test"
---
# Turbo Credit Sharing

## Overview

Turbo Credits are the payment medium used by the Turbo Upload Service to facilitate uploading data to the Arweave Blockweave. While they exist as assets accessible on Arweave, they are not a cryptocurrency token in the traditional sense. They cannot be transferred, traded, exchanged, or otherwise interacted with in a way that you typically could with a cryptocurrency token. A purchase of Turbo Credits also cannot be refunded, whether obtained via fiat or through exchanging supported cryptocurrency tokens like Ethereum or Kyve.

Recently, however, the Turbo Upload Service has been upgraded to allow holders of Turbo Credits to share the upload power of those Credits with other users. This means holders of Turbo Credits can authorize other users to use some of their Credits for uploading data to Arweave without those Credits ever leaving their own wallet.

## How it Works

A holder of Turbo Credits may explicitly authorize another wallet to use some of their Turbo Credits for uploading to Arweave. The shared Credits become "locked", meaning that ONLY the authorized user is able to access those Credits to pay for uploading data. This happens without the Credits ever leaving the wallet of the original holder. 

Authorizations, or "Approvals" are data items that are uploaded to Arweave that the Turbo Upload Service is able to see when processing transactions. The uploaded data item states the address of the user being approved, the amount of Turbo Credits (in winc) being approved for that user, and an optional time limit at which point the approval will expire and the user will lose access to those Credits. While processing upload transactions, Turbo will automatically find these approvals for the uploading user and pull funds from shared Credits before Credits held by the user directly. Approvals that are closest to expiring will be pulled from first, unless a different criteria is provided.

Uploading users have several options for specifying which approval should be prioritized to pay for uploads in the case where they have more than one:

- `paidBy`: Uploading users can specify the order of wallet addresses that funds should be pulled from to pay for their current upload by supplying a `paidBy` value. This is an ordered list of wallet addresses or native addresses, and can include the uploader's own address.
- `ignore-approvals`: When using the Turbo CLI to upload data, the `--ignore-approvals` flag will ignore any approved Credits and only attempt to pay for an upload from the user's own balance of Credits.
- `use-signer-balance-first`: When using the Turbo CLI to upload data, the `--use-signer-balance-first` flag will attempt to pay for an upload using the user's own balance of credits first. If the user does not have enough Credits to cover the entire upload, only after their balance is exhausted will approved Credits be accessed to cover the remaining cost.

Holders of Turbo Credits can create approvals for users via the Turbo SDK or the Turbo CLI, with the specific methods used to do so being outlined, with examples, in the [Turbo SDK/CLI docs](./turbo-sdk/index.md). Holders can also revoke approvals at any time to regain access to their Credits, even if an approval has an explicit expiry time.

## Use Cases

### Organizational Funds

For companies or organizations that routinely upload data to Arweave, it can be challenging to keep individual user wallets funded sufficiently to complete their work. There is also a risk of over funding users who only have an occasional need to upload data. Given that Turbo Credits are non-refundable, this can be a significant waste of limited resources. One possible solution is to give all employees access to the core organizational wallet. This is usually a very bad idea though. Anyone who has keys to access a crypto wallet has complete control of that wallet. Any other assets held by the wallet could be transferred out, or an employee could take those keys with them when they leave to retain access to the Turbo Credits held.

Turbo Credit Sharing solves this issue by allowing a central organizational wallet to keep only itself funded with Turbo Credits that can then be shared with wallets for any partners or employees as needed, and easily recovered if they are not needed by a particular user.

### Onboarding Periods

Any product or service that has users upload data to Arweave can use Turbo Credit Sharing to give new users uploading power for a certain period of time as an introduction to what they have to offer. Having to make a purchase, especially of a third-party product, can be a major blocker for onboarding new users, but a period of controlled free-for-them access can give the company a chance to showcase why what they have to offer is worth the cost.

### Collaboration

When multiple devolopers or contributor are working on a joint project that requires uploading data to Arweave, managing the funding for each participant can be cumbersome. By sharing Turbo Credits, the project leader or funding entity can grant each collaborator access to upload without directly handling individual wallets. This facilitates seamless cooperation without the risk of losing control over funds or overfunding specific contributors.

### Community or Open Source Initiatives

In open source or community-driven efforts that involve uploading data to Arweave, such as the [Banned Books Week](https://bannedbooksweek.org/event/the-power-of-the-permaweb-in-protecting-banned-books/) project to protect books that are often censored, project managers can share Turbo Credits with trusted contributors. This supports collaborative efforts without having to worry about decentralized funding. By using approvals, maintainers can control how Credits are used, set expiration times, and ensure that shared resources are managed responsibly.

### Event Based or Seasonal Promotions

Companies and services can run promotional events or campaigns where users can upload data for free-to-them for a limited time. Turbo Credit Sharing makes it easy to share upload power with participants, allowing them to experience the service without initial investment. After the promotional period ends, the Credits remain with the original holder, ensuring that company resources are not permanently allocated.

### Research and Development Trials

Academic institutions or research organizations conducting studies involving data uploads to Arweave can benefit from shared Turbo Credits. A central research wallet can allocate upload power to various project teams or individual researchers. This approach helps ensure that project budgets are managed centrally while allowing flexibility in data uploads, without distributing sensitive wallet keys to team members.

### Educational Programs

Schools or educational platforms teaching blockchain development or data permanence could use Turbo Credit Sharing to allow students or participants to upload data as part of their learning exercises. This gives learners hands-on experience without requiring them to fund their wallets, making it more accessible and encouraging engagement with the technology.

### Data Migration Services

Data migration services or third-party consultants assisting with moving data onto the Arweave Blockweave can be given controlled access to an organization’s Turbo Credits for a project’s duration. This ensures that consultants can carry out the migration without needing their own funding or wallet management, streamlining project operations while maintaining security.

