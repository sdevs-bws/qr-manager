const { generateQRCode } = require('qr-manager');

// Usage examples:
const url = 'https://example.com';
const imageUrl = 'https://example.com/path/to/your/image.png'; // Optional and you can also use a local file path instead.

// Both usages are valid:
generateQRCode(url, imageUrl);
generateQRCode({ url, imageUrl });