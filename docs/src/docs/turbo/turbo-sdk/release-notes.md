# Turbo SDK Release Notes

## Overview

Welcome to the documentation page for the Turbo SDK release notes. Here, you will find detailed information about each version of the Turbo SDK, including the enhancements, bug fixes, and any other changes introduced in every release. This page serves as a comprehensive resource to keep you informed about the latest developments and updates in the Turbo SDK. For those interested in exploring the source code, each version's code is readily accessible at our GitHub repository: [Turbo SDK Releases](https://github.com/ardriveapp/turbo-sdk/releases). Stay updated with the continuous improvements and advancements in the Turbo SDK by referring to this page for all release-related information.

## Releases

### 1.12.0

(2024-08-30)


Features

- **balance:** add an unauthenticated getBalance method PE-6630 ([63bb4f8](https://github.com/ardriveapp/turbo-sdk/commit/63bb4f8b05560848a67016d08f6bbe4d3724cf74))
- **native address:** get native address from connected signer PE-6629 ([7432156](https://github.com/ardriveapp/turbo-sdk/commit/7432156311811e921eff99254c4c44dfb97ca353))

### 1.11.0 

(2024-08-29)


Bug Fixes

- **cli:** include bin/turbo in argv check PE-6449 ([cf57515](https://github.com/ardriveapp/turbo-sdk/commit/cf575154a679ea846ff049d3390ca0cea6989a7a))


Features

- **cli:** init a turbo cli tool featuring KYVE crypto fund PE-6449 ([2eff402](https://github.com/ardriveapp/turbo-sdk/commit/2eff402a7d759a91930d898343a0a97f1c2e9cb2))
- **kyve:** add exported isTokenType helper PE-6448 ([bf70d59](https://github.com/ardriveapp/turbo-sdk/commit/bf70d596e9f3f4e31b63525ae533a166206ad736))
- **kyve:** add tokenAmountToBase map PE-6448 ([b2864b3](https://github.com/ardriveapp/turbo-sdk/commit/b2864b3ccad2b0488868b1740fbbf3bb55f1e8d0))
- **kyve:** allow kyve token type for uploads and top ups PE-6447 ([861d542](https://github.com/ardriveapp/turbo-sdk/commit/861d542a7198620e94c1e5210e8c18420953749e))
- **kyve:** init KYVE crypto fund PE-6448 ([120735f](https://github.com/ardriveapp/turbo-sdk/commit/120735f8f0d342d6ebbeb16c05cabcdef2ec20f9))
- **kyve:** update exported types PE-6448 ([e06608c](https://github.com/ardriveapp/turbo-sdk/commit/e06608ccb49e40c8ec0df686838c8ded370c2d2a))

### 1.10.1

(2024-08-23)


Bug Fixes

- expose `token` on unauthenticated turbo factory PE-6569 ([7f0c44c](https://github.com/ardriveapp/turbo-sdk/commit/7f0c44cfc319d0f303d252d0aa73f0d42a635e03))


### 1.10.0

(2024-08-15)


Bug Fixes

- **build:** update build outputs for web and README ([74cce09](https://github.com/ardriveapp/turbo-sdk/commit/74cce094393672b1c96b795f6d1ab642d89b1bc9))
- **logger:** fix winston setImmediate issue in web export for logger ([481cbe6](https://github.com/ardriveapp/turbo-sdk/commit/481cbe6bbe05b542f498f2d68333854259e98497))
- **upload folder:** improve node exports PE-4643 ([a6c073b](https://github.com/ardriveapp/turbo-sdk/commit/a6c073bb8b8e8bebf818f08b2ae4b4613ae28c9f))
- **upload folder:** improve web exports PE-4643 ([4b50778](https://github.com/ardriveapp/turbo-sdk/commit/4b50778707cc74b03058eddd98cf1b8818ec39c4))


Features

- **upload folder:** add manifest content type PE-4643 ([af35d7b](https://github.com/ardriveapp/turbo-sdk/commit/af35d7bb4841822b62bc892e7dcca451b436117c))
- **upload folder:** add manifestOptions with disable, index, and fallback parameters PE-4643 ([708ea15](https://github.com/ardriveapp/turbo-sdk/commit/708ea157c17450921de2a4d64989508f52ac6a2c))
- **upload folder:** add mime types for content type PE-4643 ([44d1240](https://github.com/ardriveapp/turbo-sdk/commit/44d124006089b21f0cc7649f822e16a3c0a259e9))
- **upload folder:** add throw on failure option PE-4643 ([a258aa6](https://github.com/ardriveapp/turbo-sdk/commit/a258aa6d97573233ef44a7e68c5696d19468b55c))
- **upload folder:** defer to use user defined content type on files when provided PE-4643 ([5d5ef89](https://github.com/ardriveapp/turbo-sdk/commit/5d5ef899686a23adcfffcf196824bb00684ceb88))
- **upload folder:** init web and node upload folder with manifest implementations PE-4643 ([70d3135](https://github.com/ardriveapp/turbo-sdk/commit/70d313538cbe522995d742b923459ed39aecc84c))
- **upload folder:** slice leading `/` from relative manifest paths PE-4643 ([c6e3b7c](https://github.com/ardriveapp/turbo-sdk/commit/c6e3b7c961699a57a5b43626f10283dbe9d4b12e))
- **upload folder:** use concurrency with plimit-lit PE-4643 ([110a424](https://github.com/ardriveapp/turbo-sdk/commit/110a424db68cfca985303187b318e5a4b1c43b30))

### 1.9.0 

(2024-05-06)

Bug Fixes

- **eth payments**: setup ETH in default constructor, remove default wait()

Features

- **eth payments**: init eth tx payments 


### 1.8.0 

(2024-05-02)

Features

- **solana payments**: init solana token tools for sol payment 


### 1.7.0 

(2024-04-25)

Features

- **upload**: allow eth and sol signing for upload
- **upload**: allow eth/sol signer types


### 1.6.0 

(2024-04-24)

Features

- **top up**: allow eth/sol destination for fiat top up 
- **top up**: allow eth/sol destination for fiat top up 


### V1.5.0

(2024-04-16)

Bug Fixes

- **fund with AR**: add web esm compatible arweave export
- export Arconnect and ArweaveSigner from env specific signers

Features

- **crypto payments**: Init fund methods
- **crypto payments**: Refactor arweave-js out of signer
- **fund with AR**: Add ToTokenAmount helper utils
- **fund with AR**: Catch polling error
- **fund with AR**: Continue polling on request error
- **fund with AR**: Throw no wallet found as error
- **signers**: Exports arbundles ArconnectSigner and ArweaveSigner

### V1.4.2

(2024-03-15)

Bug Fixes

- **arbundles**: pin arbundles to v0.9.9 and run tests locally


### V1.4.1

(2024-01-30)

Bug Fixes

- **checkout session**: correct query param, change type, add coverage 

### V1.4.0 

(2024-01-30)

Features

- **ui mode**: support query param for checkout session ui mode 


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
