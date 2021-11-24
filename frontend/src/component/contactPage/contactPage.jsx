// import React,{useState} from "react";
// import BannerImage from "../../Images/crousal/image-5.jpg";
// // import BannerImage from "../../Images/crousal/11.jfif";
// import "bootstrap/dist/css/bootstrap.css";
// import "../../Styles/contactus.css";
// import farmerImage from "../../Images/New Img/farmer.jpg";
// const ContactPage =()=>{
//   const [contact,setContact] = useState({
//     name:"",email:"",phonenumber:"",subject:"",query:""
// })
// let name , value;
// const  handleInput = async (e)=>{
//   console.log(e);
// name = e.target.name;
// value = e.target.value;
// setContact({...contact , [name]:value})
// }
// const postData =async (e)=>{
//   e.preventDefault();
//   const {name,email,phonenumber,subject,query} = contact;
//   const res =  await fetch("/contactus" ,{
//     method : "POST",
//     headers : { 
//         "content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//       name,email,phonenumber,subject,query
//     })
// } );
// const data = await res.json();
// console.log(contact)
// if(res.status === 201){
//   window.alert("your query is succesfuly registered our expert team reply you ");
// }
// else {
 
//   window.alert("error occured , try again")
// }
// }
 
//     return (
//       <>
//         <div className="contact-page-container">
//           <div
//             id="carouselExampleSlidesOnly"
//             className="carousel slide"
//             data-ride="carousel"
//           >
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <img
//                   className="d-block w-100 img-fluid"
//                   src={BannerImage}
//                   alt="First slide"
//                 />
//                 <div className="carousel-caption d-none d-md-block">
//                   <h1 className="contat-us-card-text">Contact Us</h1>
//                   <p className="contat-us-card-para">
//                     if you have any query related to farming send us query our
//                     expert team resolve your query soon
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="contactus-form-container">
//             <h3 className="contactus-form-heading">Send us Query</h3>
//             <form method="POST" className="contactus-form">
//               <label htmlFor="name">name :</label>
//               <input type="text" name="name" id="name"  value={contact.name} onChange={handleInput} /> <br />
//               <label htmlFor="name">Email :</label>
//               <input type="email" name="email" id="email"  value={contact.email} onChange={handleInput} /> <br />
//               <label htmlFor="phonenumber">Phone no :</label>
//               <input type="number" name="phonenumber" id="phonenumber" value={contact.phonenumber}  onChange={handleInput} /> <br />
//               <label htmlFor="subject">Subject :</label>
//               <input type="text" name="subject" id="subject"  value={contact.subject} onChange={handleInput} /> <br />
//               <label htmlFor="query">Write your query :</label>
//               <textarea type="text" name="query" id="query" value={contact.query}  onChange={handleInput} rows="3" /> <br />
//               <input type="submit" id="submit-btn" onClick={postData} />
//             </form>
//             <img className="farmer-image" src={farmerImage} alt="farmer" />
//           </div>
//         </div>
//       </>
//     );
//   }

// export default ContactPage;
