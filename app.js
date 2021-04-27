require('dotenv').config();

const nodemailer = require('nodemailer');

// Sending Email with Gmail
let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Sending a Text Email
// const mailOptions = {
//   from: 'happypatel95370@bacancy.com', // Sender address
//   to: 'happy.bhesdadiya@bacancy.com',  // List of recipients
//   subject: 'Node Mailer', // Subject line
//   text: 'Hello People!, Welcome to Bacancy!', // Plain text body
// };

// Sending an HTML Email with Attachment
const mailOptions = {
  from: 'sender@gmail.com', // Sender address
  to: 'receiver@gmail.com',  // List of recipients
  subject: 'Node Mailer', // Subject line
  html: '<h1 style="color:#ff6600;">Hello People!, Welcome to Bacancy!</h1>',
  attachments: [
    { filename: 'profile.png', path: './images/profile.png' }
  ]
};

transport.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});
