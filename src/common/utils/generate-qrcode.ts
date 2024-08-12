import QRCode from 'qrcode';

const generateQrCode = async (text: string) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    throw new Error('Failed to generate QR code');
  }
};

export default generateQrCode;
