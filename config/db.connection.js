import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log(`db connected successfully`)
    } catch (e) {
        console.log(`db connection failed due to ${e}`)
    }
}
export default dbConnection