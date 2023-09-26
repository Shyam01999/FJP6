const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')
const cors = require("cors");
const app = express();
app.use(cors());

//mini app
const userRouter = require('./Routes/userRouter');
// const planRouter = require('./Routes/planRouter');
// const reviewRouter = require('./Routes/reviewRouter')
// const bookingRouter = require('./Routes/bookingRouter')

//Midddleware function -> post, front => json
app.use(express.json()) //global middleware
app.use(cookieParser())

//base route or router to use
app.use('/user',userRouter)
// app.use('/plan',planRouter)
// app.use('/reviews',reviewRouter)
// app.use('/booking',bookingRouter)

//config
dotenv.config({path:"food-app/config/config.env"});

//connection to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})


















