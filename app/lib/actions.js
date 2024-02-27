'use server'

import { Product, User } from "./models"
import { connectToDatabase } from "./utils"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import bcrypt from 'bcrypt'

// Add

export const addUser = async(FormData) => {
  const { username, email, password, address, userImage, isAdmin, isActive } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username, email, password: hashedPassword, address, userImage, isAdmin, isActive
    })

    await newUser.save()

  } catch(error) {
    throw new Error('Failed to create User!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const addProduct = async(FormData) => {
  const { title, category, price, stock, description, productImage } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    const newProduct = new Product({
      title, category, price, stock, description, productImage
    })

    await newProduct.save()

  } catch(error) {
    throw new Error('Failed to create Product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

// Delete

export const deleteUser = async(FormData) => {
  const { id } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    await User.findByIdAndDelete(id)

  } catch(error) {
    throw new Error('Failed to delete User!')
  }

  revalidatePath('/dashboard/users')
}

export const deleteProduct = async(FormData) => {
  const { id } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    await Product.findByIdAndDelete(id)

  } catch(error) {
    throw new Error('Failed to delete Product!')
  }

  revalidatePath('/dashboard/products')
}

// Update

export const updateUser = async(FormData) => {
  const { id, username, email, password, address, userImage, isAdmin, isActive } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    const updateFields = {
      username, email, password, address, userImage, isAdmin, isActive
    }

    Object.keys(updateFields).forEach(key => updateFields[key] === '' || undefined) && delete updateFields[key]

    await User.findByIdAndUpdate(id, updateFields)

  } catch(error) {
    throw new Error('Failed to update User!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const updateProduct = async(FormData) => {
  const { id, title, category, price, stock, description, productImage } = Object.fromEntries(FormData)

  try {
    connectToDatabase()

    const updateFields = {
      title, category, price, stock, description, productImage
    }

    Object.keys(updateFields).forEach(key => updateFields[key] === '' || undefined) && delete updateFields[key]

    await Product.findByIdAndUpdate(id, updateFields)

  } catch(error) {
    throw new Error('Failed to update Product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}