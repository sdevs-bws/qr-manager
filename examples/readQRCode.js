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