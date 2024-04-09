const db = require("../models/index");
const Product = db.Product;

class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? 
        {
            name : {
                [db.Sequelize.Op.iLike]: `%${this.queryStr.keyword}%`
            },
        }: {}

        console.log("keyword", keyword);

        this.query = Product.findAll({ where: { ...keyword } });
        return this;
    }
}

module.exports = ApiFeatures;