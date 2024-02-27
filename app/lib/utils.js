import mongoose from "mongoose"

export const connectToDatabase = async() => {
  const connection = {}

  try {
    if(connection.isConnected) return

    const database = await mongoose.connect(process.env.MONGODB_ATLAS_URL)
    connection.isConnected = database.connections[0].readyState

    console.log("Database connection!");

  } catch(error) {
    throw new Error(error)
  }
}