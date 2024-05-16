import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(uri);
    connection.isConnected = mongoose.connection.readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Retry logic can be added here
    throw error; // Re-throw the error to be handled by the caller
  }
}

export default dbConnect;


// import mongoose from "mongoose";

// const connection: { isConnected?: number } = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }
//   const db = await mongoose.connect(process.env.MONGODB_URI!);

//   connection.isConnected = db.connections[0].readyState;
//   console.log("Connected to MongoDB");
// }

// export default dbConnect;