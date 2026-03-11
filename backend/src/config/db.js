// import mongoose from "mongoose"
// import { env } from "./env.js"

// export const connectDB = async () => {

//   try {

//     await mongoose.connect(env.MONGO_URI)

//     console.log("MongoDB connected")

//   } catch (error) {

//     console.error(error)
//     process.exit(1)

//   }

// }
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;