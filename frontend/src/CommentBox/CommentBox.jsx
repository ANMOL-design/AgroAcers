import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import UserData from "../component/AdminPortal/Userdata";
import "../Styles/comment-box.css"
const CommentBox = (props)=>{
    const [userData, setUserData] = useState([]);
    const [CommentData,setCommentData] = useState([])
    const [Comment,SetComment] = useState({
       CommentMsg:""
    })
    const { state, dispatch } = useContext(UserContext);
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
          setUserData(data);
    
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
        }
      };
      let name,value;
     const handleValue = (e)=>{
       name=e.target.name;
       value=e.target.value;
SetComment({...Comment,[name]:value})
     }
    const postData = async(e)=>{
      e.preventDefault();
      const {CommentMsg} = Comment;
      let today  = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1;
      let yy =today.getFullYear();
      let hh = today.getHours();
      let mi = today.getMinutes();
      let ss = today.getSeconds();
      let time = dd+"/"+mm+"/"+yy+"("+hh+":"+mi+":"+ss+")";
      let Username = userData.name;
      let commentOnCrop = props.Cropname;
      console.log(time);
      const res =  await fetch("/commentBox" ,{
        method : "POST",
        headers : { 
            "content-Type" : "application/json"
        },
        body : JSON.stringify({
          Username,  commentOnCrop, CommentMsg,time
        })
    });

  const data = await res.json();
  console.log(data)

if(res.status === 201){
      window.alert("Your query is succesfully registered our expert team will reply you soon.");
     
  }
else {
    window.alert("Error occured , try again")
}
    }
    const getCommentData = async () => {
      try {
        const res = await fetch("/CommentData", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
  
        const data = await res.json();
        setCommentData(data);
       
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 100; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
      useEffect(() => {
        callAboutPage();
        
    }, []);
    let AvtarColor = "ffffff";
     useEffect(() => {
        getCommentData();
    }, [CommentData]);
    let cropComment = CommentData.filter((item)=>item.commentOnCrop===props.Cropname)
    if(!state){
        return(
          <>
          <div className="detailBox">
       <div className="titleBox">
         <label>Comments({cropComment.length})</label>
           <button type="button" className="close" aria-hidden="true">&times;</button>
       </div>
       <div className="commentBox">
           
           <p className="taskDescription">Start a Discussion not a fire Post with Kindness...</p>
       </div>
       <div className="actionBox">
           <ul className="commentList">
               <li>
                 {cropComment.map((item)=>{
                   return(
                     <>
                      <div className="commenterImage">
                     
                      <img  className="Comment-avtar commenterImage" src={"https://ui-avatars.com/api/?name="+item.Username} alt="" />
                   </div>
                   <div className="commentText">
                      <h6>{item.Username}</h6> <p className="">{item.CommentMsg}</p> <span className="date sub-text">{item.time}</span>
   
                   </div>
                   <hr />
                     </>
                   )
                  
                   })}
               
               </li>
              
           </ul>
           <div className="commenterImage">
                     <img  className="Comment-avtar commenterImage" src={"https://ui-avatars.com/api/?name="+userData.name} alt="" />
                  </div>
           <form className="form-inline" role="form">
          
               <div className="form-group">
              
                   <input type="text" className="form-control" name="CommentMsg" placeholder="Add Your Comment...." id="CommentBox" onChange={handleValue} value={Comment.CommentMsg} />
               </div>
               <div className="form-group">
                 <Link to="/login">
                   <button className="btn btn-default">Login</button>
                 </Link>
               </div>
           </form>
       </div>
   </div>
       
           </>
        )
    }
    else{
    return(
        <>
       <div className="detailBox">
    <div className="titleBox">
      <label>Comments({cropComment.length})</label>
        <button type="button" className="close" aria-hidden="true">&times;</button>
    </div>
    <div className="commentBox">
        
        <p className="taskDescription">Start a Discussion not a fire Post with Kindness...</p>
    </div>
    <div className="actionBox">
        <ul className="commentList">
            <li>
              {cropComment.map((item)=>{
                return(
                  <>
                   <div className="commenterImage">
                  
                   <img  className="Comment-avtar commenterImage" src={"https://ui-avatars.com/api/?name="+item.Username} alt="" />
                </div>
                <div className="commentText">
                   <h6>{item.Username}</h6> <p className="">{item.CommentMsg}</p> <span className="date sub-text">{item.time}</span>

                </div>
                <hr />
                  </>
                )
               
                })}
            
            </li>
           
        </ul>
        <div className="commenterImage">
                  <img  className="Comment-avtar commenterImage" src={"https://ui-avatars.com/api/?name="+userData.name} alt="" />
               </div>
        <form className="form-inline" role="form">
       
            <div className="form-group">
           
                <input type="text" className="form-control" name="CommentMsg" placeholder="Add Your Comment...." id="CommentBox" onChange={handleValue} value={Comment.CommentMsg} />
            </div>
            <div className="form-group">
                <button className="btn btn-default" onClick={postData}>Add Comment</button>
            </div>
        </form>
    </div>
</div>
    
        </>
    )
    }
}
export default CommentBox;