import QRGenerator  from './../../comp/views';

export default async (req, res) => {
    const text = req.query.text;
    const size = req.query.size;
    const colour = req.query.colour;
    const bg_colour = req.query.bg_colour;
    let type = req.query.type;
    const margin = req.query.margin;
    const args = {
        size : size,
        colour : colour,
        bg_colour : bg_colour,
        type : type,
        margin : margin,
    }
    const qrGenerator = new QRGenerator(text);
    let img = await qrGenerator.generate(args);
    if (type === undefined) type="png" ;
    const head = {
                    'Content-Type': `image/${type}`,
                    'Content-Length': img.length 
                }
    res.writeHead(200, head);
    res.end(img);
}