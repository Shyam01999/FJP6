const pool = require("../../db");
const bcrypt = require('bcryptjs')
const { registerQuery, emailExistQuery, contactnumberExistQuery } = require("../../queries/Auth/authQuery");

const home = async (req, res) => {
    try {
        res.status(200).send(
            'Welcome to home page controller'
        )
    }
    catch (error) {
        res.status(400).send({
            msg: "Page not Found"
        })
    }
}

const register = async (req, res) => {
    try {
        let { username, email, password, contactnumber, role } = req.body;

        //user default role
        const defaultrole = 'user';
        role = role || defaultrole;

        //secure the password
        const saltRound = 10;
        const hashPassword = await bcrypt.hash(password, saltRound)
        password = hashPassword;

        if (username === '') {
            return res.status(501).json({ message: 'Username does not exist' });
        } else if (email === '') {
            return res.status(501).json({ message: 'Email does not exist' });
        } else if (password === '') {
            return res.status(501).json({ message: 'Password does not exist' });
        } else if (password.length <= 6) {
            return res.status(501).json({ message: 'Password must be at least 7 characters' });
        } else if (contactnumber === '') {
            return res.status(501).json({ message: 'Contact number does not exist' });
        } else if (contactnumber.length < 10) {
            return res.status(501).json({ message: 'Contact number must be at least 10 digits' });
        } else {
            const emailExist = await pool.query(emailExistQuery, [email]);
            const contactnumberExist = await pool.query(contactnumberExistQuery, [contactnumber]);
            if (emailExist.rows.length > 0) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }
            else if (contactnumberExist.rows.length > 0) {
                return res.status(400).json({ message: 'User with this number already exist' })
            }
            else {
                const registerData = await pool.query(registerQuery, [username, email, password, contactnumber, role]);

                if (registerData.rowCount == 1) {
                    res.status(200).json({ message: 'Account created' });
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
            msg: 'Page not Found'
        });
    }
};



module.exports = { home, register }