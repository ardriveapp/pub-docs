---
permalink: /docs/arfs/
---

# ArFS Protocol: A Decentralized File System on Arweave

Arweave File System, or “ArFS” is a data modeling, storage, and retrieval protocol designed to emulate common file system operations and to provide aspects of mutability to your data hierarchy on [Arweave](https://ardrive.io/what-is-arweave/)'s otherwise permanent, immutable data storage blockweave.

Due to Arweave's permanent, immutable and public nature traditional file system operations such as permissions, file/folder renaming and moving, and file updates cannot be done by simply updating the on-chain data model.  

ArFS works around this by implementing a privacy and encryption pattern and defining an append-only transaction data model using tags within [Arweave Transaction headers](https://docs.arweave.org/developers/server/http-api#transaction-format).

## Key Features

### File Structure

ArFS organizes files and folders using a hierarchical structure. Files are stored as individual transactions on the Arweave blockchain, while folders are metadata that reference these file transactions.

### Metadata

Each file and folder has associated metadata, such as the name, type, size, and modification timestamp. ArFS leverages Arweave's tagging system to store this metadata in a standardized format, which allows for easy querying and organization.

### File Permissions

ArFS supports public and private file permissions. Public files can be accessed by anyone on the network, while private files are encrypted using the owner's private key, ensuring only they can decrypt and access the content.

### File Versioning

ArFS supports versioning of files, allowing users to store multiple versions of a file and access previous versions at any time. This is achieved by linking new file transactions to previous versions through the use of metadata tags.

### Data Deduplication

To minimize storage redundancy and costs, ArFS employs data deduplication techniques. If a user tries to store a file that already exists on the network, the protocol will simply create a new reference to the existing file instead of storing a duplicate copy.

### Search and Discovery

ArFS enables users to search and discover files based on their metadata, such as file names, types, and tags. This is made possible by indexing the metadata stored within the Arweave blockchain.

### Interoperability

ArFS is designed to be interoperable with other decentralized applications and services built on the Arweave network. This allows for seamless integration and collaboration between different applications and users.

## Getting Started

To start using ArFS, you'll need to familiarize yourself with the Arweave ecosystem, acquire AR tokens to cover storage costs, and choose a compatible client or library to interact with the ArFS protocol.

## ArFS Version History

<div>
    <table class='inline-table'>
        <tr>
            <th>Version</th>
            <th>Date</th>
            <th>Release Notes</th>
        </tr>
        <tr>
            <td>0.10</td>
            <td>August 2020</td>
            <td>The brief, beta version that was in use during initial testing of ArDrive across Web (Dart) and legacy CLI (Typescript).</td>
        </tr>
        <tr>
            <td>0.11</td>
            <td>September 2020</td>
            <td>Includes all of the major functionality supporting file systems on Arweave including new drives, folders, files, renames, moves and privacy.</td>
        </tr>
        <tr>
            <td>0.12</td>
            <td>December 2022</td>
            <td>Added Snapshot entities to support quick synchronization of drive state.</td>
        </tr>
    </table>
</div>
        




## Resources

For more information, documentation, and community support, refer to the following resources:

- [Arweave Official Website](https://www.arweave.org/)
- [Arweave Developer Documentation](https://docs.arweave.org/)
- [Arweave Community Forums](https://community.arweave.org/)

