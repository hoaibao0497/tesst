const express = require('express')
const cors = require('cors')
const connectDB = require('./config/mongodb.config')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const dotenv = require('dotenv')
dotenv.config()

connectDB()
const app = express()
app.use(cors())

app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)


const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})

