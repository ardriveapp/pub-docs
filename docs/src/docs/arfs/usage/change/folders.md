# Folder Write Operations

## Move Folder

Folders can be moved from one folder to another within the same Drive.

* A new file metadata transaction is created when a user wants to move a folder into a different folder.
* The new file metadata transaction reuses the existing folder’s `Folder-Id` and copies all of it’s old metadata values, but the file’s `Parent-Folder-Id` must be updated to the `Folder-Id` of the folder is was just moved to.
    * For private folders, new ciphers are generated for this new metadata transaction.
* Folder’s must not be allowed to be moved into a folder if another folder exists in that folder with the same folder name.

## Rename Folder

Folders can be renamed from one name to another.

* A new folder metadata transaction is created when a user wants to rename an existing folder.
* The new folder metadata transaction reuses the existing folder’s `Folder-Id` and copies all of it’s old metadata values, but the folder’s `name` field in its Data JSON must be updated to the new folder name.
    * For private folders, new ciphers are generated for this new metadata transaction.
* Folders must not be allowed to be renamed to the name of another folder with that same name in that same folder.