(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{318:function(e,t,a){"use strict";a.r(t);var n=a(10),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"upload-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-api"}},[e._v("#")]),e._v(" Upload API")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("The Turbo Upload Service supports payment for signed data-items to upload.ardrive.io using Turbo Credits. An API endpoint has been created to facilitate the payments. A signed data-item can be posted to upload.ardrive.io using the below schema.")]),e._v(" "),t("p",[t("strong",[e._v("Note")]),e._v(": This service is still evolving and the information provided below may be out of date. You can view the most up to date information about the available endpoints "),t("a",{attrs:{href:"https://upload.ardrive.io/api-docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(", or view the raw json for that documentation "),t("a",{attrs:{href:"https://upload.ardrive.io/openapi.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"endpoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoint"}},[e._v("#")]),e._v(" Endpoint")]),e._v(" "),t("p",[t("code",[e._v("https://upload.ardrive.io/v1/tx")])]),e._v(" "),t("h2",{attrs:{id:"schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),t("h3",{attrs:{id:"headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),t("p",[t("code",[e._v("content-type")]),e._v('*: "application/octet-stream"')]),e._v(" "),t("p",[t("code",[e._v("accept")]),e._v('*: string - media type, such as "application/json"')]),e._v(" "),t("h3",{attrs:{id:"body"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[e._v("#")]),e._v(" Body")]),e._v(" "),t("p",[e._v("The body of your request should contain a signed data-item.")]),e._v(" "),t("p",[e._v("Data-items can be created and signed with the arbundles library, following the below example.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// Initiates the arbundles Arweave signer with your wallet\nconst signer = new ArweaveSigner(jwk);\n\n// Sets the data you would like to use to create a data-item\nconst data = "Any value can Go here";\n\n// Creates a data-item using your data and the Arweave Signer\nconst dataItem = createData(data, signer);\n\n// Signs the data-item\nawait dataItem.sign(signer);\n\n')])])]),t("p",[e._v("In this example, the variable "),t("code",[e._v("dataItem")]),e._v(" is what should be sent in your api post request in order to finalize and pay for the upload using Turbo Credits. "),t("code",[e._v("dataItem.sign()")]),e._v(" is a mutating method, so there is no need to create a separate variable to hold the results of signing the data-item.")]),e._v(" "),t("h3",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),t("details",[t("summary",[e._v("Headers")]),e._v("\n```\n access-control-allow-methods: PUT,GET,HEAD,POST,DELETE,OPTIONS \n access-control-allow-origin: https://upload.ardrive.io \n content-length: 173 \n content-security-policy: frame-ancestors 'none'; default-src 'self'; img-src data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'unsafe-inline' https:; object-src 'none'; font-src 'self' https:; \n content-type: application/json; charset=utf-8 \n date: Thu,27 Jul 2023 22:06:33 GMT \n strict-transport-security: max-age=3600; includeSubDomains; preload \n vary: Origin \n via: 1.1 d0d53eedec01ac540f737b5fafb16436.cloudfront.net (CloudFront) \n x-amz-cf-id: eypqkKDp-ADDMHmBOp3UQzDK4gZ8iYE8fbmYAyZjfyR3Cj8gevgF6g== \n x-amz-cf-pop: IAD12-P3 \n x-cache: Miss from cloudfront \n x-content-type-options: nosniff \n x-frame-options: SAMEORIGIN \n x-xss-protection: 1; mode=block \n```\n")]),e._v(" "),t("details",[t("summary",[e._v("Body")]),e._v('\n```\n{\n  "id": "1wk8nyVTHTHpbmEZ-IGNsGcro4og8XXVbBhHvMFxUgQ",\n  "owner": "cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q",\n  "dataCaches": [\n    "arweave.net"\n  ],\n  "fastFinalityIndexes": [\n    "arweave.net"\n  ]\n}\n```\n')]),e._v(" "),t("p",[e._v("* required")])])}),[],!1,null,null,null);t.default=s.exports}}]);