---
title: Using PaymentCards
description: Setting up credentials your account
---

:::tip[Intellisense rocks!]
TropipayJs is written in TypeScript. This implies that you benefit from IntelliSense for most parameters in any decent editor, such as Visual Studio Code, WebStorm, etc.
:::

# Receiving payments with payment cards

Payment cards in Tropipay are a convenient and flexible way for businesses to accept payments online. This concept is often called payment links. Instead of integrating a complex payment system into a website or app, payment cards allow merchants to generate unique URLs that customers can click to make payments.
Payment Links can be customized to include details such as product descriptions, reference, and amounts. This allows businesses to create a tailored payment experience for their customers.

:::tip[Note]
Once generated, Payment Links can be shared through various channels like email, messaging apps, or social media. And most likely, browser redirection. This flexibility enables businesses to reach customers wherever they are.
:::

## Generating a payment card

```javascript
/*
 * Example Payload
 */
const payload = {
  reference: "my-paylink-1",
  concept: "Bicycle",
  favorite: "true",
  amount: 3000,
  currency: "EUR",
  description: "Two wheels",
  singleUse: "true",
  reasonId: 4,
  // expirationDays means that user can get refund on his payment
  // funds wont be available in the merchant account until expirationDays is over
  // pass 0 for no expirationDays, means no refund is possible for this paymentcards
  expirationDays: 1,
  lang: "es",
  urlSuccess: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  urlFailed: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  urlNotification: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  serviceDate: "2021-08-20",
  // client data is optional, you can pass client: null
  // but if you pass client data, must pass at least email
  client: {
    name: "John",
    lastName: "McClane",
    address: "Ave. Guadí 232, Barcelona, Barcelona",
    phone: "+34645553333",
    email: "client@email.com",
    countryId: 1,
    termsAndConditions: "true",
  },
  directPayment: "true",
  // (optional) paymentcard image
  imageBase: "data:image/png;base64,EeVVOFdffd...",
};
// Use inside an async function
const paylink = await tpp.paymentCards.create(payload);
console.log(paylink.shortUrl);
```

:::tip[Check the reference]
Check the [paymentcard class reference page](/tropipayjs-docs/reference/paymentcards/) for more detailed info about the available params
:::

:::caution[Important]
Most PaymentCard's methods return a Promise. Make sure you handle that correctly using async/await or .then() style.
:::

:::caution[A Note about Images]
You can pass a string base64 encoded in the `imageBase`. At the moment (31/1/2023), images with aspect ratio different of 1:1 can be problematic and could not center correctly in paymentcards. There's methods in the ServerSideUtils class like `fileToBase64`, `isBase64ImageSquare`, `getBase64FromFileUrl` and `isValidImage` that can help you.
:::

:::caution[Image size]
TropipaJS will throw an exception and wont create the paymentcard if a image size is more than 1mb. It will also print a warning if the image aspect ratio isn't 1:1. It's a good idea use images optimized as possible.
:::

## Further reading

Please refer to the Official Payment cards [Documentation](https://tpp.stoplight.io/docs/tropipay-api-doc/fa7bde61f971b-create-payment-card)
