(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{287:function(e,t,a){"use strict";a.r(t);var i=a(14),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"entity-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entity-types"}},[e._v("#")]),e._v(" Entity Types")]),e._v(" "),t("h2",{attrs:{id:"drive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drive"}},[e._v("#")]),e._v(" Drive")]),e._v(" "),t("p",[e._v("A drive is the highest level logical grouping of folders and files. All folders and files must be part of a drive, and reference the Drive ID of that drive.")]),e._v(" "),t("p",[e._v("When creating a Drive, a corresponding folder must be created as well. This will act as the root folder of the drive. This separation of drive and folder entity enables features such as folder view queries, renaming, and linking.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ArFS: "0.11"\nCipher?: "AES256-GCM"\nCipher-IV?: "<12 byte initialization vector as Base64>"\nContent-Type: "<application/json | application/octet-stream>"\nDrive-Id: "<uuid>"\nDrive-Privacy: "<public | private>"\nDrive-Auth-Mode?: "password"\nEntity-Type: "drive"\nUnix-Time: "<seconds since unix epoch>"\n\nData JSON {\n    "name": "<user defined drive name>",\n    "rootFolderId": "<uuid of the drive root folder>"\n}\n')])])]),t("div",{staticClass:"caption"},[e._v("Drive Entity Transaction Example")]),e._v(" "),t("h2",{attrs:{id:"folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#folder"}},[e._v("#")]),e._v(" Folder")]),e._v(" "),t("p",[e._v("A folder is a logical grouping of other folders and files. Folder entity metadata transactions without a parent folder id are considered the Drive Root Folder of their corresponding Drives. All other Folder entities must have a parent folder id. Since folders do not have underlying data, there is no Folder data transaction required.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ArFS: "0.11"\nCipher?: "AES256-GCM"\nCipher-IV?: "<12 byte initialization vector as Base64>"\nContent-Type: "<application/json | application/octet-stream>"\nDrive-Id: "<drive uuid>"\nEntity-Type: "folder"\nFolder-Id: "<uuid>"\nParent-Folder-Id?: "<parent folder uuid>"\nUnix-Time: "<seconds since unix epoch>"\n\nData JSON {\n    "name": "<user defined folder name>"\n}\n')])])]),t("div",{staticClass:"caption"},[e._v("Folder Entity Transaction Example")]),e._v(" "),t("h2",{attrs:{id:"file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[e._v("#")]),e._v(" File")]),e._v(" "),t("p",[e._v("A File contains uploaded data, like a photo, document, or movie. In the Arweave File System, a single file is broken into 2 parts: its metadata and its data.")]),e._v(" "),t("p",[e._v("A File entity metadata transaction does not include the actual File data. Instead, the File data must be uploaded as a separate transaction, called the File Data Transaction. The File metadata transaction JSON contains a reference to the File Data Transaction id so that it can retrieve the actual data. This separation allows for file metadata to be updated without requiring the file itself to be reuploaded. It also ensures that private files can have their Metadata Transaction JSON encrypted as well, ensuring that no one without authorization can see either the file or its metadata.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ArFS: "0.11"\nCipher?: "AES256-GCM"\nCipher-IV?: "<12 byte initialization vector as Base64>"\nContent-Type: "<application/json | application/octet-stream>"\nDrive-Id: "<drive uuid>"\nEntity-Type: "file"\nFile-Id: "<uuid>"\nParent-Folder-Id: "<parent folder uuid>"\nUnix-Time: "<seconds since unix epoch>"\n\nData JSON {\n    "name": "<user defined file name with extension eg. happyBirthday.jpg>",\n    "size": <computed file size - int>,\n    "lastModifiedDate": <timestamp for OS reported time of file\'s last modified date represented as milliseconds since unix epoch - int>\n    "dataTxId": "<transaction id of stored data>",\n    "dataContentType": "<the mime type of the data associated with this file entity>"\n}\n')])])]),t("div",{staticClass:"caption"},[e._v("File Metadata Transaction Example")]),e._v(" "),t("p",[e._v("The File Data Transaction contains limited information about the file, such as the information required to decrypt it, or the Content-Type (mime-type) needed to view in the browser.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Cipher?: "AES256-GCM"\nCipher-IV?: "<12 byte initialization vector as Base64>""\nContent-Type: "<file mime-type | application/octet-stream>""\n { File data }\n')])])]),t("div",{staticClass:"caption"},[e._v("File Data Transaction Example")]),e._v(" "),t("h2",{attrs:{id:"snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot"}},[e._v("#")]),e._v(" Snapshot")]),e._v(" "),t("p",[e._v("ArFS applications generate the latest state of a drive by querying for all ArFS transactions made relating to a user's particular "),t("code",[e._v("Drive-Id")]),e._v(". This includes both paged queries for indexed ArFS data via GQL, as well as the ArFS JSON metadata entries for each ArFS transaction.")]),e._v(" "),t("p",[e._v("For small drives (< 1000 files), a few thousand requests for very small volumes of data can be achieved relatively quickly and reliably. For larger drives, however, this results in long sync times to pull every piece of ArFS metadata when the local database cache is empty. This can also potentially trigger rate-limiting related ArWeave Gateway delays.")]),e._v(" "),t("p",[e._v("Once a drive state has been completely, and accurately generated, in can be rolled up into a single snapshot and uploaded as an Arweave transaction. ArFS clients can use GQL to find and retrieve this snapshot in order to rapidly reconstitute the total state of the drive, or a large portion of it. They can then query individual transactions performed after the snapshot.")]),e._v(" "),t("p",[e._v("This optional method offers convenience and resource efficiency when building the drive state, at the cost of paying for uploading the snapshot data. Using this method means a client will only have to iterate through a few snapshots instead of every transaction performed on the drive.")]),e._v(" "),t("p",[e._v("Snapshot entities require the following tags. These are queried by ArFS clients to find drive snapshots, organize them together with any other transactions not included within them, and build the latest state of the drive.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('ArFS: "0.12"\nDrive-Id: "<drive uuid that this snapshot is associated with>"\nEntity-Type: "snapshot"\nSnapshot-Id: "<uuid of this snapshot entity>"\nContent-Type: "<application/json>"\nBlock-Start: "<the minimum block height from which transactions were searched for in this snapshot, eg. 0>"\nBlock-End: "<the maximum block height from which transactions were searched for in this snapshot, eg 1007568>\nData-Start: "<the first block in which transaction data was found in this snapshot, eg 854300"\nData-End: "<the last block in which transaction was found in this snapshot, eg 1001671"\nUnix-Time: "<seconds since unix epoch>"\n')])])]),t("div",{staticClass:"caption"},[e._v("Snapshot Transaction GQL tags example")]),e._v(" "),t("p",[e._v("A JSON data object must also be uploaded with every ArFS Snapshot entity. THis data contains all ArFS Drive, Folder, and File metadata changes within the associated drive, as well as any previous Snapshots. The Snapshot Data contains an array "),t("code",[e._v("txSnapshots")]),e._v(". Each item includes both the GQL and ArFS metadata details of each transaction made for the associated drive, within the snapshot's start and end period.")]),e._v(" "),t("p",[e._v("A "),t("code",[e._v("tsSnapshot")]),e._v(" contains a "),t("code",[e._v("gqlNode")]),e._v(" object which uses the same GQL tags interface returned by the Arweave Gateway. It includes all of the important "),t("code",[e._v("block")]),e._v(", "),t("code",[e._v("owner")]),e._v(", "),t("code",[e._v("tags")]),e._v(", and "),t("code",[e._v("bundledIn")]),e._v(" information needed by ArFS clients. It also contains a "),t("code",[e._v("dataJson")]),e._v(" object which stores the correlated Data JSON for that ArFS entity.")]),e._v(" "),t("p",[e._v("For private drives, the "),t("code",[e._v("dataJson")]),e._v(" object contains the JSON-string-escaped encrypted text of the associated file or folder. This encrypted text uses the file's existing "),t("code",[e._v("Cipher")]),e._v(" and "),t("code",[e._v("Cipher-IV")]),e._v(". This ensures clients can decrypt this information quickly using the existing ArFS privacy protocols.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n  "txSnapshots": [\n    {\n      "gqlNode": {\n        "id": "bWCvIc3cOzwVgquD349HUVsn5Dd1_GIri8Dglok41Vg",\n        "owner": {\n          "address": "hlWRbyJ6WUoErm3b0wqVgd1l3LTgaQeLBhB36v2HxgY"\n        },\n        "bundledIn": {\n          "id": "39n5evzP1Ip9MhGytuFm7F3TDaozwHuVUbS55My-MBk"\n        },\n        "block": {\n          "height": 1062005,\n          "timestamp": 1669053791\n        },\n        "tags": [\n          {\n            "name": "Content-Type",\n            "value": "application/json"\n          },\n          {\n            "name": "ArFS",\n            "value": "0.11"\n          },\n          {\n            "name": "Entity-Type",\n            "value": "drive"\n          },\n          {\n            "name": "Drive-Id",\n            "value": "f27abc4b-ed6f-4108-a9f5-e545fc4ff55b"\n          },\n          {\n            "name": "Drive-Privacy",\n            "value": "public"\n          },\n          {\n            "name": "App-Name",\n            "value": "ArDrive-App"\n          },\n          {\n            "name": "App-Platform",\n            "value": "Web"\n          },\n          {\n            "name": "App-Version",\n            "value": "1.39.0"\n          },\n          {\n            "name": "Unix-Time",\n            "value": "1669053323"\n          }\n        ]\n      },\n      "dataJson": "{\\"name\\":\\"november\\",\\"rootFolderId\\":\\"71dfc1cb-5368-4323-972a-e9dd0b1c63a0\\"}"\n    }\n  ]\n}\n')])])]),t("div",{staticClass:"caption"},[e._v("Snapshot Transaction JSON data example")]),e._v(" "),t("h2",{attrs:{id:"schema-diagrams"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-diagrams"}},[e._v("#")]),e._v(" Schema Diagrams")]),e._v(" "),t("p",[e._v("The following diagrams show complete examples of Drive, Folder, and File entity Schemas.")]),e._v(" "),t("h3",{attrs:{id:"public-drive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-drive"}},[e._v("#")]),e._v(" Public Drive")]),e._v(" "),t("img",{staticClass:"amazingdiagram",staticStyle:{width:"75%"},attrs:{src:e.$withBase("/images/public-drive-schema.png")}}),e._v(" "),t("div",{staticClass:"caption"},[e._v("Public Drive Schema")]),e._v(" "),t("h3",{attrs:{id:"private-drive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#private-drive"}},[e._v("#")]),e._v(" Private Drive")]),e._v(" "),t("img",{staticClass:"amazingdiagram",staticStyle:{width:"75%"},attrs:{src:e.$withBase("/images/private-drive-schema.png")}}),e._v(" "),t("div",{staticClass:"caption"},[e._v("Private Drive Schema")]),e._v(" "),t("p",[e._v("Arweave GQL Tag Byte Limit is restricted to "),t("code",[e._v("2048")]),e._v(". There is no determined limit on Data JSON custom metadata, though more data results in a higher upload cost.")])])}),[],!1,null,null,null);t.default=n.exports}}]);