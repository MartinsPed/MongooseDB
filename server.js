const express = require('express')
const port = 2810

const app = express()

app.get("/", (req, res)=>{
    res.json({
        message: "Server created on Mongoose" 
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`)
})