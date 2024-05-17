import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const cached: { connection?: typeof mongoose; promise?: Promise<typeof mongoose> } = {};
async function dbConnect() {

    console.log()
    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
    if (cached.connection) {
        return cached.connection;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts);
    }
    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    return cached.connection;
}
export default dbConnect;



// import mongoose from "mongoose";

// const connection: { isConnected?: number } = {};

// async function dbConnect() {
//   if (connection.isConnected) {
//     return;
//   }
  
//   const MONGODB_URI = process.env.MONGODB_URI || "";

//   const db = await mongoose.connect(MONGODB_URI);

//   connection.isConnected = db.connections[0].readyState;
//   console.log("Connected to MongoDB");
//   console.log("MONGODB_URI", MONGODB_URI);
// }

// export default dbConnect;