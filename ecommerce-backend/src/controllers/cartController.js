// const Cart = require("../models/Cart");

// // Add to Cart
// exports.addToCart = async (req, res) => {
//   try {
//     const { product, quantity } = req.body;
//     let cart = await Cart.findOne({ user: req.user.userId });

//     if (!cart) {
//       cart = new Cart({ user: req.user.userId, items: [{ product, quantity }] });
//     } else {
//       const itemIndex = cart.items.findIndex((item) => item.product.toString() === product);

//       if (itemIndex > -1) {
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         cart.items.push({ product, quantity });
//       }
//     }

//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get Cart
// exports.getCart = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user.userId }).populate("items.product");
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Remove from Cart
// exports.removeFromCart = async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const cart = await Cart.findOne({ user: req.user.userId });

//     cart.items = cart.items.filter((item) => item.product.toString() !== productId);
//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
