// const Payment = require("../models/Payment");
// const Order = require("../models/Order");

// // Process Payment (Mock)
// exports.processPayment = async (req, res) => {
//   try {
//     const { orderId, paymentMethod, transactionId } = req.body;
//     const payment = await Payment.create({ order: orderId, paymentMethod, paymentStatus: "Completed", transactionId });

//     await Order.findByIdAndUpdate(orderId, { isPaid: true, paidAt: new Date() });

//     res.status(201).json({ message: "Payment successful", payment });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
