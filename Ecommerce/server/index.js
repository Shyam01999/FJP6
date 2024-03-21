const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
//const pool = require('./db');
const bodyParser = require("body-parser");
const authRouter = require('./router/auth-router/auth-router');
const errorMiddleware = require("./middleware/error-middleware");
const contactRouter = require("./router/contact-router/contact-router");

app.use(express.json()); //middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

//rest api end point
app.use("/api/auth", authRouter);
// app.use("/api/form", contactRouter);


app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})