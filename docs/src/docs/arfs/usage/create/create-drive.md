---
permalink: /docs/arfs/usage/create/
---

# Create Drive

To properly create a new drive, two new entities need to be created: a new Drive entity and a new Folder entity to serve as the root folder of that drive.

## New Drive Entity

* The user must specify a `name` of the drive which is stored within the Drive Entity's metadata JSON.
* ArDrive generates a new unique uuidv4 for the drive entity's `Drive-Id`.
* Ardrive also generates a new unique uuidv4 for the drive entity's `rootFolderId`, which will refer to the `Folder-Id` of the new folder entity that will be created.
    * This `rootFolderId` is stored within the Drive Entity's metadata JSON.
* Drive Entity Metadata transactions must have `Entity-Type: "drive"`.
* Ardrive will that the current local system time as seconds since Unix epoch for the Drive Entity's `Unix-Time`.
* The Drive Entity's `Drive-Privacy` must also be set to `public` or `private` in order for its subfolders and files to have the correct security settings.
* If the drive is private:
    * Its `Cipher` tag must be filled out with the correct encryption algorithm (currently `AES256-GCM`).
    * Its `Cipher-IV` tag must be filled out with the generated Initialization Vector for the private drive.
    * The ArFS client must derive the Drive Key and encrypt the Drive Entity's metadata JSON using the assigned `Cipher` and `Cipher-IV`.


## New Root Folder Entity

* The `name` of the drive and folder entities must be the same.
    * This `name` is stored within the Folder Entity's metadata JSON.
* The Folder Entity's `Folder-Id` must match the `rootFolderId` previously created for the Drive Entity.
* The Folder Entity's `Drive-Id` must match the `Drive-Id` previously created for the Drive Entity.
* The Folder Entity must not include a `Parent-Folder-Id` tag.
    * This is how it is determined to be the root folder for a drive.
* Folder Entity metadata transactions must have `Entity-Type: 'folder'`.
* The client gets the user's local time for the `Unix-Time` tag, represented as seconds since Unix Epoch.
* Public folders must have the content type `Content-Type: "application/json"`.
* If the folder is private
    * Its `Cipher` tag must be filled out with the correct encryption algorithm (currently `AES256-GCM`).
    * Its `Cipher-IV` tag must be filled out with the generated Initialization Vector for the private folder.
    * Its content type must be `Content-Type: "application/octet-stream"`.
    * The ArFS client must encrypt the Drive Entity's metadata JSON using the assigned `Cipher` and `Cipher-IV`.
