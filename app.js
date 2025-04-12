const express = require('express');
const cors = require("cors");
require('dotenv').config()

const aiRoutes = require("./routes/ai.routes");

const app = express()
app.use(express.json())

app.use(cors())
const port = 5000;

app.use("/api", aiRoutes);

app.listen(port, ()=>{
    console.log(`Server is running in port ${port}`)
})