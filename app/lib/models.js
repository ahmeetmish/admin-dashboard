import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minLength: 4,
    maxLength: 16
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  address: {
    type: String
  },

  userImage: {
    type: String,
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
    min: 0
  },

  stock: {
    type: Number,
    required: true,
    min: 0
  },

  description: {
    type: String,
    required: true
  },

  productImage: {
    type: String
  }
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)