import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    name: String,
    quantity: Number,
    unit: String,
    price: {
      type: Number,
      default: 0.0,
    },
    cart: Boolean,
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Item', ItemSchema);
