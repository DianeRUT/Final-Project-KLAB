// import Order from "../models/Order";

// // Create Order
// exports.createOrder = async (req, res) => {
//   try {
//     const order = await Order.create({ ...req.body, user: req.user.userId });
//     res.status(201).json({ message: "Order placed", order });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get User Orders
// exports.getUserOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({ user: req.user.userId }).populate("orderItems.product");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
