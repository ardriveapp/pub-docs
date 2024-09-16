# Turbo SDK Release Notes

## Overview

Welcome to the documentation page for the Turbo SDK release notes. Here, you will find detailed information about each version of the Turbo SDK, including the enhancements, bug fixes, and any other changes introduced in every release. This page serves as a comprehensive resource to keep you informed about the latest developments and updates in the Turbo SDK. For those interested in exploring the source code, each version's code is readily accessible at our GitHub repository: [Turbo SDK Releases](https://github.com/ardriveapp/turbo-sdk/releases). Stay updated with the continuous improvements and advancements in the Turbo SDK by referring to this page for all release-related information.

## Releases

### 1.17.0 

(2024-09-13)


Features

- **pol:** add support for matic/pol crypto fund PE-6722 ([ee523ba](https://github.com/ardriveapp/turbo-sdk/commit/ee523bacac0b0e3213e6e132af6b0195cbf64562))
- **pol:** add support for matic/pol token uploads and top ups PE-6721 ([62ff2c8](https://github.com/ardriveapp/turbo-sdk/commit/62ff2c881f51c492b37dc87bfb47354cdc978766))
- **price commands:** init CLI price command PE-6728 ([d737b8e](https://github.com/ardriveapp/turbo-sdk/commit/d737b8e7bdfc9cd3c0eab5d505f805477db16106))

### 1.16.1

(2024-09-13)


Bug Fixes

- bump kyvejs to resolve downstream errors PE-6664 ([3ccc0bf](https://github.com/ardriveapp/turbo-sdk/commit/3ccc0bf06daad6e6c182f4a13d955fc24a9097d7))

### 1.16.0

(2024-09-12)


Bug Fixes

- **cli:** assign token to config PE-6632 ([d6444b2](https://github.com/ardriveapp/turbo-sdk/commit/d6444b27fd3dd774e5ffefbda785cf5f86306f91))


Features

- **crypto fund:** add --tx-id parameter with submitFundTransaction compatibility and docs PE-6732 ([23b6035](https://github.com/ardriveapp/turbo-sdk/commit/23b6035d3e8edbd9b16864930266880056231c9b))
- **crypto fund:** init confirmation promot PE-6732 ([3714599](https://github.com/ardriveapp/turbo-sdk/commit/3714599bd3fc050e0d97299972de0e8343b6b4ea))
- **crypto fund:** show target wallet in confirmation prompt PE-6732 ([06f1c9a](https://github.com/ardriveapp/turbo-sdk/commit/06f1c9a2a153ec8d5e8103f87617617e3854157d))
- **winc for token:** init getWincForToken PE-6632 ([143cb39](https://github.com/ardriveapp/turbo-sdk/commit/143cb398aa9d13437a34877003a68fc4ecdf6059))

### 1.15.0

(2024-09-12)

Bug Fixes

- repair types returned from payment service PE-6718 ([f97dfcb](https://github.com/ardriveapp/turbo-sdk/commit/f97dfcb4bc042ad4755b7e3fe2bb39ceab8c21bf))


Features

- enable unauthenticated winc for fiat promo code PE-6716 ([b2ade37](https://github.com/ardriveapp/turbo-sdk/commit/b2ade37b67444f4b0e63041746a39e6385c27d2c))

### 1.14.1

(2024-09-11)


Bug Fixes

- **cli:** assign token to config PE-6632 ([5a0e837](https://github.com/ardriveapp/turbo-sdk/commit/5a0e837853888cb3536ea69a45fe6245b6a8d108))

### 1.14.0

(2024-09-11)

Bug Fixes

- repair dependency errors; upgrade arweave; upgrade to [@ar](https://github.com/ar).io/arbundles PE-6664 ([a2e421f](https://github.com/ardriveapp/turbo-sdk/commit/a2e421f593abe9e37fa52a93e212445ea96bd17e))

Features

- **upload file:** init cli upload file command PE-6636 ([f802fc5](https://github.com/ardriveapp/turbo-sdk/commit/f802fc5208ef574853f134e8ca3197fc1e6941c0))
- **upload folder:** init CLI command PE-6636 ([17af9f3](https://github.com/ardriveapp/turbo-sdk/commit/17af9f36ff9d826ae92664691d557eb198582ccb))
- **upload folder:** init manifest options PE-6636 ([305bd5a](https://github.com/ardriveapp/turbo-sdk/commit/305bd5a6b49ab9b326954548ab22e75807c9e080))


### 1.13.0

(2024-09-06)

Features

- **balance:** init CLI balance command PE-6635 ([18de656](https://github.com/ardriveapp/turbo-sdk/commit/18de65605d985a901b9211f94ce68fd305c0d8e6))
- **top-up:** init top-up with stripe checkout command PE-6635 ([c43e11b](https://github.com/ardriveapp/turbo-sdk/commit/c43e11bc82f63f9b99e061848787fd1458c71a21))

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


### 1.5.0

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

### 1.4.2

(2024-03-15)

Bug Fixes

- **arbundles**: pin arbundles to v0.9.9 and run tests locally


### 1.4.1

(2024-01-30)

Bug Fixes

- **checkout session**: correct query param, change type, add coverage 

### 1.4.0 

(2024-01-30)

Features

- **ui mode**: support query param for checkout session ui mode 


### 1.3.0

(2024-01-03)

Bug Fixes

- **web**: ensure we have the public key for arconnect wallets when signing data
- **web**: remove reference to `node:crypto` in websigner, use signer to signer to sign header

Features

- **signer**: allow an optional signer to be passed instead of JWK for signing data items


### 1.2.0

(2023-12-15)

Features

- **data item opts**: init tags anchor and target support PE-5035


### 1.1.1

(2023-12-14)

Bug Fixes

- **exports**: use bundled export to avoid issue with polyfilled features needed for web
- **exports**: web exports reference an invalid build path 
- **polyfills**: update esbuild script to include crypto polyfill


### 1.1.0

(2023-11-10)

Bug Fixes

- **axios**: set `maxRedirects` to `0` on our axios instances

Features

- **logger**: add configurable global logger


### 1.0.2

(2023-11-03)

Bug Fixes

- **upload**: update the default upload service URL


### 1.0.1

(2023-09-27)

Bug Fixes

- **headers**: add default headers for all HTTP requests 
- **release**: use script that updates built version.js files 
- **version**: update version.js to proper version on build and commit it back to git after a release


### 1.0.0

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
