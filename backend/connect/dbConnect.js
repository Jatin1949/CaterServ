import mongoose from "mongoose";

const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb+srv://BACKENDD:1234@cluster0.gafvzdn.mongodb.net/BACKENDD")
        console.log("Database is Connected")
    } catch(error){
        console.log(error)
    }
}

export default dbConnect;