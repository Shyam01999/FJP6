const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT ?? 8000;
const pool = require('./db');

app.use(cors());

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})