import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  const uri = process.env.MONGODB_URI;

  // Runtime check to ensure MONGODB_URI is defined
  if (!uri) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  if (connection.isConnected) {
    return;
  }

  // Type assertion to ensure TypeScript treats uri as a string
  const db = await mongoose.connect(uri as string);

  connection.isConnected = db.connections[0].readyState;
  console.log("Connected to MongoDB");
}

export default dbConnect;
