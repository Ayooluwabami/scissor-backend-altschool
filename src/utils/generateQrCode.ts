import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const QR_API_KEY = process.env.QR_API_KEY;

async function generateQrCode(qrCodeText: string) {
  try {
    const response = await axios.get('https://api.qr-code-generator.com/v1/create', {
      headers: {
        'Authorization': `Bearer ${QR_API_KEY}` 
      },
      params: {
        qr_code_text: qrCodeText,
        image_format: 'PNG'
      }
    });
    return response.data;
  } catch (error) {
    console.error('QR Code Generation Error:', error);
    throw error;
  }
}

export default generateQrCode;