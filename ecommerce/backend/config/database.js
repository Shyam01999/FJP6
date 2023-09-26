const mongoose = require('mongoose');

const connectDatabase=()=>{
const db_link = `mongodb+srv://admin:7w0NpOxxhXk7eXLI@cluster0.ear8apt.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db_link).then(()=>{
    console.log("Data base connected successfully")
})
.catch((err)=>{
    console.log(err)
})
}

module.exports = connectDatabase;