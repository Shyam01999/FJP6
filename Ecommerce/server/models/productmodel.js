module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        // image: [
        //     {
        //         public_id: {
        //             type: DataTypes.STRING,
        //             allowNull: false
        //         },
        //         url: {
        //             type: DataTypes.STRING,
        //             allowNull: false
        //         }

        //     }
        // ],
        image: {
            type: DataTypes.JSON,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numOfReviews: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                max: 4
            }
        },

        // reviews: [
        //     {
        //         name: {
        //             type: DataTypes.STRING,
        //             allowNull: false
        //         },
        //         ratings: {
        //             type: DataTypes.INTEGER,
        //             allowNull: false
        //         },
        //         comment: {
        //             type: DataTypes.STRING,
        //             allowNull: false
        //         }
        //     }
        // ]

        reviews: {
            type: DataTypes.JSON,
            allowNull: false
        }
    })

    return Product
}