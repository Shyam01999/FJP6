const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Import Sequelize instance

// Define User model
const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false // Assuming first name is required
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false // Assuming last name is required
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Assuming email is required
        unique: true, // Assuming email should be unique
        validate: {
            isEmail: true // Validates email format
        }
    },
});

module.exports = User; // Export User model