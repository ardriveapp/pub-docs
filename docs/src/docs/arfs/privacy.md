# Privacy

The Arweave blockweave is inherently public. But with apps that use ArFS, like ArDrive, your private data never leaves your computer without using military grade (and [quantum resistant](https://blog.boot.dev/cryptography/is-aes-256-quantum-resistant/#:~:text=Symmetric%20encryption%2C%20or%20more%20specifically,key%20sizes%20are%20large%20enough)) encryption. This privacy layer is applied at the Drive level, and users determine whether a Drive is public or private when they first create it. Private drives must follow the ArFS privacy model.

Every file within a Private Drive is symmetrically encrypted using [AES-256-GCM](https://iopscience.iop.org/article/10.1088/1742-6596/1019/1/012008/pdf). Every Private drive has a master "Drive Key" which uses a combination of the user's Arweave wallet signature, a user defined drive password, and a unique drive identifier ([uuidv4](https://en.wikipedia.org/wiki/Universally_unique_identifier)). Each file has its own "File Key" derived from the "Drive Key". This allows for single files to be shared without exposing access to the other files within the Drive.

Once a file is encrypted and stored on Arweave, it is locked forever and can only be decrypted using its file key.

## Deriving Keys

Private drives have a global drive key, `D`, and multiple file keys `F`, for encryption. This enables a drive to have as many uniquely encrypted files as needed. One key is used for all versions of a single file (since new file versions use the same File-Id)

`D` is used for encrypting both Drive and Folder metadata, while `F` is used for encrypting File metadata and the actual stored data. Having these different keys, `D` and `F`, allows a user to share specific files without revealing the contents of their entire drive.

`D` is derived using HKDF-SHA256 with an unsalted RSA-PSS signature of the drive's id and a user provided password.

`F` is also derived using HKDF-SHA256 with the drive key and the file's id.

<img class="amazingdiagram" :src="$withBase('/images/encryption-diagram.png')" style="width: 75%">

Other wallets (like [ArConnect](https://www.arconnect.io/)) integrate with this Key Derivation protocol just exposing an API to collect a signature from a given Arweave Wallet in order to get the SHA-256 signature needed for the [HKDF](https://en.wikipedia.org/wiki/HKDF) to derive the Drive Key.
