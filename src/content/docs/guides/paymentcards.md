---
title: Using PaymentCards
description: Setting upcredentials your account
---

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
  expirationDays: 1,
  lang: "es",
  urlSuccess: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  urlFailed: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  urlNotification: "https://webhook.site/680826a5-199e-4455-babc-f47b7f26ee7e",
  serviceDate: "2021-08-20",
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
};
// Use inside an async function
const paylink = await tpp.paymentCards.create(payload);
console.log(paylink.shortUrl);
```

:::caution[Important]
Most PaymentCard's methods return a Promise. Make sure you handle that correctly using async/await or .then() style.
:::

:::tip[Intellisense rocks!]
TropipayJs is written in TypeScript. This implies that you benefit from IntelliSense for most parameters in any decent editor, such as Visual Studio Code, WebStorm, etc.
:::

:::tip[What this library does for you]
It is crucial to include the necessary parameters in most methods when making API calls. Some parameters may lack clarity in their meaning in the official documentation. I have made an effort to be as thorough as possible in documenting them. For additional details on the parameters, kindly consult the [Reference Page of the Payment Card](/tropipayjs-docs/reference/paymentcards).
:::

## Further reading

Please refer to the Official Payment cards [Documentation](https://tpp.stoplight.io/docs/tropipay-api-doc/fa7bde61f971b-create-payment-card)
