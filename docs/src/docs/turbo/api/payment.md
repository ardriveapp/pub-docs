# Payment API

## Overview

ArDrive offers several API endpoints to help manage and determine costs associated with converting currencies into Turbo credits. The below endpoints offer access to useful information that can help stay in control when uploading data to Arweave using Turbo. "winc" refers to "winston credits", the smallest denomination of a Turbo credit.

**Note**: This service is still evolving and the information provided below may be out of date. You can view the most up to date information about the available endpoints [here](https://payment.ardrive.io/api-docs), or view the raw json for that documentation [here](https://payment.ardrive.io/openapi.json).

## Endpoints

The host url for all below endpoints is:

`https://payment.ardrive.io/v1`

All of these endpoints use GET requests

### Get Amount of Credits for Byte Count

Returns the current amount of winc it will cost to upload a provided byte count worth of data.

`/price/bytes/{byteCount}`

#### Parameters

`byteCount`*: integer - (path)

#### Example

```
https://payment.ardrive.io/v1/price/bytes/5242880
```

<details><summary>Response Body (JSON)</summary>

```
{
  "winc": "1676650364",
  "adjustments": [
    {
      "name": "FWD Research July 2023 Subsidy",
      "description": "A 60% discount for uploads over 500KiB",
      "operator": "multiply",
      "value": 0.6,
      "adjustmentAmount": "-2514975546"
    }
  ]
}
```
</details>

### Get winc for Payment Type and Amount

Returns the current amount of winc Turbo will quote for a given payment type and amount.

`/price/{type}/{amount}`

#### Parameters

`type`*: string - must match a supported currency, such as "usd" - (path)

`amount`*: integer - (path)

#### Example

```
https://payment.ardrive.io/v1/price/usd/1000
```
<details><summary>Response Body (JSON)</summary>

```
{
  "winc": "1365248226950"
}
```
</details>

### Get Current Balance of winc

use a signed request of a previously obtained JWT to get the signing wallet's current service balance in winc.

`/balance`

#### Parameters

`x-signature`*: string - (header)

`x-nonce`*: string - (header)

`x-public-key`*: string - (header)

### Get Quote for Credits

Gets a quote and payment session for a given payment method, destination address, currency type, and payment amount

`/top-up/{method}/{address}/{currency}/{amount}`

#### Parameters

`method`*: string - payment-intent | checkout-session - (path)

`address`*: string - public address of wallet - (path) 

`currency`*: string - must match supported currency, such as usd - (path)

`amount`*: integer - amount of the currency to convert to winc, usd has a minimum transaction amount of 1000 ($10.00) - (path)

#### Example

```
https://payment.ardrive.io/v1/top-up/checkout-session/cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q/usd/1000
```



<details>
<summary><b>Response Body (JSON)</b></summary>

```
{
  "topUpQuote": {
    "topUpQuoteId": "54f57b67-4fcf-47fb-85e6-85d4a8c96f25",
    "destinationAddressType": "arweave",
    "paymentAmount": 1000,
    "winstonCreditAmount": "1360424028269",
    "destinationAddress": "cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q",
    "currencyType": "usd",
    "quoteExpirationDate": "2023-07-27T01:56:26.436Z",
    "paymentProvider": "stripe"
  },
  "paymentSession": {
    "id": "cs_live_a1p47UpvijHGe7sI8AI1kScZdd5qKzdyaHUWRaeuFVvVvDHXeuck68Pf51",
    "object": "checkout.session",
    "after_expiration": null,
    "allow_promotion_codes": null,
    "amount_subtotal": 1000,
    "amount_total": 1000,
    "automatic_tax": {
      "enabled": false,
      "status": null
    },
    "billing_address_collection": null,
    "cancel_url": "https://app.ardrive.io",
    "client_reference_id": null,
    "consent": null,
    "consent_collection": null,
    "created": 1690422686,
    "currency": "usd",
    "currency_conversion": null,
    "custom_fields": [],
    "custom_text": {
      "shipping_address": null,
      "submit": null
    },
    "customer": null,
    "customer_creation": "if_required",
    "customer_details": null,
    "customer_email": null,
    "expires_at": 1690509086,
    "invoice": null,
    "invoice_creation": {
      "enabled": false,
      "invoice_data": {
        "account_tax_ids": null,
        "custom_fields": null,
        "description": null,
        "footer": null,
        "metadata": {},
        "rendering_options": null
      }
    },
    "livemode": true,
    "locale": null,
    "metadata": {},
    "mode": "payment",
    "payment_intent": null,
    "payment_link": null,
    "payment_method_collection": "always",
    "payment_method_options": {},
    "payment_method_types": [
      "card"
    ],
    "payment_status": "unpaid",
    "phone_number_collection": {
      "enabled": false
    },
    "recovered_from": null,
    "setup_intent": null,
    "shipping_address_collection": null,
    "shipping_cost": null,
    "shipping_details": null,
    "shipping_options": [],
    "status": "open",
    "submit_type": null,
    "subscription": null,
    "success_url": "https://app.ardrive.io",
    "total_details": {
      "amount_discount": 0,
      "amount_shipping": 0,
      "amount_tax": 0
    },
    "url": "https://checkout.stripe.com/c/pay/cs_live_a1p47UpvijHGe7sI8AI1kScZdd5qKzdyaHUWRaeuFVvVvDHXeuck68Pf51#fidkdWxOYHwnPyd1blppbHNgWjA0T1BEcXJGPWR1VUpSbkFJSFR0S0M8dlV1Y2tgS1ZVa3JdPVxfPXw0Q0tBaTNzPDFtX0xyf2JDVlxpNzJnUkAxSmp2PUZJdHBwa1B2ck53TmZkQW1BSjNoNTU3XG88RGBObycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
  }
}
```
</details>

### Get Supported Currencies

Returns a list of currency types supported by Turbo

`/currencies`

#### Parameters

None

#### Example

```
https://payment.ardrive.io/v1/currencies
```

<details><summary><b>Response Body (JSON)</b></summary>

```
{
  "supportedCurrencies": [
    "aud",
    "brl",
    "cad",
    "eur",
    "gbp",
    "hkd",
    "inr",
    "jpy",
    "sgd",
    "usd"
  ],
  "limits": {
    "aud": {
      "maximumPaymentAmount": 1500000,
      "minimumPaymentAmount": 1500,
      "suggestedPaymentAmounts": [
        2500,
        7500,
        15000
      ],
      "zeroDecimalCurrency": false
    },
    "brl": {
      "maximumPaymentAmount": 5000000,
      "minimumPaymentAmount": 5000,
      "suggestedPaymentAmounts": [
        12500,
        25000,
        50000
      ],
      "zeroDecimalCurrency": false
    },
    "cad": {
      "maximumPaymentAmount": 1300000,
      "minimumPaymentAmount": 1400,
      "suggestedPaymentAmounts": [
        2500,
        5000,
        10000
      ],
      "zeroDecimalCurrency": false
    },
    "eur": {
      "maximumPaymentAmount": 1000000,
      "minimumPaymentAmount": 1000,
      "suggestedPaymentAmounts": [
        2500,
        5000,
        10000
      ],
      "zeroDecimalCurrency": false
    },
    "gbp": {
      "maximumPaymentAmount": 770000,
      "minimumPaymentAmount": 780,
      "suggestedPaymentAmounts": [
        2000,
        4000,
        8000
      ],
      "zeroDecimalCurrency": false
    },
    "hkd": {
      "maximumPaymentAmount": 7800000,
      "minimumPaymentAmount": 7900,
      "suggestedPaymentAmounts": [
        20000,
        40000,
        80000
      ],
      "zeroDecimalCurrency": false
    },
    "inr": {
      "maximumPaymentAmount": 90000000,
      "minimumPaymentAmount": 83000,
      "suggestedPaymentAmounts": [
        200000,
        400000,
        800000
      ],
      "zeroDecimalCurrency": false
    },
    "jpy": {
      "maximumPaymentAmount": 1500000,
      "minimumPaymentAmount": 1500,
      "suggestedPaymentAmounts": [
        3500,
        6500,
        15000
      ],
      "zeroDecimalCurrency": true
    },
    "sgd": {
      "maximumPaymentAmount": 1300000,
      "minimumPaymentAmount": 1500,
      "suggestedPaymentAmounts": [
        2500,
        7500,
        15000
      ],
      "zeroDecimalCurrency": false
    },
    "usd": {
      "maximumPaymentAmount": 1000000,
      "minimumPaymentAmount": 1000,
      "suggestedPaymentAmounts": [
        2500,
        5000,
        10000
      ],
      "zeroDecimalCurrency": false
    }
  }
}
```
</details>

### Get Supported Countries

Returns a list of countries where Turbo is available

`/countries`

#### Parameters

None

#### Example

```
https://payment.ardrive.io/v1/countries
```

<details><summary><b>Response Body (JSON)</b></summary>

```
[
  "United States",
  "United Kingdom",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
]
```
</details>

### Get Conversion Rates

Returns supported fiat conversion rates for 1GB of storage based on current market prices

`/rates`

#### Parameters

None

#### Example

```
https://payment.ardrive.io/v1/rates
```

<details><summary><b>Response Body (JSON)</b></summary>

```
{
  "winc": "343168912867",
  "fiat": {
    "aud": 3.52873729722864,
    "brl": 11.34598786477272,
    "cad": 3.15729126594135,
    "eur": 2.1569195680425,
    "gbp": 1.8487882011791101,
    "hkd": 18.66938404981161,
    "inr": 196.24591287088242,
    "jpy": 334.744630809484,
    "sgd": 3.16995419882613,
    "usd": 2.39329431522465
  },
  "adjustments": [
    {
      "name": "FWD Research July 2023 Subsidy",
      "description": "A 60% discount for uploads over 500KiB",
      "operator": "multiply",
      "value": 0.6,
      "adjustmentAmount": "-514753369299"
    }
  ]
}
```
</details>



\* required