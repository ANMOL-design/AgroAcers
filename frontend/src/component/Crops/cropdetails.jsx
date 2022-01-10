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
const CRopDetails = (e)=>{
    const { id } = useParams();
    const [blogData,setblogData] = useState([]);
    const [cropData, setCropdata] = useState([]);
    const SimiliarProducts = ()=>{
       return(
         <>
         <div className="similiar-article">
              <h1>Similiar Crops :-</h1>
              <div className="crop-type-card-container">
          {
           rabiCrop.slice(0,5).map((i) => (
            <>
                <Link style={{textDecoration:"none"}} to={"/crops/Rabi/"+i._id}>
                <div className="card">
                  <img className="card-img-top img-fluid" src={i.Image} alt="Card image cap" />
                  <div className="card-body" style={{height:"2px"}}>
                    <h2 className="card-title">
                      {i.title}
                    </h2>
                  </div>
                </div>
                </Link>
             
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
  
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
  };
  let rabiCrop = cropData.filter(item=>item.category==="Rabi"&&item.title!=blogData.title)
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
        
        console.log(blogData);
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
            <FacebookShareButton style={{marginRight:"2%"}} url={window.location.href} >
                <FacebookIcon  size={52} round={true}/>
         </FacebookShareButton>
            <WhatsappShareButton  style={{marginRight:"2%"}} url={window.location.href} >
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
              <span className="Author-name"><i class='fas fa-user-circle'></i>{blogData.Author}</span>
            </div>
            <SimiliarProducts />
        </div>
        </>
    )
}
export default CRopDetails;