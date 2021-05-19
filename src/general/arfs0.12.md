# Proposed Version 0.12
An updated version of ArFS
***
## New Changes Proposed
- Hiding files (with isHidden)
- NFT Entity Type using Arweave Atomic NFT standard
- Advanced Private Drive and File Sharing with Friending
- Social Voting aka Like Button
- Public Drive Publish
  
## Introduction
ArweaveFS is a data model designed to emulate file systems on Arweave.
Due to Arweave's permanent, immutable nature traditional file system operations such as file/folder renaming and moving, and file updates cannot be done by simply updating the on-chain data model. ArweaveFS works around this by defining an append only transaction data model that allows the state of the file system to be constructed on the client.

## Entity Data Model
ArweaveFS defines several entities for storing file system state on Arweave. These entities have their data split between being stored as tags on their transaction or encoded as JSON as the data of their transaction.  

Drive entities require a single metadata transaction, with standard Drive tags and encoded JSON with secondary metadata.
Folder entities require a single metadata transaction, with standard Folder tags and an encoded JSON with secondary metadata.
File entities require a metadata transaction, with standard File tags an en encoded JSON with secondary metadata.  
File entities also require a second data transaction, which includes a limited set of File tags and the actual file data itself.

MetaData stored in any transaction tags will be defined in the following manner:

```
Example-Tag: "example-data"
```

While MetaData stored any JSON in the transaction will be defined in the following manner:

```
{
    "exampleField": "exampleData"
}
```

Fields suffixed with `?` are optional.

Field enum values are defined in the format "value 1 | value 2".

All metadata transactions that store these entities unencrypted should define a `Content-Type` tag with value `application/json` and an `ArFS` tag with the version of ArFS specification it implements, currently `0.12`.  

## Drive Privacy
Drives can store either public or private data, indicated by the `Drive-Privacy` tag on the drive entity.  All files and folders contained within will follow this privacy setting.  Once a Drive is public, it cannot be made private and visa-versa.

### Public Drives
If a Drive entity is `public`, additional tags for encryption are not needed. Public Drives are permanently available for the entire world to view.

### Private Drives
If a Drive entity is `private`, an additional tag `Drive-Auth-Mode` is used to indicate how the Drive Key is derived. ArDrive clients currently leverage a secure `password` along with the Arweave Wallet private key signature to derive the global Drive key.
On every encrypted entity, a `Cipher` tag must be specified. The required public parameters for decrypting the data must also be specified with the parameter's tag name prefixed by `Cipher-*` eg. `Cipher-IV`. If the parameter is byte data it should be encoded as Base64 in the tag. ArDrive clients currently leverage AES256-GCM for all symmetric encryption, which requires a Cipher Initialization Vector consisting of 12 random bytes.
Additionally, all encrypted transactions should have the `Content-Type` tag `application/octet-stream` as opposed to `application/json`.
Private drives have a global drive key, `D`, and multiple file keys, `F`, for encryption. `D` is used for encrypting both Drive and Folder Metadata whereas `F` is used for encrypting File Metadata and the actual stored data. Having these different keys, `D` and `F`, allows a user to share specific files without revealing the contents of their entire drive.
`D` is derived using HKDF-SHA256 with an unsalted RSA-PSS signature of the drive's id and a user provided password. `F` is also derived using HKDF-SHA256 with the drive key and the file's id. A reference implementation is available [here].

### Published (NEW)
If a Drive entity is `published`, additional tags for encryption are not needed. Published Drives are like Public Drives and are available for the entire world to view. However, when a Drive is "published”, the Drive owner is tagging it to be more easily aggregated by ArFS Drive Explorers that only surface published data.

## Entity Types

### Drive Entity
A Drive is a logical grouping of folders and files. All folders and files must be part of a drive, and reference the Drive ID.
When creating a Drive, a corresponding folder must be created as well. This folder will act as the Drive Root Folder. This separation of drive and folder entity enables features such as folder view queries.

#### Drive Metadata Transaction
```
ArFS: 0.12
Cipher?: AES256-GCM
Cipher-IV?: <12 byte initialization vector as hex>
Content-Type: <application/json | application/octet-stream>
Drive-Id: <uuid>
Drive-Privacy: <public | private>
Drive-Auth-Mode?: password
Entity-Type: drive
Unix-Time: <seconds since unix epoch>
{
    "name": "<user defined drive name>",
    "rootFolderId": "<uuid of the drive root folder>"
    ”isHidden”?: <true>
}
```

#### Creating a Drive
To properly create a new drive, two new entities need to be created, a new Drive entity and a new Folder entity representing the root folder of that drive.

The `name` of the drive and folder entity should be the same. The drive entity's `rootFolderId` should refer to the `Folder-Id` of the root folder entity. The folder entity should not include a `Parent-Folder-Id` tag.

The Drive's privacy settings must also be determined and set in order for its subfolders and files to have the right security settings.

#### Hiding Drives (NEW)
While deleting is not available on Arweave, ArFS clients can set the optional `isHidden` tag in the Drive Metadata transaction JSON to "true". The client can then hide the drive and all content within it from the user. Clients can surface hidden files via a special view in case the user would like to unhide content.

### Folder Entity
A Folder is a logical grouping of other folders and files. Folder entity Metadata transactions without a parent folder id are considered the Drive Root Folder of their corresponding Drives. All other Folder entities must have a parent folder id. Since folders do not have underlying data, there is no Folder data transaction required

#### Folder Metadata Transaction
```
ArFS: 0.12
Cipher?: AES256-GCM
Cipher-IV?: <12 byte initialization vector as Base64>
Content-Type: <application/json | application/octet-stream>
Drive-Id: <drive uuid>
Entity-Type: folder
Folder-Id: <uuid>
Parent-Folder-Id?: <parent folder uuid>
Unix-Time: <seconds since unix epoch>
{
    "name": "<user defined folder name>"
    ”isHidden”?: <true>
}
```

#### Hiding Folders (NEW)
While deleting is not available on Arweave, ArFS clients can set the optional `isHidden` tag in the Folder Metadata transaction JSON to "true". The client can then hide the folder and all content within it from the user. Clients can surface hidden folders via a special view in case the user would like to unhide content.

### File Entity
A File contains actual data, like a photo, document or movie. File entity Metadata transactions do not include the actual File data they represent. Instead, the File data must be uploaded as a separate transaction, called the File data transaction. 

#### File Metadata Transaction
The File Metadata transaction JSON references the File data transaction for retrieval. This separation allows for file Metadata to be updated without requiring the file data to be reuploaded.
```
ArFS: 0.12
Cipher?: AES256-GCM
Cipher-IV?: <12 byte initialization vector as hex>
Content-Type: <application/json | application/octet-stream>
Drive-Id: <drive uuid>
Entity-Type: file
File-Id: <uuid>
Parent-Folder-Id: <parent folder uuid>
Unix-Time: <seconds since unix epoch>
{
    "name": "<user defined file name with extension eg. happyBirthday.jpg>",
    "size": <computed file size - int>,
    "lastModifiedDate": <timestamp for OS reported time of file's last modified date represented as milliseconds since unix epoch - int>
    "dataTxId": "<transaction id of stored data>",
    "dataContentType": "<the mime type of the data associated with this file entity>"
    ”isHidden”?: <true>
}
```

#### File Data Transaction
The File Data transaction contains limited information about the file, such as the information required to decrypt it or the Content-Type (mime-type) needed to view in the browser.
```
Cipher?: AES256-GCM
Cipher-IV?: <12 byte initialization vector as hex>
Content-Type: <file mime-type | application/octet-stream>
{ File data buffer }
```

#### Hiding Files (NEW)
While deleting is not available on Arweave, ArFS clients can set the optional `isHidden` tag in the File Metadata transaction JSON to "true". The client can then hide the file from the user. Clients can surface hidden files via a special view in case the user would like to unhide content.

### NFT Entity (NEW)
Non-fungible tokens using the Arweave Atomic NFT Standard can be minted and attached in any ArFS compatible client. It must a mix of the ArFS Metadata Transaction type and the Arweave NFT Standard Atomic Contract as the Data Transaction.

#### Public NFT Metadata Transaction (NEW)
A public NFT Metadata Transaction imilar to a File Metadata Transction, but the dataTxId must point to the NFT Atomic Contract transaction which is defined below
```
ArFS: 0.12
Content-Type: <application/json | application/octet-stream>
Drive-Id: <drive uuid>
Entity-Type: nft
File-Id: <uuid>
Parent-Folder-Id: <parent folder uuid>
Unix-Time: <seconds since unix epoch>
{
    "name": "<user defined file name with extension eg. happyBirthday.jpg>",
    "size": <computed file size - int>,
    "lastModifiedDate": <timestamp for OS reported time of file's last modified date represented as milliseconds since unix epoch - int>
    "dataTxId": "<transaction id of stored data>",
    "dataContentType": "<the mime type of the data associated with this file entity>"
    ”isHidden”?: <true>
}
```

#### Public NFT Data Transaction (NEW)
Unlike Folder, and Files, NFT tokens contain an ownership field, to determine who has rights over that token. NFTs can be transferred through other clients that specialize in token exchanges. ArFS Clients should identify NFT entities over File/Folder entities, and can display this Ownership information (along with other NFT metadata) to the user. This allows them to easily keep their NFT data within their drive, but indicate who owns the underlying token and other metadata about it.

The file data must contain the NFT data, like the artwork, audio, video etc.
```
Exchange: “Verto”
Action: marketplace/Create
Content-Type: <file mime-type>
App-Name: SmartWeaveContract
App-Version: 0.3.0
Contract-Src: <Your contract source transaction>
Init-State: <The JSON of the initial contract state>
{ File data buffer }
```
The ‘Init-State’ must contain a JSON object representing additional NFT Metadata, such as the ‘owner’, NFT ‘name’, ‘ticker’ and ‘description’ of the NFT.
For example:
```
{
    "owner":"vxUdiv2fGHMiIoek5E4l3M5qSuKCZtSaOBYjMRc94JU",
    "name":"The Great Sam",
    "ticker":"SAM-I",
    "description":"One of the many gems from the Arweavers community."
}
```

### Social Vote (NEW)
To promote social behaviors for posted public content, ArFS clients can support a "Social Vote" Metadata Transaction type. These Social Votes allow public content to be ranked within ArFS clients. Social Votes are only applied to public content, and require the voter to be logged in to submit and pay for the transaction. Each Social Vote must contain the Drive ID or File ID of the item that is being voted on.

#### Social Vote Metadata Transaction (NEW)
```
ArFS: 0.12
Target-Entity-Id: <drive uuid | file uuid>
Entity-Type: social
Unix-Time: <seconds since unix epoch>
Content-Type: <application/json>
{
    "vote": "<up | down>"
    "comment"?: "optional, free text comment the submitter can leave"
}
```
In order to prevent misuse or “spamming” of Social Vote transactions, ArFS clients should filter out multiple Social Vote transactions from the same owner and same Target-Entity-Id.
Additionally, clients can check for additional transactions to validate that the Social Vote was not maliciously sent. For example, a Social Vote transaction must be accompanied by a PST Tip Fee. Social Votes that have a corresponding PST Tip Fee submitted by the same owner contained in the same block as the Social Vote itself would be accepted by the client.

### Advanced Private Sharing (NEW)
Private Drives and Files can be shared by distributing the respective drive and/or file keys as needed. ArFS clients can choose to do this, by (for example) injecting the File-Key or Drive-Key in a query parameter within a URL. However, sharing these keys in plaintext may result in unintended recipients getting access to the drive or file key.

In order to support secure sharing, ArFS clients can create a Sharing Transaction. To create this transaction, the ArFS client must first get the recipient's public key for their Arweave Wallet. The Drive or File Key can then be asymmetrically encrypted within the Sharing Transaction. Only the recipient can decrypt this data and unlock the corresponding Drive or File.

Asymmetric encryption of the transaction JSON data must be performed using RSA-512 Encryption, so only the recipient (or “Friend”) can open it. The JSON must include the key to the Drive or File, as well as the corresponding Target-Entity-Id of the Drive or File.

#### Advanced Private Sharing Metadata Transaction (NEW)
```
ArFS: 0.12
Cipher: RSA-512
Content-Type: <application/octet-stream>
Entity-Type: share
Friend: <public key of the recipient of the share that can unlock the encrypted JSON>
Unix-Time: <seconds since unix epoch>
{
    "key": "<drive key | file key>"
    “targetEntityId”: <drive uuid | file uuid>
}
```
In order to prevent misuse or “spamming” of Advanced Private Sharing transactions, ArFS clients should filter out multiple Advanced Private Sharing Metadata Transactions from the same owner and the same `targetEntityId`.

Additionally, clients can check for additional transactions to validate that the Advanced Private Sharing was not maliciously sent. For example, an Advanced Private Sharing transaction must be accompanied by a PST Tip Fee. Only Advanced Private Sharing transactions that have a corresponding PST Tip Fee submitted by the same owner contained in the same block as the Advanced Private Sharing transaction itself would be accepted.

### Friending (NEW)
Finally, an even greater level of spam protection could be built by creating a Friend Metadata Transaction. Users would only be able to receive Advanced Private Sharing transactions from addresses marked as their Friend. ArFS clients could allow users to add friends proactively (i.e. Add a Friend), or retroactively (i.e. Accept Share and Add Friend).

#### Friend  Metadata Transaction (NEW)
```
ArFS: 0.12
Content-Type: <application/octet-stream>
Entity-Type: friend
Unix-Time: <seconds since unix epoch>
{
    "friend": “<public key of friend>”
    ”isHidden”?: “<true>”
}
```
If the user wishes to remove a friend from their Friends list, and hide all Privately Shared content from them, the ArFS client can set the optional `isHidden` tag to true. ArFS clients should then hide this friend, and treat them as an untrusted user.

## Updating the File System State
To update the file system clients can simply create transactions for the entities they would like to update, making sure to specify the same entity id as the update target. For example, to move a folder to another folder, the client can create a transaction with that same folder entity's fields pointing to a different parent folder.
Clients can then create a timeline of entity write transactions which the client can replay to construct the Drive state. This timeline of transactions should be grouped by the block number of each transaction. At every step of the timeline, the client can check if the entity was written by an authorized user. This also conveniently enables the client to surface a trusted entity version history to the user. Drives, Folders and Files that have been hidden, should not be shown to the user.
The `Unix-Time` defined on each transaction should be reserved for tie-breaking same entity updates in the same block and should not be trusted as the source of truth for entity write ordering. This is unimportant for single owner drives but is crucial for multi-owner drives with updateable permissions (currently undefined in this spec) as a malicious user could fake the `Unix-Time` to modify the drive timeline for other users.
ArweaveFS utilizes a bottom-up data model up data model (files refer to parent folder, folders refer their parent folder etc) to avoid race conditions in file system updates. A top-down data model would require the parent model (ie. a folder) to store references to its children. When multiple users update the parent entity with new children, there's no way to do so in a consistent manner as a user's update to the parent model will not be seen by another user until the transaction has been mined.

## Extending ArFS Tags
Clients can extend the ArFS Schema as needed by adding additional tags into the File and Folder Metadata Transaction JSON. This gives Developers additional flexibility to support specific application needs, without breaking the overall data model or impacting privacy.

### Expanded Metadata Transaction JSON Examples

#### Adding Keywords to a Drive
For example, a File Sync App could use the following expanded Drive Metadata JSON for generalized Drive tagging. Keywords are comma separated values.
{
    "name": "<user defined drive name>",
    "rootFolderId": "<uuid of the drive root folder>"
    ”isHidden”?: <true>
    "keywords": "<comma separated value list of keywords>
}
Adding Music Metadata to a File
For example, a Music Sharing App could use the following expanded File Metadata JSON for specific music files.
```
{
    "name": "<user defined file name>",
    "size": <computed file size - int>,
    "lastModifiedDate": <timestamp for OS reported time of file's last modified date represented as milliseconds since unix epoch - int>
    "dataTxId": "<transaction id of stored data>",
    "dataContentType": "<the mime type of the data associated with this file entity>"
    ”isHidden”?: <true>
    "bandName": "<the name of the band/artist>"
    "bandAlbum": "<the album of the band/artist>"
    "albumSong": "<the title of the song>"
}
```

#### Expanded Metadata Transaction GQL Examples
Additionally, the above extended Metadata fields could be added directly as a GQL tag as well, in order to support GraphQL queries. However, it is important to not overload transaction tags for optimal performance.

#### Adding Keywords Tag to a Drive
For example, a File Sync app could add an additional Keywords tag for generalized Drive tagging. This allows for future filtering based on the tag value. Multiple keywords can be added by adding multiple Keywords tags.

## Additional Client Concerns

### Folder/File Paths
ArweaveFS does not store folder or file paths along with entities as these paths will need to be updated whenever the parent folder name changes which can require many updates for deeply nested file systems. Instead, folder/file paths are left for the client to generate from the folder/file names.

### Client Syncing
Drives that have been updated many times can have a long entity timeline which can be a performance bottleneck. To avoid this, clients can cache the drive state locally and sync updates to the file system by only querying for entities in blocks higher than the last time they checked.

### Folder View Queries
Clients that want to provide users with a quick view of a single folder can simply query for an entity timeline for a particular folder by its id. Clients with multi-owner permissions will additionally have to query for the folder's parent drive entity for permission-based filtering of the timeline.


## Future Work

### Collaboration Drives
Currently, drives can only be written by the owner.  With a multi-user permissioned "Collaboration Drive", a dynamic set of users are able to write to it.  This will take advantage of the entity timeline for filtering of malicious/invalid entities.

This is achievable relatively easily for public drives but is much more complicated for private drives due to the need to share keys asynchronously. An implementation can draw inspiration from the Signal protocol on how to achieve this.