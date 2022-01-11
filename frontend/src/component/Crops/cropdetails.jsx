import { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TelegramShareButton,
  TelegramIcon
} from "react-share";
import "../../Styles/cropdetails.css"
import Loader from "../Loader";
const CRopDetails = (e)=>{
    const { id } = useParams();
    const [blogData,setblogData] = useState([]);
    const [cropData, setCropdata] = useState([]);
    const [isLoadData1,setIsLoadData1] =useState(false)
    const [isLoadData2,setIsLoadData2] =useState(false)
    let rabiCrop = cropData.filter(item=>item.category==="Rabi"&&item.title!=blogData.title)
    const SimiliarProducts = ()=>{
       return(
         <>
         <div className="similiar-article">
              <h1>Similiar Crops :-</h1>
              <div className="crop-type-card-container">
          {
           rabiCrop.slice(0,3).map((i) => (
            <>
                <div className="card">
                <Link style={{textDecoration:"none"}} to={"/crops/Rabi/"+i._id}>
                  <img className="card-img-top img-fluid" src={i.Image} alt="Card image cap" />
                  <div className="card-body">
                    <h2 className="card-title">
                      {i.title}
                    </h2>
                  </div>
                </Link>
                </div>
             
              
            </>
            
          ))}
          </div>
            </div>
         </>
       )
      //  window.location.reload()
    }
    const getblogData = async () => {
      try {
        const res = await fetch("/cropdata", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
  
        const data = await res.json();
        setCropdata(data);
     if(res.status === 200){
       setIsLoadData1(true);
     }
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
  };
 
    const getPageData = async () => {
        try {
          const res = await fetch("/cropData/"+id, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          const data = await res.json();
          setblogData(data);
          if(res.status === 200){
            setIsLoadData2(true);
          }
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
        }
        
      };
      useEffect(() => {
        getPageData();
        getblogData();
        document.getElementById("crop-blog-description").innerHTML = blogData.Description;
      });
      
    return(
        <>
        <div className="crop-blog-container">
            <div className="crop-blog-header">
                <h1>{blogData.title}</h1>
                <p><cite>Last Updated : {blogData.time}</cite></p>
            </div>
            <div className="crop-blog-image-container">
                <img className="img-fluid" src={blogData.Image} alt={blogData.title} />
            </div>
            <div className="share-blog-container">
            <FacebookShareButton style={{marginRight:"2%"}} title={cropData.title} url={window.location.href} >
                <FacebookIcon  size={52} round={true}/>
         </FacebookShareButton>
            <WhatsappShareButton  style={{marginRight:"2%"}} title={cropData.title}  url={window.location.href} >
                <WhatsappIcon size={52} round={true}/>
         </WhatsappShareButton>
         <TwitterShareButton style={{marginRight:"2%"}}  url={window.location.href}  hashtags="#kisan #AgroAcers #website for helping India">
                <TwitterIcon  size={52} round={true} />
          </TwitterShareButton>

          <LinkedinShareButton  style={{marginRight:"2%"}} url={window.location.href} >
            <LinkedinIcon  size={52} round={true}/>
          </LinkedinShareButton>
          <EmailShareButton  style={{marginRight:"2%"}} url={window.location.href} >
            <EmailIcon  size={52} round={true}/>
          </EmailShareButton>
          <TelegramShareButton  style={{marginRight:"2%"}} url={window.location.href} >
            <TelegramIcon  size={52} round={true}/>
          </TelegramShareButton>
            </div>
            <div id="crop-blog-description" className="crop-blog-des-containior">
                
            </div>
            <div className="author-details">
            <hr />
          
              <h3>Article Contributed by : </h3>
              <span className="Author-name"><img style={{width:"3%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWp0MYJDYDd4v9GVzKp4wdx6MoIv-qeQdSwg&usqp=CAU" alt="" /> {blogData.Author}</span>
            </div>
            <SimiliarProducts />
        </div>
        </>
    )
      }

export default CRopDetails;