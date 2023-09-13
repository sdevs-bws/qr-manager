[![NPM](https://nodei.co/npm/qr-manager.png)](\[https:/nodei.co/npm/qr-manager) 

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7dd9288acdc94dacaa11ad80f36a9bd3)](https://www.codacy.com/gh/qr-manager/dashboard?utm\_source=github.com\&utm\_medium=referral\&utm\_content=qr-manager\&utm\_campaign=Badge\_Grade) [![Downloads](https://img.shields.io/npm/dt/qr-manager.svg?color=3884FF)](https://www.npmjs.com/package/qr-manager) [![Version](https://img.shields.io/npm/v/qr-manager.svg?color=3884FF\&label=version)](https://www.npmjs.com/package/qr-manager) [![install size](https://packagephobia.com/badge?p=qr-manager)](https://packagephobia.com/result?p=qr-manager) ![node](https://img.shields.io/node/v/qr-manager)

---

# Basic Information.

a powerful package to create qr-codes with images and without images with realy any url, or just use it to validate and scan qr-codes.


## Choose Readme type.

<details>
  <summary style="font-size: 20px; font-weight: bold; cursor: pointer; background: opacity: 0.5; color: #fff; padding: 10px; border: 1px solid #fff; border-radius: 5px; margin-top: 10px;">
  📗 - JavaScript
  </summary>
  
  ## Get Started.
  
  ### Installation.

#### NPM
```bash
npm i qr-manager
```

#### Yarn
```bash
yarn add qr-manager
```

#### PNPM
```bash
pnpm i qr-manager
```


### Usage.

#### Importing.
```js
const { readQRCode, generateQRCode } = require('qr-manager');
```

### Reading QR-Codes.
```js
const { readQRCode } = require("qr-manager")

const inputPathOrUrl = 'https://example.com/your-qr-code.png'; // Replace with the URL or file path of your QR code image

readQRCode(inputPathOrUrl)
  .then((result) => {
    if (result) {
      console.log('QR code value:', result);
    } else {
      console.log('QR code could not be read.');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
});
```

### Generating QR-Codes.
```js
const { generateQRCode } = require('qr-manager');

// Usage examples:
const url = 'https://example.com';
const imageUrl = 'https://example.com/path/to/your/image.png'; // Optional and you can also use a local file path instead.

// Both usages are valid:
generateQRCode(url, imageUrl);

// or
generateQRCode({ url, imageUrl });
```

#### Examples.
> [!NOTE]
> You can view all the examples [here](https:/github.com/sdevs-bws/qr-manager/tree/main/examples).

</details>

<div style="margin-top: 200px;" />

### License.

This package is licensed under the MIT License. See the [LICENSE](https://github.com/sdevs-bws/qr-manager/blob/main/LICENSE) file for more information.

### Support.

If you need support, please join our [Discord Server](https://discord.gg/kUakk4DbhF) and ask your question in the [#support](https://discord.com/channels/1074756286496919612/1074961473882816542) channel.

### Issues.

If you have any issues, please open an issue on our [GitHub Repository](https://github.com/sdevs-bws/qr-manager/issues).

### Developers.
<table>
   <tr>
      <td align="center"><a href="https://github.com/binary-blazer">
        <img src="https://github.com/binary-blazer.png?size=100" width="100px;" alt=""/>
        <br />
        <sub><b>BinaryBlazer</b></sub></a><br />
     </td>
   </tr>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<div align="center" style="font-size: 20px; font-weight: bold;">
  <sub>Developed with ❤️ by <a href="https://sdevs.org">SDEVS</a></sub>
</div>