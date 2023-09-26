
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail = async function sendMail(str,data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'shyamsundarsahoo1998@gmail.com',
      pass: 'cfofgowxjqvgnrtp'

    },
  });

  var Osubject,Ohtml,Otext;
  if(str == 'signup'){
    Osubject = `Thank you for signup ${data.email}`;
    Ohtml = `
    <h1>Welcome to FoodApp.com</h1>
    <p>Hope you have good time !
    Here are your details-</p>
    Name - ${data.name}<br>
    Email - ${data.email}
    `
  }

  else if(str == 'resetpassword'){
    Osubject=`Reset your password`;
    Ohtml=`
    <h1>Food App.com</h1>
    Here is your link to reset your password !
    ${data.resetPasswordLink}
    `
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"FoodApp 👻" <shyamsundarsahoo1998@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
     // plain text body
    html: Ohtml, // html body
  });

  console.log("Message sent: %s", info.messageId);

}

// sendMail().catch(console.error);
