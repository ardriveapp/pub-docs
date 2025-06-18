---
permalink: "/docs/turbo/credits"
---

# Turbo Credits

## Overview

Turbo Credits are the payment medium used by the Turbo Upload Service. Each credit represents a 1:1 conversion from the upload power of the Arweave native token (AR), before any subsidies. Turbo Credits are divisible down to units of 1 trillionth of a credit, called a Winston Credit (winc), and can be purchased using a variety of fiat currencies or crypto tokens. 

Turbo Credits are not, themselves, a crypto token, in the sense that they cannot be traded, transferred, sold, or exchanged. 

***NOTE***: Turbo Credits are non-refundable and cannot be withdrawn or exchanged for other cryptocurrencies.

## Fees and Benefits

When purchasing Turbo Credits, using either fiat currencies or crypto tokens, there is a `23.4%` fee applied to the purchase price. This fee helps to develop and maintain the infrastructure used to provide a number of benefits over direct-to-network uploads (uploads using AR directly). There is no additional fee at the time of using Turbo Credits for upload. At the time of upload, Credits having the same, or better, value per GiB of storage as AR as priced by the Arweave network regardless of fluctuations in the fiat value of AR since the time of purchase.

- **Per-Byte Pricing**: Arweave requires payment for every chunk of data (256 KiB) uploaded. This means that many direct-to-network uploads have a small portion of the upload costs paying for empty space in the final chunk of the data. Turbo subsidizes this empty space, allowing users to pay only for the exact amount of data being uploaded.

<!-- - **Fast Finality**: Data uploaded to Arweave nodes propagates over time to other nodes in the network so that they, and the gateways that interface with them, may serve and index that data. These retrieval and indexing latencies, lasting minutes or even hours, are eliminated by Turbo via direct integrations with leading Arweave gateways, allowing you to retrieve data immediately and query for it via GQL APIs within seconds of upload time. Additionally, Turbo uploads to gateways that seed data to various nodes on the Arweave network, facilitating more rapid and durable propagation of your data into the network.
F -->
- **Failed Upload Protection**: In rare occasions, transactions committed to the Arweave network are dropped when network nodes opt to reorganize the chain. And while AR value is restored to the transaction uploaders in this process, the dropped transactions may need to be recomposed and have to be resubmitted to the network. Turbo ensures that your data obtains the necessary number of confirmations on chain that mitigate the risk of reorganization and will retain and, if necessary, later submit your data in the unlikely event of a chain reorganization or network outage.

- **Subsidies**: Data item uploads through Turbo under 100 KiB in size are currently fully subsidized, allowing users to upload small files for free. Subsidized uploads are not possible with direct-to-network transactions.

- **Easy-to-use Tooling**: Turbo offers a user-friendly [SDK and CLI](./turbo-sdk/index.md) for effortless uploading to Arweave. These tools simplify advanced workflows as well such as Arweave Path Manifest generation during folder uploads, streamlining the process of putting entire websites or dApps on the permaweb.

- **Open Source**: All of the code bases for the Turbo [Upload service](https://github.com/ardriveapp/turbo-upload-service), [Payment service](https://github.com/ardriveapp/turbo-payment-service), and [tooling](https://github.com/ardriveapp/turbo-sdk) are fully open source. The infrastructure uses an AGPL 3.0 license, while the SDK tooling uses an Apache 2.0 license.

<div style="text-align: center">
    <table class="inline-table">
        <tr>
            <th>Feature</th>
            <th colspan="2">Upload Method</th>
        </tr>
        <tr>
            <th></th>
            <th>Turbo</th>
            <th>Direct-To-Network</th>
        </tr>
        <tr>
            <th>Permanent Storage</th>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <th>SDK available for uploading</th>
            <td>✅</td>
            <td>✅ - <a href="https://github.com/ArweaveTeam/arweave-js" target="_blank" rel="noreferrer">arweave-js</a></td>
        </tr>
        <tr>
            <th>Open Source Infrastructure</th>
            <td>✅</td>
            <td>✅</td>
        </tr>
        <tr>
            <th>Per-Byte Pricing</th>
            <td>✅</td>
            <td></td>
        </tr>
        <!-- <tr>
            <th>Instant Data Availability</th>
            <td>✅</td>
            <td></td>
        </tr> -->
        <tr>
            <th>Failed Upload Protection</th>
            <td>✅</td>
            <td></td>
        </tr>
        <tr>
            <th>Subsidized Uploads</th>
            <td>✅</td>
            <td></td>
        </tr>
        <tr>
            <th>Sign Uploads From Ethereum or Solana Wallets</th>
            <td>✅</td>
            <td></td>
        </tr>
    </table>
</div>

## How to Purchase Credits
::: warning Wallet Types
When purchasing Turbo Credits using cryptocurrencies, the purchased Credits can only be deposited into the wallet type for the corresponding cryptocurrency. i.e. You cannot top up an ETH wallet by paying in AR.
:::

<div style="text-align: left">
    <table class="inline-table" style="text-align: center; border-collapse: collapse;">
    <tr style="background-color: #666; border-bottom: none;">
        <th  colspan="6" style="border-bottom: none;">How to Top Up</th>
    </tr>
    <tr style="background-color: #666; border-top: none;">
        <th style="border-top: none; border-right: none">Payment Method</th>
        <th style="border-top: none; border-left: none; border-right: none;">Turbo SDK</th>
        <th style="border-top: none; border-left: none; border-right: none;">Turbo CLI</th>
        <th style="border-top: none; border-left: none; border-right: none;">Turbo API</th>
        <th style="border-top: none; border-left: none; border-right: none;">Top Up App</th>
        <th style="border-top: none; border-left: none;">ArDrive Web App</th>
    </tr>
    <tr>
        <th>Fiat (credit/debit card)</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <th>AR</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
    </tr>
    <tr>
        <th>ETH</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
    </tr>
    <tr>
        <th>SOL</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
    </tr>
    <tr>
        <th>POL/MATIC</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>KYVE</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>ETH (BASE)</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <th>AR.IO Network (ARIO)</th>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
        <td></td>
    </tr>
    </table>
</div>

### Top Up App

The [Turbo Top Up app](https://turbo-topup.com/) is an easy "one stop shop" for purchasing Turbo Credits. From this app, user's can purchase credits using USD or AR tokens. Credits can even be purchased "into" Ethereum or Solana wallets, as opposed to Arweave wallets, which allows users to pay for and sign upload transactions directly with their preferred wallet.

<img :src="$withBase('/images/top-up-app.png')" class="amazingdiagram" style="width: 75%">

### ArDrive App

[ArDrive](https://app.ardrive.io/) is a web and mobile app for easily uploading data to Arweave, and organizing your uploaded files in a traditional file structure using [ArFS](../arfs/overview.md). ArDrive allows uploads using either AR tokens or Turbo Credits, and provides a simple "add" button under your user profile (top right) to purchase Turbo Credits using United States Dollars.

<img :src="$withBase('/images/ardrive-turbo-buy-image.png')" class="amazingdiagram" style="width: 75%">

### Turbo SDK/CLI

The [Turbo SDK](./turbo-sdk/index.md) and included [CLI](./turbo-sdk/index.md#cli) offers the most flexible option for purchasing Turbo Credits. Credits can be purchased with any of the supported fiat currencies or crypto tokens. These purchases can be done on demand or programmatically, allowing you to build novel Permaweb integrations powered by simple, reliable uploads to Arweave.

### Turbo API 

Users can also send requests for a Stripe checkout session (purchasing credits with fiat) directly to the [Turbo Payment Service API](./api/payment.md#get-quote-for-credits). This will return a url for users to finish their purchase using Stripe and a valid credit/debit card.


