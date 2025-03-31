// const Order = require("../models/Order");

// // Get All Orders (Admin)
// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate("user").populate("orderItems.product");
//     res.json(orders);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete Order (Admin)
// exports.deleteOrder = async (req, res) => {
//   try {
//     await Order.findByIdAndDelete(req.params.id);
//     res.json({ message: "Order deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
