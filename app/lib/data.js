import { User, Product } from "./models"
import { connectToDatabase } from "./utils"

// User(s)

export const fetchUsers = async(query, page) => {
  const regex = new RegExp(query, 'i')
  const ITEM_PER_PAGE = 7

  try {
    await connectToDatabase()

    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))

    return { count, users }

  } catch(error) {
    throw new Error('Failed to fetch Users!')
  }
}

export const fetchUser = async(id) => {
  try {
    await connectToDatabase()

    const user = await User.findById(id)

    return user

  } catch(error) {
    throw new Error('Failed to fetch User!')
  }
}

// Product(s)

export const fetchProducts = async(query, page) => {
  const regex = new RegExp(query, 'i')
  const ITEM_PER_PAGE = 7

  try {
    await connectToDatabase()

    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))

    return { count, products }

  } catch(error) {
    throw new Error('Failed to fetch Products!')
  }
}

export const fetchProduct = async(id) => {
  try {
    await connectToDatabase()

    const product = await Product.findById(id)

    return product

  } catch(error) {
    throw new Error('Failed to fetch Product!')
  }
}