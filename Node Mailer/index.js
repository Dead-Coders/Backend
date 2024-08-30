var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tsjoker14311211@gmail.com',
    pass: 'bqto bgkw jwja xebs'
  }
});

var mailOptions = {
  from: 'tsjoker14311211@gmail.com',
  to: 'itsabdullah14311211@gmail.com',
  subject: 'Email using Node.js',
  text: 'hellow abdullah how are you'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});