# Entity Types

## Drive

A drive is the highest level logical grouping of folders and files. All folders and files must be part of a drive, and reference the Drive ID of that drive.

When creating a Drive, a corresponding folder must be created as well. This will act as the root folder of the drive. This separation of drive and folder entity enables features such as folder view queries, renaming, and linking.

```
ArFS: "0.11"
Cipher?: "AES256-GCM"
Cipher-IV?: "<12 byte initialization vector as Base64>"
Content-Type: "<application/json | application/octet-stream>"
Drive-Id: "<uuid>"
Drive-Privacy: "<public | private>"
Drive-Auth-Mode?: "password"
Entity-Type: "drive"
Unix-Time: "<seconds since unix epoch>"

Data JSON {
    "name": "<user defined drive name>",
    "rootFolderId": "<uuid of the drive root folder>"
}
```

<div class="caption">Drive Entity Transaction Example</div>

## Folder

A folder is a logical grouping of other folders and files. Folder entity metadata transactions without a parent folder id are considered the Drive Root Folder of their corresponding Drives. All other Folder entities must have a parent folder id. Since folders do not have underlying data, there is no Folder data transaction required.

```
ArFS: "0.11"
Cipher?: "AES256-GCM"
Cipher-IV?: "<12 byte initialization vector as Base64>"
Content-Type: "<application/json | application/octet-stream>"
Drive-Id: "<drive uuid>"
Entity-Type: "folder"
Folder-Id: "<uuid>"
Parent-Folder-Id?: "<parent folder uuid>"
Unix-Time: "<seconds since unix epoch>"

Data JSON {
    "name": "<user defined folder name>"
}
```

<div class="caption">Folder Entity Transaction Example</div>

## File

A File contains uploaded data, like a photo, document, or movie. In the Arweave File System, a single file is broken into 2 parts: its metadata and its data.

A File entity metadata transaction does not include the actual File data. Instead, the File data must be uploaded as a separate transaction, called the File Data Transaction. The File metadata transaction JSON contains a reference to the File Data Transaction id so that it can retrieve the actual data. This separation allows for file metadata to be updated without requiring the file itself to be reuploaded. It also ensures that private files can have their Metadata Transaction JSON encrypted as well, ensuring that no one without authorization can see either the file or its metadata.

```
ArFS: "0.11"
Cipher?: "AES256-GCM"
Cipher-IV?: "<12 byte initialization vector as Base64>"
Content-Type: "<application/json | application/octet-stream>"
Drive-Id: "<drive uuid>"
Entity-Type: "file"
File-Id: "<uuid>"
Parent-Folder-Id: "<parent folder uuid>"
Unix-Time: "<seconds since unix epoch>"

Data JSON {
    "name": "<user defined file name with extension eg. happyBirthday.jpg>",
    "size": <computed file size - int>,
    "lastModifiedDate": <timestamp for OS reported time of file's last modified date represented as milliseconds since unix epoch - int>
    "dataTxId": "<transaction id of stored data>",
    "dataContentType": "<the mime type of the data associated with this file entity>"
}
```

<div class='caption'>File Metadata Transaction Example</div>

The File Data Transaction contains limited information about the file, such as the information required to decrypt it, or the Content-Type (mime-type) needed to view in the browser.

```
Cipher?: "AES256-GCM"
Cipher-IV?: "<12 byte initialization vector as Base64>""
Content-Type: "<file mime-type | application/octet-stream>""
 { File data }
```

<div class='caption'>File Data Transaction Example</div>
