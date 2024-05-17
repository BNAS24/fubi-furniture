import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!);

  connection.isConnected = db.connections[0].readyState;

  console.log("Connected to MongoDB");
  console.log("MONGODB_URI", process.env.MONGODB_URI);
}

export default dbConnect;