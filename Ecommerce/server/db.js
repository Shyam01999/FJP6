// const Pool = require('pg').Pool
// require('dotenv').config()

// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,  
//   database: "Ecommerce_DB",
//   password: process.env.PASSWORD, 
//   port: process.env.DBPORT
// });

// pool.connect((error, client, release) => {
//     if (error) {
//       console.error("Error connecting to the database:", error);
//       return;
//     }

//     console.log("Database connected successfully!");
//     // Release the client
//     release();
//   });   

// module.exports = pool

const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize instance
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: 'Ecommerce_DB',
  username: process.env.USER,
  password: process.env.PASSWORD,
});

// Define an async function to authenticate the database connection
async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the async function to authenticate the database connection
authenticateDatabase();

// Export the Sequelize instance
module.exports = { sequelize };