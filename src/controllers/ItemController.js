import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

import Item from '../models/Item';

class ItemController {
  async index(req, res) {
    const itens = await Item.find().sort('-createdAt');

    return res.json(itens);
  }

  async store(req, res) {
    const { name, quantity, unit, price, cart } = req.body;
    const { filename: image } = req.file;

    const [nameFile] = image.split('.');
    const filename = `${nameFile}.jpg`;

    // Redimensiona a imagem
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', filename));

    // Apaga a imagem original, deixando apenas a redimensionada
    fs.unlinkSync(req.file.path);

    const item = await Item.create({
      name,
      quantity,
      unit,
      price,
      cart,
      filename,
    });

    req.io.emit('item', item);

    return res.json(item);
  }
}

export default new ItemController();
