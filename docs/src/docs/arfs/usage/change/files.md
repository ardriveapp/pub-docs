# File Write Operations

## Move File

Files can be moved from one folder to another within the same Drive.

* A new file metadata transaction is created when a user wants to move a file into a different folder.
* The new file metadata transaction copies all of the file’s old metadata values, but the file’s `Parent-Folder-Id` must be updated to the `Folder-Id` of the folder is was just moved to.
    * For private files, a new `Cipher-IV` is generated for this new metadata transaction.
* File’s must not be allowed to be moved into a folder if a file exists in that folder with the same file name.

## Rename File

Files can be renamed from one name to another.

* A new file metadata transaction is created when a user wants to rename an existing file.
* The new file metadata transaction reuses the existing file’s `File-Id` and copies all of it’s old metadata values, but the file’s `name` field in its Data JSON must be updated to the new file name and extension.
    * For private files, a new `Cipher-IV` is generated for this new metadata transaction.
* File’s must not be allowed to be renamed to the name of another file with that same name in that same folder.

## Update File Version

When a user adds a new file to a folder, and there is a file in that folder with the same name, then a new file version is created.

* A new file version uses the same `File-Id` of the file with the matching name and same `Parent-Folder-Id`.  
* The file upload process is followed and new File Metadata and Data transactions are created.  
* However a new UUID is not generated and the same `File-Id` and associated metadata is used for this new version
* The new File Metadata Transaction points to the new Data transaction.
    * Since the `File-Id` remains the same, the File Keys for private files can decrypt all versions of that file.
    * For private files, new `Cipher-IV`s are generated for this new metadata and data transaction
* ArFS clients can now iterate through the state of this file, since it will have multiple versions using the same `File-Id`.