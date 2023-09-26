const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
app.listen(3000,()=>{
    console.log(`Server Started at port 3000 `)
});

//Midddleware function -> post, front => json
app.use(express.json()) //global middleware
app.use(cookieParser())
app.use(cors())

//mini app
const userRouter = require('./Routes/userRouter');

//base route or router to use
app.use('/user',userRouter)














