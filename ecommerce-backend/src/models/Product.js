import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const productSchema = new mongoose.Schema({
  // Unique Identifier
  productId: { type: String, default: uuidv4, unique: true },

  // Basic Product Information
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  
  // Categorization
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },

  // Pricing and Inventory
  price: {
    base: { type: Number, required: true, min: 0 },
    discount: { type: Number, default: 0 }, // Percentage discount
    finalPrice: { type: Number }
  },
  
  inventory: {
    total: { type: Number, default: 0 },
    reserved: { type: Number, default: 0 },
    status: { type: String, enum: ['In Stock', 'Low Stock', 'Out of Stock'], default: 'Out of Stock' }
  },

  // Variant Management
  variants: [{
    size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'] },
    color: String,
    sku: String,
    additionalPrice: { type: Number, default: 0 }
  }],

  // Styling and Design
  styles: {
    fit: { type: String, enum: ['Slim', 'Regular', 'Oversized', 'Relaxed'] },
    material: [String],
    sustainabilityRating: { type: Number, min: 0, max: 10, default: 5 }
  },

  // Media and Presentation
  images: {
    primary: { type: String },
    gallery: [{ type: String }]
  },

  // Marketing and Tracking
  tags: [String],
  brandCollaboration: String,
  
  // ✅ Limited-Time Drops
  isLimitedEdition: { type: Boolean, default: false },
  releaseDate: { type: Date, default: null }, // For scheduled drops
  
  // ✅ Wishlist Feature
  wishlistedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Users who added it to their wishlist

  // ✅ Pre-orders
  isPreOrder: { type: Boolean, default: false },
  preOrderStock: { type: Number, default: 0 }, // Available pre-order units
  preOrderDate: { type: Date, default: null },

  // Ratings and Reviews
  ratings: { type: Number, default: 0 },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: String,
      rating: Number,
      createdAt: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true });

// ✅ Auto-calculate `finalPrice` and `inventory status`
productSchema.pre('save', function (next) {
  this.price.finalPrice = this.price.discount > 0
    ? this.price.base - (this.price.base * this.price.discount) / 100
    : this.price.base;

  if (this.inventory.total === 0) {
    this.inventory.status = 'Out of Stock';
  } else if (this.inventory.total < 5) {
    this.inventory.status = 'Low Stock';
  } else {
    this.inventory.status = 'In Stock';
  }

  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;
