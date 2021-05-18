# Introduction
### ArDrive Core contains the essential back end features like file management, upload, download, wallet management, in-memory database and other business logic.  It leverages the Arweave File System protocol to permanent tag and store files for future retreival.
***
ArDrive Core is broken into six main areas
1. ArFS - all methods needed to create, upload and download ArFS entities like drives, folders and files, establish drive - state and create sharing links
2. Arweave - all methods that integrate with Arweave such as wallets, fees, getting, submitting and downloading transactions
3. DB - uses an in-memory database for creating, reading, updating records in an 
4. Crypto - all of the methods used for app and ArFS encryption/decryption
5. Gql - all methods that query GraphQL for ArDrive related information, using the ArFS schema
6. Types - all types and guards used, including those needed to define the Arweave File System (ArFS) entities



