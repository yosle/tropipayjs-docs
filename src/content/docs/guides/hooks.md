---
title: Using Hooks
description: Use Hooks to receive events.
---

:::caution[Note]
The notificationUrl must be a public endpoint, accesible from Tropipay servers. You can use services like webhook.site or ngrok to test locally
:::

Hooks, often called webhooks are a convenient way to receive notification when some events occur in your Tropipay account. These events can be for example: when a payment is completed or funds are guarded by Tropipay in a mediation paymentcard. You can use hooks instead of notificationUrl to verify payments.

:::tip[Answer right away]
Tropipay will send a POST request with a JSON payload to this URL when the selected event occurs. This endpoints must be accesible from the Internet, and the tropipay servers specifically. Make sure your endoint returns HTTP 200/OK right away. If no response (timeout) or response is different from HTTP 200 (4xx, 5xx). Tropipay would try to resend the callback several times.
:::

:::tip[Keep logs]
This apply for notificationUrl and hooks the same. keep logs of every callback received so you have an audit trail, documenting transaction detail. Logs facilitate debugging by providing insights into payment failures or discrepancies. Services like Papertrail or Loggly can slurp up your logs, giving you a centralized spot to peek at 'em.
:::

### Some supported events

These are some of the most important events that we can get via webhooks.

| Event name                      | Description                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| `user_login`                    | Event launched once an user completes login on the TropiPay platform.                    |
| `user_kyc`                      | Event launched once an user completes kyc process.                                       |
| `beneficiary_added`             | Launched after new beneficiary is created.                                               |
| `beneficiary_updated`           | Launched after a beneficiary is modified.                                                |
| `beneficiary_deleted`           | Launched after a beneficiary is deleted.                                                 |
| `transaction_new`               | Create a new transaction                                                                 |
| `transaction_pendingin`         | Pending transaction to settle in the payment entity                                      |
| `transaction_charged`           | Transaction waiting to be sent                                                           |
| `transaction_paid`              | A transaction has been paid.                                                             |
| `transaction_cancelled`         | Events launched when a transaction is cancelled                                          |
| `transaction_guarded`           | Used for mediation paymentcards                                                          |
| `transaction_guarded_mediation` | Used in mediation paymentcards                                                           |
| `user_after_update`             | Event launched after a user is updated.                                                  |
| `transaction_completed`         | Event launched after transaction is completed. You can use this event to verify payments |

### Subscribe a Hook Event

```javascript
tpp.hooks.subscribe({
  eventType: "beneficiary_added",
  target: "web",
  value: "https://mysite/webhooks/beneficiary_added",
});
```

### Modify a Hook Event

```typescript
tpp.hooks.update("beneficiary_added", "web", "https://mysite/anotherroute/");
```

### Get subscribed event(s) info

```javascript
tpp.hooks.list();
// you can also specify what event you want to retrieve
tpp.hooks.list("beneficiary_added");
```

### Clear a Hook Event

```javascript
tpp.hooks.delete("beneficiary_added", "web");
```

:::tip[Tip]
Found something you'd like to improve? Let us know! Head over to our GitHub repository and submit your suggestions or pull requests. Your contributions make our documentation even better!
:::
