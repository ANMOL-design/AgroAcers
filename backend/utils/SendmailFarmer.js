var nodemailer = require('nodemailer');

const sendmsgtofarmer = async(name, company, body, Farmername, Farmeremail) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'agroacers.team@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'agroacers.team@gmail.com',
        to: Farmeremail,
        subject: `Deal for Crop from ${company}`,
        text: Farmername + " " + body + " " + name
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendmsgtofarmer