import mongoose from "mongoose";


const connectdb = async (DATABASE_URL)=>{

    try {
        
        await mongoose.connect(DATABASE_URL)
        console.log("Database connected Succesfully😍😍😍 ");
    } catch (error) {
        
        console.log(error);
    }

}
export default connectdb