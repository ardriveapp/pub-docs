---
next: false
---

## Extending Schemas

Web app and clients can extend the ArFS Schema as needed by adding additional tags into the File and Folder MetaData Transaction JSON. This gives Developers additional flexibility to support specific application needs, without breaking the overall data model or impacting privacy.

For example a Music Sharing App could use the following expanded File Metadata for specific music files.

```
{
    "name": "<user defined file name>",
    "size": <computed file size - int>,
    "lastModifiedDate": <timestamp for OS reported time of file's last modified date represented as milliseconds since unix epoch - int>
    "dataTxId": "<transaction id of stored data>",
    "dataContentType": "<the mime type of the data associated with this file entity>"
    "bandName": "<the name of the band/artist>"
    "bandAlbum": "<the album of the band/artist>"
    "albumSong": "<the title of the song>"
}
```

Additionally, the above extended Metadata fields could be added directly as a transaction tag as well, in order to support GraphQL queries. 

<h2 style="border-bottom:none">Arweave Transaction Headers can only fit a maximum of 2048 bytes total, so this must be taken into account by clients writing custom GQL tags.</h2>