import Item from '../models/Item';

class ItemController {
  async index(req, res) {
    return res.send('deu certo');
  }

  async store(req, res) {
    const { name, quantity, unit, price, cart } = req.body;
    const { filename: image } = req.file;

    const item = await Item.create({
      name,
      quantity,
      unit,
      price,
      cart,
      image,
    });

    return res.json(item);
  }
}

export default new ItemController();
