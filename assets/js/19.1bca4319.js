(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{294:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-folder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-folder"}},[e._v("#")]),e._v(" Create Folder")]),e._v(" "),t("h2",{attrs:{id:"new-folder-entity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-folder-entity"}},[e._v("#")]),e._v(" New Folder Entity")]),e._v(" "),t("p",[e._v("Folders can be created to organize files.")]),e._v(" "),t("ul",[t("li",[e._v("A new Folder Entity Metadata is created when a user wants to create a new folder.")]),e._v(" "),t("li",[e._v("Folders can only be created in existing drives, and must have a valid "),t("code",[e._v("Drive-Id")]),e._v(".")]),e._v(" "),t("li",[e._v("Folders can only be created in existing parent folders, and must have a valid "),t("code",[e._v("Parent-Folder-Id")]),e._v(".")]),e._v(" "),t("li",[e._v("The new folder metadata transaction must generate a new UUIDv4 for the "),t("code",[e._v("Folder-Id")]),e._v(".")]),e._v(" "),t("li",[e._v("Folder Entity Metadata transactions must have "),t("code",[e._v('Entity-Type: "folder"')]),e._v(".")]),e._v(" "),t("li",[e._v("The client gets the user’s local time for the "),t("code",[e._v("Unix-Time")]),e._v(" tag, represented as Seconds Since Unix Epoch.")]),e._v(" "),t("li",[e._v("The user defined folder name is added to the "),t("code",[e._v("name")]),e._v(" property in the folder’s metadata transaction Data JSON.")]),e._v(" "),t("li",[e._v("Public folders must have the content type "),t("code",[e._v('Content-Type: "<application/json>"')]),e._v(".")]),e._v(" "),t("li",[e._v("If the folder is private:\n"),t("ul",[t("li",[e._v("Its "),t("code",[e._v("Cipher")]),e._v(" tag must be filled out with the respective encryption algorithm (currently "),t("code",[e._v("AES256-GCM")]),e._v(").")]),e._v(" "),t("li",[e._v("Its "),t("code",[e._v("Cipher-IV")]),e._v(" tag must be filled out with the generated Initialization Vector for the private folder.")]),e._v(" "),t("li",[e._v("It must have the content type "),t("code",[e._v('Content-Type: "application/octet-stream"')]),e._v(".")]),e._v(" "),t("li",[e._v("The ArFS client must encrypt the Folder entity’s metadata JSON using the assigned "),t("code",[e._v("Cipher")]),e._v(" and "),t("code",[e._v("Cipher-IV")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);