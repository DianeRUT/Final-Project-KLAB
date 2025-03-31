// import Product from "../models/Product";
// // Create Product
// exports.createProduct = async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(201).json({ message: "Product created", product });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get All Products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate("category");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get Single Product
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id).populate("category");
//     if (!product) return res.status(404).json({ message: "Product not found" });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update Product
// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: "Product updated", product });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete Product
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: "Product deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
