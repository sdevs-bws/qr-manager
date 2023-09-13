import * as qrcode from 'qrcode';
import * as fs from 'fs';
import sharp from 'sharp';
import axios from 'axios';

interface QRCodeOptions {
  url: string;
  imageUrl?: string;
}

async function generateQRCode(options: QRCodeOptions | string, imageUrl?: string): Promise<void> {
  let url: string;
  if (typeof options === 'string') {
    url = options;
  } else {
    url = options.url;
    imageUrl = options.imageUrl;
  }

  try {
    const qrCodeDataUrl = await qrcode.toDataURL(url);

    const qrCodeBuffer = Buffer.from(qrCodeDataUrl.split(',')[1], 'base64');

    if (imageUrl) {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data);

      const image = await sharp(imageBuffer);

      const compositeImageBuffer = await image.composite([
        {
          input: qrCodeBuffer,
          top: 100,
          left: 100,
        },
      ]).toBuffer();

      fs.writeFileSync('output.png', compositeImageBuffer);
    } else {
      fs.writeFileSync('output.png', qrCodeBuffer);
    }

    console.log('QR code generated successfully.');
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
}