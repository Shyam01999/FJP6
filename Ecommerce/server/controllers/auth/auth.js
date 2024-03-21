const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../../models/index")
const User = db.User;

// // ****************************
// //   Registration Controller
// // ****************************
const register = async (req, res) => {
  try {
    let { username, email, password, mobilenumber, role } = req.body;
    //user default role
    const defaultrole = 'user';
    role = role || defaultrole;

    // const saltRound = 10;
    // const hashPassword = await bcrypt.hash(password, saltRound)
    // password = hashPassword;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Check if the mobile number already exists in the database
    const existingMobileUser = await User.findOne({ where: { mobilenumber } });
    if (existingMobileUser) {
      return res.status(400).json({ message: 'User with this mobile number already exists' });
    }

    // If email and mobile number are unique, proceed with user registration
    const newUser = await User.create({ username, email, password, mobilenumber, role });
    if (newUser) {
      // Generate a JWT token
      const token = jwt.sign({ email, role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
      res.status(201).json({ message: 'Registration Successful', token, role });
    } else {
      res.status(500).json({ error: 'Registration failed' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// // ****************************
// //   Login Controller
// // ****************************
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({where : {email}});
    if (emailExist) {
   
      // Retrieve the hashed password from the database
      // const hashedPassword = emailExist.rows[0].password;
      // const passwordCheck = await bcrypt.compare(password, hashedPassword);
      const userid = emailExist.dataValues.id
      const userstorepassword = emailExist.dataValues.password;
      const passwordCheck = userstorepassword == password
      
      if (passwordCheck) {
        // Generate a JWT token
        const token = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login Successful', token, userid });
      }
      else {
        return res.status(200).json({ message: 'Invalid Credentials' });
      }

    }
    else {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
  }
  catch (error) {
    // res.status(500).json({ msg: "Internal Server Error" })
    // res.status(500).json({ error: err.message });
    next(error)
  }
}

// Define controller functions
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };



// Export controller functions
module.exports = {
  // home,
  register,
  login
}
