const pool = require("../../db");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

// ****************************
//   Registration Controller
// ****************************
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
                // Generate a JWT token
                const token = jwt.sign({ email, role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

                res.status(200).json({ message: 'Registration Successful', token, role });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({
            msg: 'Page not Found'
        });
    }
};

// ****************************
//   Login Controller
// ****************************
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const emailExist = await pool.query(emailExistQuery, [email]);
        if (emailExist.rows.length > 0) {
            // Retrieve the hashed password from the database
            const hashedPassword = emailExist.rows[0].password;
            const userid = emailExist.rows[0].id;
            const passwordCheck = await bcrypt.compare(password, hashedPassword);
            if (passwordCheck) {
                // Generate a JWT token
                const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                return res.status(400).json({ message: 'Login Successful', token, userid });
            }
            else {
                return res.status(400).json({ message: 'Invalid Credentials' });
            }

        }
        else {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
    }
    catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
}


module.exports = { home, register, login }