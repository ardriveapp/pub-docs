# Create File

## New File Entity

* A new file metadata transaction and a separate data transaction are created when a user wants to create a new file.
* Files can only be created in existing drives, and must have a valid Drive-Id.
* Files can only be created in existing parent folders, and must have a valid Parent-Folder-Id.
* The new File Entity Data transaction must only specify the file’s mime type aka Content-Type.
* The new file metadata transaction must generate a new UUIDv4 for the File-Id.
* File metadata transactions must have Entity-Type: "file".
* The client gets the user’s local time for the Unix-Time tag, represented as Seconds Since Unix Epoch.
    * The client populates the File Entity Metadata Transaction Data JSON after creating the data transaction.
    * `name` The name of the file including extension.
    * `size` The size of the file on disk, in bytes as an integer.
    * `lastModifiedDate` The file’s last time of modification as reported by the user’s operating system, in milliseconds since Unix epoch.
    * `dataTxId` The Arweave transaction id of this File Entity’s Data Transaction.
    * `dataContentType` The mime time of this File Entity’s data must be determined by the client.
    * `isHidden` A boolean telling clients if they should display the file or not.
* If the File is private:
    * Its `Cipher` tag must be filled out with the respective encryption algorithm (currently `AES256-GCM`) for both the Metadata and Data transactions. 
    * Its `Cipher-IV` tag must be filled out with the generated Initialization Vector for both the Metadata and Data transactions.  Each one has its own unique IV.
    * It must have the content type `Content-Type: "application/octet-stream"` for both the Metadata and Data transactions.
    * The ArFS client must encrypt the File Entity’s Data and Metadata JSON using their assigned `Cipher` and `Cipher-IV`