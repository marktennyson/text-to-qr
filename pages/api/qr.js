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
    const img = Buffer.from(imageUrl.split(',')[1], 'base64');
    const head = {
                    'Content-Type': 'image/png',
                    'Content-Length': img.length 
                }
    res.writeHead(200, head);
    res.end(img);
}