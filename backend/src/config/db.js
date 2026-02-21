import mongoose from "mongoose"
export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB CONNECTED SUCCCESSFULLY")
    } catch (error) {
        console.log("Erro connecting to MONGODB, error")
        process.exit(1)
    }
}