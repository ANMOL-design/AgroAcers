import React,{useContext, useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../../Styles/contactus.css";
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../../App";
import '../../Styles/uploadpost.css'
const Uploadpage =()=>{
  const [userData, setUserData] = useState({});
  const {state,dispatch}= useContext(UserContext);
  const [quill,setQuill] = useState("");
  const [title1,setTitle] = useState("");
  const [Image,setImage] = useState("");
    const navigate = useNavigate();
    
    const quillcontent = (e)=>{
      setQuill(e);
    }
    let name,value;
    
    const  handleInput = async (e)=>{
          console.log(e);
          name = e.target.name;
          value = e.target.value;
          setTitle(value)
      }
    const  handleInput2 = async (e)=>{
          console.log(e);
          name = e.target.name;
          value = e.target.value;
          setImage(value)
      }
    const postData =async (e)=>{
    e.preventDefault();
    let today  = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yy =today.getFullYear();
    let hh = today.getHours();
    let mi = today.getMinutes();
    let ss = today.getSeconds();
    let title = title1;
    let time = dd+"/"+mm+"/"+yy+"("+hh+":"+mi+":"+ss+")";
    let Description = quill;
    let UserId = userData._id;
    let Author = userData.name;
    let Url = title.split(" ").join("-")
  console.log(Url);
  
    const res =  await fetch("/admin/Postblog" ,{
    method : "POST",
    headers : { 
        "content-Type" : "application/json"
    },
    body : JSON.stringify({
      title,Image,Description,Author,UserId,time
    })
  });
  const data = await res.json();
console.log(data);
  if(res.status === 201){
      window.alert("Your blog is added.");
      navigate('/', { replace: true });
  }
  else {
    window.alert("Error occured , try again")
  }

}
const callAboutPage = async () => {
  try {
    const res = await fetch("/aboutuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    setUserData(data);

    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  callAboutPage();
}, []);

    return (
      <>
        <div className="container-fluid">
        <div className="uploadpost-container">
        <h1 style={{fontSize: '3rem', color: '#77bc3f'}} className="m-2 text-decoration-underline text-center mt-4">
            Upload Blog Post
        </h1>
          <div className="form-container">
      <form method="POST">
          <label htmlFor="title">Title :</label> <br />
         <input type="text" placeholder="ENTER THE TITLE..."  name="title" onChange={handleInput} id="title" /> <br />
          <label htmlFor="title">Image :</label><br />
         <input type="text" placeholder="add img url"   name="Image" onChange={handleInput2} id="title" />
         <br />
         <label htmlFor="description">Description :</label>
         <ReactQuill className="description"  onChange={quillcontent}   name="description"    theme="snow"/>
         <input id="post-btn" onClick={postData}  type="submit" value="Add Post" />
      </form>
      </div>
    </div>
        </div>
      </>
    );
  
}
export default Uploadpage;
