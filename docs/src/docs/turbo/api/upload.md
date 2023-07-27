---
next: false
---

# Upload API

## Overview

The Turbo Upload Service supports payment for signed data-items to upload.ardrive.io using Turbo Credits. An API endpoint has been created to facilitate the payments. A signed data-item can be posted to upload.ardrive.io using the below schema.


## Endpoint

`https://upload.ardrive.io/v1/tx`

## Schema

### Headers

`content-type`*: "application/octet-stream"

`accept`*: string - media type, such as "application/json" 

### Body

The body of your request should contain a signed data-item. 

Data-items can be created and signed with the arbundles library, following the below example.

```
// Initiates the arbundles Arweave signer with your wallet
const signer = new ArweaveSigner(jwk);

// Sets the data you would like to use to create a data-item
const data = "Any value can Go here";

// Creates a data-item using your data and the Arweave Signer
const dataItem = createData(data, signer);

// Signs the data-item
await dataItem.sign(signer);

```

In this example, the variable `dataItem` is what should be sent in your api post request in order to finalize and pay for the upload using Turbo Credits. `dataItem.sign()` is a mutating method, so there is no need to create a separate variable to hold the results of signing the data-item.

### Response

<details><summary>Headers</summary>
```
 access-control-allow-methods: PUT,GET,HEAD,POST,DELETE,OPTIONS 
 access-control-allow-origin: https://upload.ardrive.io 
 content-length: 173 
 content-security-policy: frame-ancestors 'none'; default-src 'self'; img-src data: https:; script-src 'self' 'unsafe-inline' https:; style-src 'unsafe-inline' https:; object-src 'none'; font-src 'self' https:; 
 content-type: application/json; charset=utf-8 
 date: Thu,27 Jul 2023 22:06:33 GMT 
 strict-transport-security: max-age=3600; includeSubDomains; preload 
 vary: Origin 
 via: 1.1 d0d53eedec01ac540f737b5fafb16436.cloudfront.net (CloudFront) 
 x-amz-cf-id: eypqkKDp-ADDMHmBOp3UQzDK4gZ8iYE8fbmYAyZjfyR3Cj8gevgF6g== 
 x-amz-cf-pop: IAD12-P3 
 x-cache: Miss from cloudfront 
 x-content-type-options: nosniff 
 x-frame-options: SAMEORIGIN 
 x-xss-protection: 1; mode=block 
```
</details>



<details><summary>Body</summary>
```
{
  "id": "1wk8nyVTHTHpbmEZ-IGNsGcro4og8XXVbBhHvMFxUgQ",
  "owner": "cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q",
  "dataCaches": [
    "arweave.net"
  ],
  "fastFinalityIndexes": [
    "arweave.net"
  ]
}
```
</details>


\* required