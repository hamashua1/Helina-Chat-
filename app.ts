import express from 'express'
const app = express()
const PORT = 5000
import cors from 'cors'
import 'dotenv/config'
app.use(cors)
app.use(express.json())



app.listen(PORT, ()=>{
    console.log(`application is running on port ${PORT}`)
})





