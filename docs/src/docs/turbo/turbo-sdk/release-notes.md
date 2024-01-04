# Turbo SDK Release Notes

## Overview

Welcome to the documentation page for the Turbo SDK release notes. Here, you will find detailed information about each version of the Turbo SDK, including the enhancements, bug fixes, and any other changes introduced in every release. This page serves as a comprehensive resource to keep you informed about the latest developments and updates in the Turbo SDK. For those interested in exploring the source code, each version's code is readily accessible at our GitHub repository: [Turbo SDK Releases](https://github.com/ardriveapp/turbo-sdk/releases). Stay updated with the continuous improvements and advancements in the Turbo SDK by referring to this page for all release-related information.

## Releases

### V1.3.0

(2024-01-03)

Bug Fixes

- **web**: ensure we have the public key for arconnect wallets when signing data
- **web**: remove reference to `node:crypto` in websigner, use signer to signer to sign header

Features

- **signer**: allow an optional signer to be passed instead of JWK for signing data items


### V1.2.0

(2023-12-15)

Features

- **data item opts**: init tags anchor and target support PE-5035


### V1.1.1

(2023-12-14)

Bug Fixes

- **exports**: use bundled export to avoid issue with polyfilled features needed for web
- **exports**: web exports reference an invalid build path 
- **polyfills**: update esbuild script to include crypto polyfill


### V1.1.0

(2023-11-10)

Bug Fixes

- **axios**: set `maxRedirects` to `0` on our axios instances

Features

- **logger**: add configurable global logger


### V1.0.2

(2023-11-03)

Bug Fixes

- **upload**: update the default upload service URL


### V1.0.1

(2023-09-27)

Bug Fixes

- **headers**: add default headers for all HTTP requests 
- **release**: use script that updates built version.js files 
- **version**: update version.js to proper version on build and commit it back to git after a release


### V1.0.0

(2023-09-26)

Bug Fixes

- add command that removes type module from package.json 
- add command that removes type module from package.json 
- add main import and allow wildcard imports
- add module to package.json and tweak types
- add one more step to make esm useable 
- add owner to TurboUploadDataItemResponse and remove byteCount 
- add separate folder for types, use it in named exports 
- change name of public facing clients. 
- **cjs**: add separate cjs and esm outputs 
- **content-length**: require content length factory for uploads 
- **exports**: move turbo configurations to turbo.ts so it is available to clients 
- fix package.json 
- modify return type of signDataItem function, tweak implementation of ArweaveSigner header 
- move from getWincPriceForBytes to getUploadCosts 
- **package.json**: add back module to package.json 
- remove package.json from lib directory 
- remove postinstall command 
- replace retry-axios, add additional retry logic 
- **retry-axios**: pin retry-axios to 3.0.0 
- revert to single file upload/data item upload 
- swap adding package.json to esm to cjs 
- **top up**: export type PE-4465 
- type imports for web and node 
- **types**: finalize types, update default payment and upload URLs 
- update main and types path in package.json 
- update package.json output for esm 
- update web signer and cleanup examples 
- use .cjs as base for types to avoid reference require errors 
- use declare in sub-classes to overwrite parent class type 
- **wildcard**: allow wildcard exports for older projects 
- wrong path for types! 

Features

- abstract axios to TurboHTTPService class 
- abstract JWKInterface used in AuthenticatedPayment and AuthenticatedUploadService 
- add remaining unauthenticated apis for payment service, introduce some new types, add tests 
- add uploadFiles implementation for node and web 
- break services into auth vs unauth 
- initial implementation of TurboWebClient and TurboNodeClient 
- introduce AbortController 
- introduce uploadSignedDataItem interface, implement for node 
- remove TurboDataItemVerifier 
- **sdk**: all uphill from here 🚀 PE-4064 
- **top-up**: init get checkout session PE-4465 
- **winc for fiat**: extend AmountMapper pattern and add promoCode support PE-4465
