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
    const newUser = await User.create({ username, email, password, mobilenumber, avatar:{public_id:"this is sample id", url:"profilepicurl"}, role });
    // console.log("newuser", newUser);
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
    const emailExist = await User.findOne({ where: { email } });
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
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length > 0) {
      res.json({
        message: "All Users in database",
        data: users
      });
    } else {
      res.json({
        message: "No Users Found",
        data: []
      });
    }

  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id, username, email, password, mobilenumber, role } = req.body;

    // Find the user by ID
    let user = await User.findByPk(id);
    console.log("User", user);

    if (!user) {
      return res.status(404).json({ message: `User with this id:${id} not found` });
    }

    // Check if the email already exists in the database for another user
    if (email) {
      const existingUserWithEmail = await User.findOne({ where: { email } });
      if (existingUserWithEmail && existingUserWithEmail.id !== id) {
        return res.status(400).json({ message: 'Email is already assigned to another user' });
      }
    }

    // Check if the mobile number already exists in the database for another user
    if (mobilenumber) {
      const existingUserWithMobileNumber = await User.findOne({ where: { mobilenumber } });
      if (existingUserWithMobileNumber && existingUserWithMobileNumber.id !== id) {
        return res.status(400).json({ message: 'Mobile number is already assigned to another user' });
      }
    }

    // Update user properties
    user.username = username || user.username;
    user.email = email || user.email;
    user.password = password || user.password;
    user.mobilenumber = mobilenumber || user.mobilenumber;
    user.role = role || user.role;

    // Save the updated user
    user = await user.save();

    res.status(200).json({ message: 'User updated successfully', data: user });
  } catch (error) {
    console.error('Error fetching updating users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteUser = async (req, res) => {
  try {
    const {id} = req.body;

    // Find the user by ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    // Delete the user
    await user.destroy();

    res.status(200).json({ message: `User with ID ${id} deleted successfully` });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Export controller functions
module.exports = {
  register,
  login,
  getAllUsers,
  updateUser,
  deleteUser
}
