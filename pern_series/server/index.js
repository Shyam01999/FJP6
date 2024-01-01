const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT ?? 8000;
const pool = require('./db');

const router = require('./router/auth-router/auth-router')

app.use(cors());
app.use(express.json()); //middleware

app.use("/api/auth", router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})