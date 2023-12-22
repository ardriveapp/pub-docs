---
prev: false
---

# What Is Turbo?

Turbo, offered by ArDrive, is a streamlined service that simplifies permaweb storage, making it more accessible by allowing users to pay for uploads with credit or debit cards. It integrates two key components: a service that bundles uploads for efficiency and ease, and a payment system designed for straightforward transactions. Turbo Credits, which users can purchase within the ArDrive web app, enable a direct conversion from AR tokens, reflecting the amount of data one can upload. These credits are meticulously calibrated, with the Winston Credit (winc) representing the smallest unit, ensuring users have precise control over their storage needs. As an open-source technology, Turbo encourages community engagement, allowing developers to contribute to its continuous enhancement.

<div style="text-align: center">
    <table class="inline-table">
        <tr>
            <th>Type</th>
            <th>Feature</th>
        </tr>
        <tr>
            <th>Access</th>
            <td style="text-align:left">
                <ul>
                    <li>Optimistic, instant data caching, using arweave.net.</li>
                    <li>Optimistic, near instant GraphQL indexing including cross-chain token address indexing, using arweave.net.</li>
                    <li>Irys-compatible transaction status endpoint for checking transaction finality.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Development and Integration</th>
            <td style="text-align:left">
                <ul>
                    <li>Rich documentation for developer integrations, SDK and Turbo APIs. <ul><li><a href="https://upload.ardrive.io/api-docs" target="_blank">Swagger UI</a> Upload Service API docs.</li><li><a href="https://payment.ardrive.io/api-docs" target="_blank">Swagger UI</a> Payment Service API docs.</li></ul></li>
                    <li>Deploy your own upload and payment service for bundling data and sending it to Arweave. <ul><li><a target="_blank" href="https://github.com/ardriveapp/turbo-upload-service">GitHub - ardriveapp/turbo-upload-service: Turbo Upload service that allows users to upload data items using fiat currencies.</a></li><li><a target="_blank" href="https://github.com/ardriveapp/turbo-payment-service">GitHub - ardriveapp/turbo-payment-service: ArDrive Turbo Payment Service that manages Turbo balances.</a></li></ul>
                    <li>Flexible typescript SDK for seamless web and NodeJS integration.</li>
                    <li><a target="_blank" href="https://github.com/ardriveapp/turbo-sdk">GitHub - ardriveapp/turbo-sdk: The first SDK on Arweave to bring you programmable fiat top ups, Turbo-powered upload reliability, and fast data and indexing finality for Typescript based Web and Node projects.</a></li>
                    <li>Development and testing environment.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Enterprise</th>
            <td style="text-align:left">Built for scale and trusted by enterprises</td>
        </tr>
        <tr>
            <th>Identity</th>
            <td style="text-align:left">
                <ul>
                    <li>Cryptographic sign in using Arweave, Ethereum, Solana or other Irys-compatible keys.</li>
                    <li>Arweave ecosystem supported web wallets and providers: <ul><li>✅ Arconnect</li><li>✅ arweave.app</li><li>✅ ArweaveWalletAdapter</li></ul></li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Maturity</th>
            <td style="text-align:left">
                <ul>
                    <li>Run by PDS, the same team that has been operating arweave.net since March 2022, with over 1.8B transactions indexed and accessible.</li>
                    <li>First bundling services launched in October 2022, with as ArDrive Turbo launching in July 2023. 
                        <ul>
                            <li><a target="_blank" href="https://viewblock.io/arweave/address/yCxjLRyXjzHJ4gMZK8HFYiW146dykI9QgP6CSsVXFwk">ar.io Meta Bundler | Arweave Explorer | ViewBlock</a></li>
                            <li><a target="_blank" href="https://viewblock.io/arweave/address/JNC6vBhjHY1EPwV3pEeNmrsgFMxH5d38_LHsZ7jful8">ArDrive Turbo | Arweave Explorer | ViewBlock</a></li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Payments</th>
            <td style="text-align:left">
                <ul>
                    <li>Instantly fund your Turbo account with your credit card.</li>
                    <li>Leverage other Turbo benefits like Gifting and Coupon Codes.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Performance</th>
            <td style="text-align:left">
                <ul>
                    <li>Irys-compatible single request or multipart uploading.</li>
                    <li>Proven, high layer 2 transactional throughput with 860/sec sustained on 12/18 and 12/19</li>
                </ul>
            </td>
        </tr>
        <tr>
            <th>Provenance</th>
            <td style="text-align:left">Irys-compatible receipts with transaction id, high resolution timestamp, upload price and cryptographic signature.</td>
        </tr>
        <tr>
            <th>Transparency</th>
            <td style="text-align:left">Open source infrastructure and software development kit with AGPL3.0 licensing.</td>
        </tr>
    </table>
</div>
