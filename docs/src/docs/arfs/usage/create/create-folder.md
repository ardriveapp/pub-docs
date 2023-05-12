# Create Folder

## New Folder Entity

Folders can be created to organize files.

* A new Folder Entity Metadata is created when a user wants to create a new folder.
* Folders can only be created in existing drives, and must have a valid `Drive-Id`.
* Folders can only be created in existing parent folders, and must have a valid `Parent-Folder-Id`.
* The new folder metadata transaction must generate a new UUIDv4 for the `Folder-Id`.
* Folder Entity Metadata transactions must have `Entity-Type: "folder"`.
* The client gets the user’s local time for the `Unix-Time` tag, represented as Seconds Since Unix Epoch.
* The user defined folder name is added to the `name` property in the folder’s metadata transaction Data JSON.
* Public folders must have the content type `Content-Type: "<application/json>"`.
* If the folder is private:
    * Its `Cipher` tag must be filled out with the respective encryption algorithm (currently `AES256-GCM`). 
    * Its `Cipher-IV` tag must be filled out with the generated Initialization Vector for the private folder.
    * It must have the content type `Content-Type: "application/octet-stream"`.
    * The ArFS client must encrypt the Folder entity’s metadata JSON using the assigned `Cipher` and `Cipher-IV`.