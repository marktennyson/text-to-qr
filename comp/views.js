import QRCode from 'qrcode'

export default class QRGenerator{
    constructor(text=undefined){
        this.text = text || 'null';
    }
    generate = async function(args){
        this.size = parseInt(args.size) || 128;
        this.margin = parseInt(args.margin) || 2;
        this.colour = args.colour || "#000";
        this.bg_colour = args.bg_colour || "#fff";
        this.options = {
                errorCorrectionLevel: 'L',
                type: 'image/png',
                quality: 1,
                margin: this.margin,
                width: this.size,
                color: {
                    dark:this.colour,
                    light:this.bg_colour
                }
        }
        try {
            const imageEncData = await QRCode.toDataURL(this.text, this.options);
            return Buffer.from(imageEncData.split(',')[1], 'base64');
          } catch (err) {
            return false;
          }
    }
}