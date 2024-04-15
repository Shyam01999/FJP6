const bcrypt = require('bcryptjs');
const sendToken = require('../../utils/sendToken');
const db = require("../../models/index");
const errorMiddleware = require('../../middleware/error-middleware');
const sendEmail = require('../../utils/sendEmail');
const crypto = require('crypto');
const { Op } = require('sequelize');

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

    // hash password
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
    const newUser = await User.create({ username, email, password, mobilenumber, avatar: { public_id: "this is sample id", url: "profilepicurl" }, role });

    if (newUser) {
      sendToken(email, "Registration Successful", 201, newUser, res)
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
        return sendToken(email, "Login Successful", 200, emailExist, res);
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

// // ****************************
// //   Logout Controller
// // ****************************
const logout = async (req, res, next) => {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true
    };
    res.status(200).cookie("token", null, options).json({ message: "Loggedout Successfully" })
  }
  catch (error) {
    errorMiddleware(error, req, res, next);
  }
}

// // ****************************
// //   Forgot password Controller
// // ****************************
const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Generate reset password token for the user
    const resetToken = user.getResetPasswordToken();

    // Save the user instance to persist the reset token and expiry time
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/auth/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
      await sendEmail({
        email: user.email,
        subject: `Ecommerce Password Recovery`,
        message,
      })

      return res.status(200).json({ message: `Email sent to ${user.email} successfully` });
    }
    catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res.status(500).json({ message: error.message })
    }

  }
  catch (error) {
    errorMiddleware(error, req, res, next);
  }
}

// // ****************************
// //   Reset Password Controller
// // ****************************
const resetPassword = async (req, res, next) => {

  //creating token hash 
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  // Find user by reset token and check expiration
  const user = await User.findOne({
    where: {
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpire: { [Op.gt]: Date.now() },
    },
  });

  if (!user) {
    return res.status(400).json({ message: 'Reset Password token is invalid or has been expired' });
  }

  if (req.body.password != req.body.confirmPassword) {
    return res.status(400).json({ message: 'Password does not match' });
  }

  // Update user's password
  user.password = req.body.password;
  user.resetPasswordToken = null;
  user.resetPasswordExpire = null;
  await user.save();
  
  // Password reset successful
  sendToken(user.email, "Password reset successful", 200, user, res);
};

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
    const { id } = req.body;

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
  logout,
  getAllUsers,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword
}
