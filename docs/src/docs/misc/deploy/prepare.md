---
prev: none
permalink: /docs/misc/deploy
---

# Preparing Your dApp

To make sure dApps work correctly on the Arweave blockchain, they need to be set up in a specific manner. This is because, unlike traditional web hosting, there are no centralized servers for browsers to request files from. Your dApp needs to be able to handle navigation inside the client's browser instead of relying on communication between the client and a server, and not rely on a server as a point of origin for file paths. This is done by ensuring the following:

- Your dApp must use [hash routing](routing.md) 
- All internal links in your dApp must use [relative file paths](paths.md).

Failure to properly implement either will result in your dApp not working the way it should once it is deployed onto Arweave.