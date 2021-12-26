var nodemailer = require('nodemailer');

const sendEmail = async (UseremailId,username)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agroacers.team@gmail.com',
    pass: 'AgroAcers123'
  }
});

var mailOptions = {
  from: 'agroacers.team@gmail.com',
  to: UseremailId,
  subject: 'Registration in AgroAcers',
  html : `<h1>Hi ${username} . Thankyou for Registration in AgroAcers</h1> <p>AgroAcers is a non-profited website develop to help the farmer of country to raise the issue of farmer to government and AgroAcers provide the facilities like mandi price , farming shop ,crops etc</p>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports = sendEmail