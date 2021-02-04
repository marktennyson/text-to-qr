import QRCode from 'qrcode'

const generateQR = async text => {
  try {
    const url = await QRCode.toDataURL(text);
    return url;
  } catch (err) {
    return false;
  }
}

export default async (req, res) => {
    const text = req.query.text;
    const imageUrl = await generateQR(text);
    return res.send(imageUrl);
}