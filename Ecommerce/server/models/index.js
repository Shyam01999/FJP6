const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)

// Define an async function to authenticate the database connection
sequelize.authenticate()
.then(()=>{
    console.log('Sequelize Database connected successfully.');
})
.catch(()=>{
    console.error('Unable to connect to the database:', error);
})

// Call the async function to authenticate the database connection

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require("./authmodel.js")(sequelize, DataTypes);

db.sequelize.sync({force: false})
.then(()=>{
    console.log('Yes re-sync done!')
})

module.exports = db


