import mongoose from 'mongoose'
import 'dotenv/config'

export const DB = async() =>{
    const uri = process.env.MONGODB_URI
    if(!uri){
       throw new Error('mongodb connection failed')
    }
    await mongoose.connect(uri)
    console.log('DB ☁️ actively in the cloud')
}





