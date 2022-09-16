const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const bookRoute = require("./routes/book")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")
const uploadRoute = require("./routes/upload")

dotenv.config()

const app = express()

const PORT = 3001

mongoose.connect(process.env.MONGO_URL, 
    { useNewUrlParser: true ,useUnifiedTopology: true}
    ).then(
    ()=> console.log("Database Conected Successfully!")).catch((err)=>{
        console.log(err);
})

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/book", bookRoute)
app.use("/api/order", orderRoute)
app.use("/api/cart", cartRoute)
app.use("/api/upload", uploadRoute)


app.listen(PORT, ()=>{
    console.log("App is running on "+ PORT)
})

