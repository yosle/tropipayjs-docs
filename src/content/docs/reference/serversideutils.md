---
title: ServerSideUtils class
description: Tropipayjs Library Reference Documentation
---

## Overview

The `ServerSideUtils` class in Tropipay SDK library offers a range of utility methods tailored for server-side operations, from verifying signatures to handling image data.

```javascript
import { ServerSideUtils } from "@yosle/tropipayjs";
```

```javascript
const { ServerSideUtils } require('@yosle/tropipayjs');
```

You can optionally also destructure the methods inside `ServerSideUtils`

```javascript
const { fileToBase64, isValidImage, getBase64FromFileUrl } = ServerSideUtils;
```

## Methods

### verifySignature

Verifies Tropipay's signature on webhooks.

- **Parameters:**

  - `credentials`: Credential object or Tropipay instance
  - `originalCurrencyAmount`: Original currency amount
  - `bankOrderCode`: Bank order code
  - `signature`: Signature to verify

### isBase64ImageSquare

Checks if the provided base64 string represents a square image.

- **Parameters:**
  - `base64String`: Base64 string of the image

### fileToBase64

Takes a local file path and returns a base64 representation of the file content.

- **Parameters:**
  - `filepath`: Path of the file to be converted to base64

### getBase64FromFileUrl

Gets the base64 representation of a remote file from the given URL.

- **Parameters:**
  - `url`: URL of the file

### isValidImage

Checks if the base64 string represents a valid image and has a valid size.

- **Parameters:**
  - `base64Image`: Base64 image to be validated
