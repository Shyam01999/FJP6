const validate = (schema) =>async (req, res, next) => {
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }
    catch(err){
        const error = {
            status : 501,
            message :"Fill the input properly",
            extraDetails : err.errors[0].message
        }

        next(error);
        // const message = err.errors[0].message;
        // console.log(message)
        // res.status(400).json({msg:message})
    }
}

module.exports = validate;