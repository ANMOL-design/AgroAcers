var nodemailer = require('nodemailer');

const sendbidmsg = async (nameOfOrg,emailoforg,contactoforg,intrestoforg,cropname,farmername,bidprice,farmeremail)=>{
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
        to:farmeremail,
        subject: 'Hurray! New price for your crop || AgroAcers Support',
        html : `
        <p>H1 ${farmername}</p>
        <p>Regarding the crop of ${cropname} which you post on AgroAcers. we have a good news for you that one Orgainization/company have show intrest on your crop and they are ready to deal with you</p>
        <p>following are the details of company</p>
        <table style="border:2px solid black">
        <tr>
        <th style="border:2px solid black">Name of Organization</th>
        <td style="border:2px solid black">${nameOfOrg}</td>
        </tr>
        <tr>
        <th style="border:2px solid black">email of Organization</th>
        <td style="border:2px solid black">${emailoforg}</td>
        </tr>
        <tr>
        <th style="border:2px solid black">Contact Details</th>
        <td style="border:2px solid black">${contactoforg}</td>
        </tr>
        <tr>
        <th style="border:2px solid black">Bid Ammount</th>
        <td style="border:2px solid black">${bidprice}</td>
        </tr>
        </table>
        <h3>why company want to buy Your Crop?</h3>
        <p>${intrestoforg}</p>
        <br/>
      <p> You can contact Directly with company and set your deal if you face any problem so you can feel free to contact with us at <i>agroacers.team@gmail.com</i></p> `    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendbidmsg