# Data Model

Because of Arweave's permanent and immutable nature, traditional file structure operations such as renaming and moving files or folders cannot be accomplished by simply updating on-chain data. ArFS works around this by defining an append-only transaction data model based on the metadata tags found in the Arweave [Transaction Headers.](https://docs.arweave.org/developers/server/http-api#transaction-format)

This model uses a bottom-up reference method. Each file and each folder contains metadata that refers to the parent drive and the parent folder. This allows a client to construct the state of a drive or folder that has the look and feel of a traditional file system.

- Drive Entities contain folders and files

- Folder Entities contain other folders or files

- File Entities are composed by both the file data and metadata

- Snapshot entities contain a state rollups of all entities' (such as drive, folder, file and snapshot) metadata within a drive

## Entity relationships

The following diagram shows the high level relationships between drive, folder, and file entities, and their associated data.

<img :src="$withBase('/images/entity-relationship-diagram.png')" class="amazingdiagram" style="width: 75%">

<div class="caption">Entity Relationship Diagram</div>

As you can see, each file and folder contains metadata which points to both the parent folder and the parent drive. The drive entity contains metadata about itself, but not the child contents. So clients must build drive states from the lowest level and work their way up.

## Metadata Format

Metadata stored in any Arweave transaction tag will be defined in the following way:

```
Example-tag: "example-data"
```

Metadata stored in the Transaction Data Payload will follow JSON formatting like below:

```
{
    "example-tag": "example-data"
}
```

fields with a `?` suffix are optional.

```
{
  "name": "My Project",
  "description": "This is a sample project.",
  "version?": "1.0.0",
  "author?": "John Doe"
}
```

Enumerated field values (those which must adhere to certain values) are defined in the format "value 1 | value 2".

All UUIDs used for Entity-Ids are based on the [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier) standard.
