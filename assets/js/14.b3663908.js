(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(e,a,t){"use strict";t.r(a);var i=t(10),n=Object(i.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file-write-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-write-operations"}},[e._v("#")]),e._v(" File Write Operations")]),e._v(" "),a("h2",{attrs:{id:"move-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#move-file"}},[e._v("#")]),e._v(" Move File")]),e._v(" "),a("p",[e._v("Files can be moved from one folder to another within the same Drive.")]),e._v(" "),a("ul",[a("li",[e._v("A new file metadata transaction is created when a user wants to move a file into a different folder.")]),e._v(" "),a("li",[e._v("The new file metadata transaction copies all of the file’s old metadata values, but the file’s "),a("code",[e._v("Parent-Folder-Id")]),e._v(" must be updated to the "),a("code",[e._v("Folder-Id")]),e._v(" of the folder is was just moved to.\n"),a("ul",[a("li",[e._v("For private files, a new "),a("code",[e._v("Cipher-IV")]),e._v(" is generated for this new metadata transaction.")])])]),e._v(" "),a("li",[e._v("File’s must not be allowed to be moved into a folder if a file exists in that folder with the same file name.")])]),e._v(" "),a("h2",{attrs:{id:"rename-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rename-file"}},[e._v("#")]),e._v(" Rename File")]),e._v(" "),a("p",[e._v("Files can be renamed from one name to another.")]),e._v(" "),a("ul",[a("li",[e._v("A new file metadata transaction is created when a user wants to rename an existing file.")]),e._v(" "),a("li",[e._v("The new file metadata transaction reuses the existing file’s "),a("code",[e._v("File-Id")]),e._v(" and copies all of it’s old metadata values, but the file’s "),a("code",[e._v("name")]),e._v(" field in its Data JSON must be updated to the new file name and extension.\n"),a("ul",[a("li",[e._v("For private files, a new "),a("code",[e._v("Cipher-IV")]),e._v(" is generated for this new metadata transaction.")])])]),e._v(" "),a("li",[e._v("File’s must not be allowed to be renamed to the name of another file with that same name in that same folder.")])]),e._v(" "),a("h2",{attrs:{id:"update-file-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-file-version"}},[e._v("#")]),e._v(" Update File Version")]),e._v(" "),a("p",[e._v("When a user adds a new file to a folder, and there is a file in that folder with the same name, then a new file version is created.")]),e._v(" "),a("ul",[a("li",[e._v("A new file version uses the same "),a("code",[e._v("File-Id")]),e._v(" of the file with the matching name and same "),a("code",[e._v("Parent-Folder-Id")]),e._v(".")]),e._v(" "),a("li",[e._v("The file upload process is followed and new File Metadata and Data transactions are created.")]),e._v(" "),a("li",[e._v("However a new UUID is not generated and the same "),a("code",[e._v("File-Id")]),e._v(" and associated metadata is used for this new version")]),e._v(" "),a("li",[e._v("The new File Metadata Transaction points to the new Data transaction.\n"),a("ul",[a("li",[e._v("Since the "),a("code",[e._v("File-Id")]),e._v(" remains the same, the File Keys for private files can decrypt all versions of that file.")]),e._v(" "),a("li",[e._v("For private files, new "),a("code",[e._v("Cipher-IV")]),e._v("s are generated for this new metadata and data transaction")])])]),e._v(" "),a("li",[e._v("ArFS clients can now iterate through the state of this file, since it will have multiple versions using the same "),a("code",[e._v("File-Id")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"hide-or-unhide-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hide-or-unhide-file"}},[e._v("#")]),e._v(" Hide or Unhide File")]),e._v(" "),a("p",[e._v("Changing the value of "),a("code",[e._v("isHidden")]),e._v(" in a file's metadata will change whether or not a client should display that file.")])])}),[],!1,null,null,null);a.default=n.exports}}]);