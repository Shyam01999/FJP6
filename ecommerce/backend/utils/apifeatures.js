class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ?
        // console.log(keyword);
        {
            name:{
                $regex: this.queryStr.keyword,
                $options:"i",
            },
        }:{};

        console.log(keyword)

        this.query = this.query.find({...keyword});
        return this;
    }
    filter(){
        const queryObj = {...this.queryStr};
        //Remove some fields for category
        const excludedFields = ['keyword','page','sort','limit','fields'];
        excludedFields.forEach((el)=> delete queryObj[el]);

        //Filter for price and Rating

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key)=>`${key}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultPerPage){
        const page = parseInt(this.queryStr.page) || 1;
        // const limit = parseInt(this.queryStr.limit,10) || 10;
        const skip = (page-1)*resultPerPage;
        this.query = this.query.skip(skip).limit(resultPerPage);
        return this;
    }
}

module.exports = ApiFeatures;