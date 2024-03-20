// const pool = require("../../db");
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { registerQuery, emailExistQuery, contactnumberExistQuery } = require("../../queries/Auth/authQuery");

// const home = async (req, res) => {
//     try {
//         res.status(200).send(
//             'Welcome to home page controller'
//         )
//     }
//     catch (error) {
//         res.status(400).send({
//             msg: "Page not Found"
//         })
//     }
// }

// // ****************************
// //   Registration Controller
// // ****************************
// const register = async (req, res, next) => {
//     try {
//         // res.header('Access-Control-Allow-Credentials', true);
//         let { username, email, password, contactnumber, role } = req.body;
//         // console.log("backend data",req.body);
//         //user default role
//         const defaultrole = 'user';
//         role = role || defaultrole;

//         //secure the password
//         const saltRound = 10;
//         const hashPassword = await bcrypt.hash(password, saltRound)
//         password = hashPassword;

//         const emailExist = await pool.query(emailExistQuery, [email]);
//         const contactnumberExist = await pool.query(contactnumberExistQuery, [contactnumber]);
//         if (emailExist.rows.length > 0) {
//             return res.status(200).json({ message: 'User with this email already exists' });
//         }
//         else if (contactnumberExist.rows.length > 0) {
//             return res.status(200).json({ message: 'User with this number already exist' })
//         }
//         else {
//             const registerData = await pool.query(registerQuery, [username, email, password, contactnumber, role]);
//             if (registerData.rowCount == 1) {
//                 // Generate a JWT token
//                 const token = jwt.sign({ email, role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

//                 res.status(200).json({ message: 'Registration Successful', token, role });
//             }
//         }

//     } catch (error) {
//         // console.log(error);
//         // res.status(400).send({
//         //     msg: 'Page not Found'
//         // });
//         console.log(error);
//         next(error)
//     }
// };

// // ****************************
// //   Login Controller
// // ****************************
// const login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         // console.log("data",req.body)
//         const emailExist = await pool.query(emailExistQuery, [email]);
//         if (emailExist.rows.length > 0) {
//             // Retrieve the hashed password from the database
//             const hashedPassword = emailExist.rows[0].password;
//             const userid = emailExist.rows[0].id;
//             const passwordCheck = await bcrypt.compare(password, hashedPassword);
//             if (passwordCheck) {
//                 // Generate a JWT token
//                 const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
//                 return res.status(200).json({ message: 'Login Successful', token, userid });
//             }
//             else {
//                 return res.status(200).json({ message: 'Invalid Credentials' });
//             }

//         }
//         else {
//             return res.status(400).json({ message: 'Invalid Credentials' });
//         }
//     }
//     catch (error) {
//         // res.status(500).json({ msg: "Internal Server Error" })
//         // res.status(500).json({ error: err.message });
//         next(error)
//     }
// }


// module.exports = { home, register, login }

const db = require("../../models/index")
const User = db.User;

// Define controller functions
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const newUser = await User.create({ firstName, lastName, email });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export controller functions
module.exports = {
  getAllUsers,
  createUser,
};
