const mongoose = require('mongoose');

const connectDatabase=()=>{
//Data base connected to application
const db_link = process.env.DB_LINK
mongoose.connect(db_link)
.then(function(db){
    console.log("Database connected successfully");
})
.catch(function(err){
    console.log(err);
})
}

module.exports = connectDatabase;