import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/contactus.css";
import farmerImage from "../../Images/New Img/farmer.jpg";
import {useNavigate} from 'react-router-dom';

const ContactPage =()=>{
    const navigate = useNavigate();
    const [contact,setContact] = useState({
      name:"",email:"",phonenumber:"",subject:"",query:"",time:""
    })
    let name , value;
    const  handleInput = async (e)=>{
          console.log(e);
          name = e.target.name;
          value = e.target.value;
          setContact({...contact , [name]:value})
      }
    const postData =async (e)=>{
    e.preventDefault();
    const {name,email,phonenumber,subject,query} = contact;
    let today  = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yy =today.getFullYear();
    let hh = today.getHours();
    let mi = today.getMinutes();
    let ss = today.getSeconds();
    let time = dd+"/"+mm+"/"+yy+"("+hh+":"+mi+":"+ss+")";
    const res =  await fetch("/contactus" ,{
    method : "POST",
    headers : { 
        "content-Type" : "application/json"
    },
    body : JSON.stringify({
      name,email,phonenumber,subject,query,time
    })
  });
  const data = await res.json();
  console.log(contact)
  if(res.status === 201){
      window.alert("Your query is succesfully registered our expert team will reply you soon.");
      navigate('/', { replace: true });
  }
  else {
    window.alert("Error occured , try again")
  }
}
    return (
      <>
        <div className="container-fluid">
           <div className={"ContactBanner"}>
                <h1 className="form-heading">Please get in touch<br /> and our expert support<br /> team will answer all<br /> your questions.</h1>
           </div>
            <div className="container-inner-contact">
                  <div>
                      <div className="col-md-12 container-img-add">
                          <img className="farmer-image" src={farmerImage} alt="farmer" />
                          <div className="farmer-address" >
                              <h5>Office Address/Postal Address</h5>
                              <cite>
                                  Office of CEO, AgroAcers<br />
                                  3rd Floor, Room no-3015<br />
                                  Anand Vihar, 6, CGO Complex<br />
                                  Lodhi Road, New Delhi, <br />
                                  India<br />
                              </cite>
                          </div>
                      </div>
                  </div>
                  <div className="container-form">
                        <h3 className="contactus-form-heading">Send us your Query</h3>
                        <form method="POST">
                            {/* Name  */}
                            <div class="m-2">
                                <label for="NameI" class="form-label">Name</label>
                                <input type="text" name="name" class="form-control" value={contact.name} onChange={handleInput} id="NameI" placeholder="John Smith" />
                            </div>
                            {/* Email  */}
                            <div class="m-2">
                                <label for="emailInput" class="form-label">Email address</label>
                                <input type="email" name="email" class="form-control" id="emailInput" value={contact.email} onChange={handleInput} placeholder="name@example.com" />
                            </div>
                            {/* Phone No  */}
                            <div class="m-2">
                                <label for="PhoneInput" class="form-label">Phone No.</label>
                                <input type="number" name="phonenumber" class="form-control" id="PhoneInput" value={contact.phonenumber} onChange={handleInput} placeholder="91234-91234"  min="0"/>
                            </div>
                            {/* Subject  */}
                            <div class="m-2">
                              <label for="SubInput" class="form-label">Subject</label>
                              <input type="text" name="subject" class="form-control" id="SubInput" value={contact.subject} onChange={handleInput} placeholder="Title" />
                            </div>
                            {/* Text  */}
                            <div class="m-2">
                                <label for="exampleFormControlTextarea1" class="form-label">Write Your Query: </label>
                                <textarea class="form-control" name="query" id="exampleFormControlTextarea1" placeholder="Write your query here...." value={contact.query} onChange={handleInput} rows="3"></textarea>
                            </div>
                            {/* Submit  */}
                            <div class="m-3 ">
                                <button type="submit"  onClick={postData} class="btn btn-success btn-color form-control">Submit</button>
                            </div>
                        </form>
                  </div>
            </div>
        </div>
      </>
    );
  
}
export default ContactPage;
