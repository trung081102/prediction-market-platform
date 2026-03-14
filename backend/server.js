const express = require("express")

const app = express()

app.get("/", (req,res)=>{
  res.send("Prediction Market API")
})

app.listen(5000)
