---
homepage: true
permalink: /docs/cli/
---

# CLI

The _ArDrive Command Line Interface (CLI)_ is a Node.js application for terminal-based [ArDrive] workflows. It also offers utility operations for securely interacting with Arweave wallets and inspecting various [Arweave] blockchain conditions.

Create your first drive and permanently store your first file on the permaweb with a series of simple CLI commands like so:

```shell
ardrive create-drive --wallet-file /path/to/my/wallet.json --drive-name "Teenage Love Poetry"
{
    "created": [
        {
            "type": "drive",
            "metadataTxId": "giv2R8Xj0bbe6l5taBTQJk_38zwIrMH_g1-knSCisjU",
            "entityId": "898687ea-b678-4f86-b4e7-49560b190356",
            "bundledIn": "Vj2x4IBEAezBvhj5RgtA247W_q3S10suI6l0E30GPoE",
            "entityName": "Teenage Love Poetry"
        },
        {
            "type": "folder",
            "metadataTxId": "VljnttwUxRStnVuPYakF9e2whjhYJVWB0nSxD5dVyJ8",
            "entityId": "f0c58c11-430c-4383-8e54-4d864cc7e927",
            "bundledIn": "Vj2x4IBEAezBvhj5RgtA247W_q3S10suI6l0E30GPoE",
            "entityName": "Teenage Love Poetry"
        },
        {
            "type": "bundle",
            "bundleTxId": "Vj2x4IBEAezBvhj5RgtA247W_q3S10suI6l0E30GPoE"
        }
    ],
    "tips": [],
    "fees": {
        "Vj2x4IBEAezBvhj5RgtA247W_q3S10suI6l0E30GPoE": "44579472"
    }
}

ardrive upload-file --wallet-file /path/to/my/wallet.json --parent-folder-id "f0c58c11-430c-4383-8e54-4d864cc7e927" --local-path ./helloworld.txt --dest-file-name "ode_to_ardrive.txt"
{
    "created": [
        {
            "type": "file",
            "entityName": "ode_to_ardrive.txt",
            "entityId": "bd2ce978-6ede-4b0d-8f79-2d7bc235a0e0",
            "dataTxId": "tSMcfvAQu_tKLUkdvRRbqdX93oAf3h6c9eJsSj8mXL4",
            "metadataTxId": "EvE06MmE9IKeUzFMnxSgY1M5tJX4uHU64-n8Pf_lZfU",
            "bundledIn": "qjdHiQoWlSjCvhj5RgtA247W_q3S10suI6l0E30GPoE",
            "sourceUri": "file://Users/BestArDriver/Uploads/helloworld.txt"
        },
        {
            "type": "bundle",
            "bundleTxId": "qjdHiQoWlSjCvhj5RgtA247W_q3S10suI6l0E30GPoE"
        }
    ],
    "tips": [
        {
            "txId": "qjdHiQoWlSjCvhj5RgtA247W_q3S10suI6l0E30GPoE",
            "recipient": {
                "address": "i325n3L2UvgcavEM8UnFfY0OWBiyf2RrbNsLStPI73o"
            },
            "winston": "10000000"
        }
    ],
    "fees": {
        "qjdHiQoWlSjCvhj5RgtA247W_q3S10suI6l0E30GPoE": 44579472
    }
}
```

**This project is in a state of active development. Use at your own risk!**



# ArDrive

[ArDrive] is a permanent storage platform whose [applications and core libraries][ardrive-github] offer hierarchical organization, privacy via complete end-to-end encryption, flexibility, extensibility, and access control over your most valuable data, all made possible by its innovative core technology, the [Arweave File System (ArFS) Protocol][arfs].

## ArFS

[ArFS] is a data modeling, storage, and retrieval protocol designed to emulate common file system operations and to provide aspects of mutability to your data hierarchy on [Arweave]'s otherwise permanent, immutable data storage blockweave.

## Data Portability

Data uploaded via the ArDrive CLI, once indexed by Arweave's Gateways and sufficiently seeded across enough nodes on the network, can be accessed via all other ArDrive applications including the [ArDrive Web application][ardrive-web-app] at https://app.ardrive.io.

All transactions successfully executed by ArDrive can always be inspected in the [Viewblock blockchain explorer].

## Intended Audience

This tool is intended for use by:

<ul>
<li>ArDrive power users with advanced workflows and resource efficiency in mind: bulk uploaders, those with larger storage demand, game developers, nft creators, storage/db admins, etc.</li>
<li>Automation tools</li>
<li>Services</li>
<li>Terminal aficionados</li>
<li>Extant and aspiring cypherpunks</li>
</ul>

For deeper integrations with the [ArDrive] platform, consider using the [ArDrive Core][ardrive-core] (Node) library's configurable and intuitive class interfaces directly within your application.


[ardrive]: https://ardrive.io
[arweave]: https://ardrive.io/what-is-arweave/
[ardrive-github]: https://github.com/ardriveapp/
[arfs]: https://ardrive.atlassian.net/l/c/m6P1vJDo
[ardrive-web-app]: https://app.ardrive.io
[ardrive-core]: https://github.com/ardriveapp/ardrive-core-js
[yarn-install]: https://yarnpkg.com/getting-started/install
[nvm-install]: https://github.com/nvm-sh/nvm#installing-and-updating
[wsl-install]: https://code.visualstudio.com/docs/remote/wsl
[editor-config-vscode]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[prettier-vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[zipfs-vscode]: https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs
[eslint-vscode]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[viewblock blockchain explorer]: https://viewblock.io/arweave/
[ardrive-discord]: https://discord.gg/w4vvrezD
[arconnect]: https://arconnect.io/
[kb-wallets]: https://ardrive.atlassian.net/l/c/FpK8FuoQ
[arweave-manifests]: https://github.com/ArweaveTeam/arweave/wiki/Path-Manifests
[example-manifest-webpage]: https://arweave.net/qozq9YIUPEHfZhoTp9DkBpJuA_KNULBnfLiMroj5pZI
[arlocal]: https://github.com/textury/arlocal
[mozilla-mime-types]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
[viewblock]: https://viewblock.io/arweave/
[tx_anchors]: https://docs.arweave.org/developers/server/http-api#field-definitions
[gql-guide]: https://gql-guide.vercel.app/#owners
