

# Send Email with Gmail using Nodemailer

How to send an email with your personal gmail account using Nodemailer

Prerequisite:
- Nodejs (Installed)


Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 1
Create a file named `.env`, Inside the *.env* file, create two variable named EMAIL_USERNAME and EMAIL_PASSWORD. EMAIL_USERNAME as a your gmail account ID and EMAIL_PASSWORD as your gmail password.



#### Step 2
We need to define our nodemailer transporter to connect to our service. Make sure you fill in with your credentials such as `EMAIL_USERNAME` and `EMAIL_PASSWORD`.
```
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});
```


#### Step 3
Define a `mailOptions` variable. It should contains information that your receiver should know about it. 
```
const mailOptions = {
  from: 'sender@gmail.com', // Sender address
  to: 'receiver@gmail.com',  // List of recipients
  subject: 'Node Mailer', // Subject line
  text: 'Hello People!, Welcome to Bacancy!', // Plain text body
};
```


#### Step 4
In order to send an email with nodemailer, we need to bring the transporter that we previously configured above, and invoke the `sendMail` function. If everything goes well, you should receive an email.
```
transport.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});

```



Once you have successfully completed the above steps. Run `npm start` to send an email