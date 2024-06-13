require("dotenv").config()
const express = require("express")
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3001


app.use(morgan('dev'))
app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({
        status:"Success",
        message:"Home page..."
    })
})
app.listen(PORT, () =>{
    console.log(`server is running at port ${PORT}`)
})

