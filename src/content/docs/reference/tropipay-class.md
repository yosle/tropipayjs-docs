---
title: Tropipay API class
description: Tropipayjs Library Reference Documentation
---

## Class: Tropipay

### Constructor

#### `constructor(config: TropipayConfig)`

Creates an instance of the Tropipay class with the provided configuration.

- `config`: Configuration object containing `clientId`, `clientSecret`, and optional `serverMode` (defaults to "Development").

### Properties

- `clientId: string`: Tropipay client ID.
- `clientSecret: string`: Tropipay client secret.
- `request: Axios`: Axios instance for making API requests.
- `accessToken: string | undefined`: Access token for authorization.
- `refreshToken: string | undefined`: Refresh token for token renewal.
- `serverMode: ServerMode`: Server mode, either "Development" or "Production".
- `hooks: TropipayHooks`: Instance of `TropipayHooks` for handling hooks.
- `paymentCards: PaymentCard`: Instance of `PaymentCard` for managing payment cards.
- `depositAccounts: DepositAccounts`: Instance of `DepositAccounts` for handling deposit accounts.

### Methods

#### `login(): Promise<LoginResponse>`

Performs authentication to obtain access and refresh tokens.

#### `getDepositAccounts(): Promise<AccountDeposits[] | Error>`

Retrieves a list of all deposit accounts associated with the Tropipay account.

- Returns a promise with an array of `AccountDeposits` or an error.

#### `countries(): Promise<Country[]>`

Retrieves the list of all supported countries by Tropipay.

- Returns a promise with an array of `Country` objects.

#### `getBalance(): Promise<AccountBalance>`

Retrieves the user's balance information.

- Returns a promise with an object containing `balance`, `pendingIn`, and `pendingOut` properties.

#### `destinations(): Promise<Country[]>`

Retrieves the list of all destination countries supported by Tropipay.

- Returns a promise with an array of `Country` objects.

#### `favorites(): Promise<any[]>`

Retrieves a list of all favorite payment links.

- Returns a promise with an array of payment link details.

#### `movements(offset?: number, limit?: number): Promise<any>`

Retrieves a list of all account movements, with optional pagination parameters.

- `offset`: Offset for pagination (default: 0).
- `limit`: Limit for pagination (default: 10).
- Returns a promise with an array of account movements.

#### `profile(): Promise<any>`

Retrieves profile data for the current Tropipay account.

- Returns a promise with account profile data.

#### `rates(originCurrency: string, targetCurrency?: string): Promise<number | Error>`

Retrieves the current Tropipay conversion rate.

- `originCurrency`: Currency code for the origin currency.
- `targetCurrency`: Target currency code (default: "EUR").
- Returns a promise with the conversion rate or an error.

#### `createMediationPaymentCard(config: mediationPaymentCardConfig): Promise<PaymentLink>`

Creates an escrow payment link for business accounts.

- `config`: Payload with payment details.
- Returns a promise with the created `PaymentLink`.

### Class: ClientSideUtils

#### `constructor(tropipayInstance: Tropipay)`

Creates an instance of `ClientSideUtils` for client-side utilities. (Not implemented yet)

## Further reading

- [Read about paymentcards](https://tpp.stoplight.io/docs/tropipay-api-doc/fa7bde61f971b-create-payment-card) in Tropipay's documentation
