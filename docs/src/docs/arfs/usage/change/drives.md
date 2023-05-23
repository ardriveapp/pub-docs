# Drive Write Operations

## Rename Drives

* A new root folder metadata transaction is created when a user wants to rename an existing drive.
* The new root folder metadata transaction reuses the existing drive's `Drive-Id` and `Folder-Id`, and copies all of its old metadata values, except the drive's and folder's `name` field must be updated in its data JSON to the new drive name.
    * For private drives, new ciphers are generated for this new root folder metadata transaction.
* The new root folder transaction must not have any `Parent-Folder-Id` since it is a root folder.