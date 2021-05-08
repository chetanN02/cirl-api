const express = require("express")
const mongoose = require("mongoose")
const app = express();
require('dotenv').config()
const washingMachineRoute = require("./routes/washingMachine")

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
app.use('/api/washingmachine',washingMachineRoute)

mongoose
    .connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,   
        }
    )
    .then(() => {
        console.log("Mongodb connected")
    })
    .catch((err) => console.log(err.message))

app.listen(PORT,()=>{
    console.log("Server started")
})