const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,  
  database: "testDemoapp",
  password: process.env.PASSWORD, 
  port: process.env.DBPORT,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }, 
});

pool.connect((error, client, release) => {
    if (error) {
      console.error("Error connecting to the database:", error);
      return;
    }
  
    console.log("Database connected successfully!");
    // Release the client
    release();
  });   

module.exports = pool