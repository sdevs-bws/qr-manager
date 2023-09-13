import * as fs from 'fs';
import axios from 'axios';
import Jimp from 'jimp';
import jsQR from "jsqr";

async function readQRCode(pathOrUrl: string): Promise<string | null> {
  try {
    let imageBuffer: Buffer;

    if (pathOrUrl.startsWith('http') || pathOrUrl.startsWith('https')) {
      const response = await axios.get(pathOrUrl, { responseType: 'arraybuffer' });
      imageBuffer = Buffer.from(response.data);
    } else {
      imageBuffer = fs.readFileSync(pathOrUrl);
    }

    const image = await Jimp.read(imageBuffer);
    const qrCode = new Uint8Array(image.bitmap.data);

    const code = jsQR(qrCode as any, image.bitmap.width, image.bitmap.height);

    if (code && code.data) {
      return code.data;
    } else {
      throw new Error('QR code not found or could not be decoded.');
    }
  } catch (error) {
    console.error('Error reading QR code:', error);
    return null;
  }
}