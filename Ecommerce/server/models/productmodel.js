module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        username: {
            type: DataTypes.STRING,
            allowNull: false // Assuming first name is required
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, // Assuming email is required
            unique: true, // Assuming email should be unique
            validate: {
                isEmail: true // Validates email format
            }
        },
        mobilenumber: {
            type: DataTypes.STRING,
            allowNull: false,// Assuming first name is required
            validate: {
                isNumeric: true, // Validates if the value is numeric
                len: [10, 11] // Validates length between 10 and 11 digits
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false // Assuming first name is required  
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false // Assuming last name is required
        },
    }) 

    return Product
}