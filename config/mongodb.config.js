const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@databasebao.t4pcr.mongodb.net/todolist?retryWrites=true&w=majority`)
        console.log("MongoDB connected!")
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}
module.exports = connectDB

