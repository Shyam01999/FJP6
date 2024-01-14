const validate = (schema) =>async (req, res, next) => {
    try{
        res.header('Access-Control-Allow-Credentials', true);
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err){
        // console.error("Validation Error:", err);
        const error = {
            status : 500,
            message :"Fill the input properly",
            extraDetails : err.errors[0].message
        }
        res.status(200).json({ message: error.extraDetails});
        next(error);
        // const message = err.errors[0].message;
        // console.log(message)
        // res.status(400).json({msg:message})
    }
}

module.exports = validate;