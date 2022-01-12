const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');

const app = express();

var emailBody = fs.readFileSync('./email/email.html', {encoding: 'utf-8'});

var transport = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: "postmaster@sandboxf8858364c6634f59aab551aa8a6266bc.mailgun.org",
    pass: "efff08a9a6f9a63bb058bae3d02f3e6a-52b6835e-f50eaa40"
  }
});

const message = {
  from: 'katrin.petrosyan-cc9295@inbox.mailtrap.io', // Sender address
  to: 'vardanyankristine5@gmail.com',         // List of recipients
  subject: 'testing E-mail', // Subject line
  text:emailBody,
  html: emailBody,
  contentType:'text/html',
generateImageFromHTML: true,
};

transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});

app.use('/', require('./routes/index.js'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));