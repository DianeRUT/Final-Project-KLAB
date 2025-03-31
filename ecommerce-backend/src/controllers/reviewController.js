// import Review from "../models/Review.js";
// import Product from "../models/Product.js";

// // Create a Review
// export const createReview = async (req, res) => {
//   try {
//     const { product, rating, comment } = req.body;

//     // Check if the user has already reviewed this product
//     const existingReview = await Review.findOne({ product, user: req.user.userId });
//     if (existingReview) {
//       return res.status(400).json({ message: "You have already reviewed this product" });
//     }

//     const review = new Review({
//       product,
//       user: req.user.userId,
//       rating,
//       comment,
//     });

//     await review.save();

//     // Update the product's rating average
//     const productReviews = await Review.find({ product });
//     const averageRating = productReviews.reduce((acc, review) => acc + review.rating, 0) / productReviews.length;

//     await Product.findByIdAndUpdate(product, { averageRating });

//     res.status(201).json({ message: "Review created", review });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get Reviews for a Product
// export const getProductReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find({ product: req.params.productId }).populate("user", "name");
//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete Review (Admin/Owner)
// export const deleteReview = async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.reviewId);
//     if (!review) return res.status(404).json({ message: "Review not found" });

//     // Only allow product owner or admin to delete review
//     if (review.user.toString() !== req.user.userId && req.user.role !== "admin") {
//       return res.status(403).json({ message: "Unauthorized action" });
//     }

//     await review.remove();
//     res.json({ message: "Review deleted" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
