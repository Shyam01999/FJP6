const pool = require("../../db");
const { registerQuery } = require("../../queries/Auth/authQuery");

const home = async(req, res) => {
    try{
        res.status(200).send(
            'Welcome to home page controller'
        )
    }
    catch(error){
        res.status(400).send({
            msg:"Page not Found"
        })
    }
}

const register = async(req, res) => {
    try{
        const {username, email, password, contactnumber} = req.body;
        if(username == ''){
            res.status(501).json({message: 'Username does not exist'});
        }
        else if(email == ''){
            res.status(501).json({message: 'Email does not exist'});
        }
        else if(password == ''){
            res.status(501).json({message: 'Password does not exist'});
        }
        else if(password.length <= 6){
            res.status(501).json({message: 'Password must be at least 7 character'})
        }
        else if(contactnumber == ''){
            res.status(501).json({message: 'Contact number does not exist'})
        }
        else if(contactnumber.length <= 10){
            res.status(501).json({message: 'Contact number must be at least 10 digit'});
        }
        else {
            const registerData = await pool.query(registerQuery, [username, email, password, contactnumber]);
            if(registerData.rowCount == 1){

                res.status(200).json({message: 'Account created'})
            }
        }
    }
    catch(error){
        console.log(error)
        res.status(400).send({
            msg:"Page not Found"
        })
    }
}

module.exports = {home, register}