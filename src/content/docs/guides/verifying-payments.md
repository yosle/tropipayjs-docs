---
title: Verifying with notificationUrl
description: How to verify a payment has been made
---

## The way you receive funds matter

One of the most important aspects of any integration is the ability to verify that a successful payment has been made. The method for doing so and the amount of information you receive may vary depending on how your account receives funds. Tropipay provides multiple ways of receiving payments; payment cards are one option, perhaps most suitable for websites. However, there's also the option of sharing your profile (which generates a special payment card allowing clients to specify the amount) or internal transfers from another Tropipay account. There are differences between these methods in terms of fees, and you might want to choose one over the other, or even a combination of different ones.

## Using Paymentcards and notificationUrl

:::caution[Note]
The notificationUrl must be a public endpoint, accesible from Tropipay servers. You can use services like webhook.site or ngrok to test locally
:::

When creating a payment card via API, you can specify a notificationUrl. Tropipay will send a POST request with a JSON payload to this URL when the event `transaction_completed` or `transaction_failed` occurs. This payload contains useful information such as reference, bank order code, and client data (email, name, surname, etc). If you receive the `"status":"OK"`, it means your order is paid. if you receive `"status":"KO"` means that payment was initiated but failed.

:::caution[Important]
Always verify the signature of the payload to ensure it originates from Tropipay.
:::

:::tip[Keep logs]
This apply for notificationUrl and hooks the same. keep logs of every callback received so you have an audit trail, documenting transaction detail. Logs facilitate debugging by providing insights into payment failures or discrepancies. Services like Papertrail or Loggly can slurp up your logs, giving you a centralized spot to peek at 'em.
:::

Example of a success notificationUrl payload:

```json
{
  "status": "OK",
  "data": {
    "id": 389863,
    "reference": "1695389078367",
    "bankOrderCode": "690259220262",
    "provider": 4,
    "userId": "366e8170-65d3-11ed-a813-575702a10503",
    "bookingDate": "2023-09-22T13:24:38.370Z",
    "days": null,
    "amount": 200,
    "currency": "EUR",
    "originalCurrencyAmount": "200",
    "destinationAmount": "143",
    "destinationCurrency": "EUR",
    "conversionRate": 1,
    "depositaccountId": null,
    "ourFee": 300,
    "providerFee": -57,
    "state": 5,
    "serviceId": 2,
    "paymentcardId": "92ad58b0-594a-11ee-893c-db9cbd81fd9c",
    "expirationDate": "2023-09-22T13:24:38.367Z",
    "movementTypeId": 2,
    "transactionId": null,
    "isInternal": false,
    "agent": "TROPIPAY",
    "ip": "152.206.139.26",
    "reasonId": 4,
    "reasonDes": null,
    "errorReason": null,
    "notificationUrl": null,
    "riskFlag": 0,
    "riskScore": 0,
    "createdAt": "2023-09-22T13:24:38.370Z",
    "updatedAt": "2023-09-22T13:25:12.354Z",
    "paymentcard": {
      "id": "92ad58b0-594a-11ee-893c-db9cbd81fd9c",
      "reference": "2ksuahi1olmumodrr",
      "concept": "Bicycle",
      "description": "Two wheels",
      "amount": 200,
      "currency": "EUR",
      "singleUse": false,
      "reasonId": 4,
      "reasonDes": null,
      "userId": "366e8170-65d3-11ed-a813-575702a10503",
      "qrImage": null,
      "shortUrl": "https://tppay.me/lmumoe35",
      "state": 1,
      "expirationDays": 0,
      "lang": "es",
      "urlSuccess": "https://www.tropipay.com",
      "urlFailed": "https://www.google.com",
      "urlNotification": "https://webhook.site/22db2afd-3fb8-404b-b4c4-c39b1334e439",
      "expirationDate": null,
      "serviceDate": null,
      "hasClient": false,
      "paymentUrl": null,
      "favorite": true,
      "saveToken": false,
      "imageBase": null
    },
    "charges": [
      {
        "clientName": "John",
        "clientLastName": "Wick",
        "clientAddress": "Hotel Continental",
        "clientPhone": "892498324234",
        "clientEmail": "johnwick@gmail.com",
        "riskScore": 0,
        "id": 260991,
        "orderCode": "1695389078367",
        "cardPan": "0004",
        "cardExpirationDate": "2024-02-01T00:00:00.000Z",
        "cardHolderName": "John",
        "saveToken": false,
        "amount": 200,
        "currency": 978,
        "userId": "366e8170-65d3-11ed-a813-575702a10503",
        "bookingId": 389863,
        "errorReason": "",
        "state": 3,
        "serviceId": 2,
        "clientTC": "true",
        "clientCountryId": 25,
        "updatedAt": "2023-09-22T13:25:12.246Z",
        "createdAt": "2023-09-22T13:24:38.381Z",
        "cardCountry": "DE",
        "cardBrand": "VISA",
        "cardCategory": "SecureTrading Test Issuer1",
        "cardType": "",
        "clientIp": "152.206.139.26",
        "cardSubBrand": null,
        "card3DSVersion": "",
        "card3DS2IdMsg": null,
        "cardAut3DSecure2Method": null,
        "card3DS2Partition": null,
        "cardDcc": null,
        "cardBin": "454881",
        "securityCheckPostCode": "0",
        "securityCheckAddress": "0"
      }
    ],
    "cardTokenId": null,
    "signature": "e78e9e31139c35e9e987cd3d0ad1208108318fb26685c7fa6cba3e3a6626be42",
    "signaturev2": "4845e478d69d77f2556f48617e5c9c012c3929df3c259cc4e640e634661f1d34",
    "clientData": {
      "clientName": "John",
      "clientLastName": "Wick",
      "clientAddress": "Hotel Continental",
      "clientEmail": "johnwick@gmail.com"
    }
  }
}
```

Preferably, your endpoint returns a status 200 OK as soon as possible. Then, process the payload asynchronously. Any other status code or lack of response from your notificationUrl (timeout) will be interpreted as a failure to receive the callback correctly. Tropipay will attempt redelivery at intervals until the webhook returns a status 200.

:::tip[Tip]
Found something you'd like to improve? Let us know! Head over to our GitHub repository and submit your suggestions or pull requests. Your contributions make our documentation even better!
:::
