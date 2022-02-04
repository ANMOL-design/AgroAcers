import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
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
import axios from "axios";
import SimilarProduct from "./MorePageBlog";
import CommentBox from "../../CommentBox/CommentBox";

const CRopDetails = (e) => {

    const { id } = useParams();
    const [blogData,setblogData] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);    
    
    useEffect(() => {
        const fetchdata = async () =>{
            if(id){
                const {data} = await axios.get("/cropdata/" + id);
                setblogData(data);
                setIsLoading(true);
            }
        }
        fetchdata();
        window.scroll(0,0);

    }, [id]);
  

    useEffect(() => {
       const mountdesc = () => {
          if (IsLoading) {
            // console.log("Render The Description");
            document.getElementById("crop-blog-description").innerHTML = blogData.Description;
          }
       }
       mountdesc()
    }, [blogData.Description, IsLoading])
   
    if(!IsLoading){
      return(
        <Loader />
      )
    }
      
    return(
        <>
        <div className="crop-blog-container">
            <div className="crop-blog-header">
                <h1>{blogData.title}</h1>
                <p><cite>Last Updated : {blogData.time}</cite></p>
            </div>

            <div className="crop-blog-image-container">
                {/* Image of Crop  */}
                <img className="img-fluid" src={blogData.Image} alt={blogData.title} />
            </div>
                {/* Share Area of Crop  */}
                <div className="share-blog-container">

                    <FacebookShareButton style={{marginRight:"2%"}} url={window.location.href} >
                        <FacebookIcon  size={50} round={true}/>
                    </FacebookShareButton>

                    <WhatsappShareButton  style={{marginRight:"2%"}} url={window.location.href} >
                        <WhatsappIcon size={50} round={true}/>
                    </WhatsappShareButton>

                    <TwitterShareButton style={{marginRight:"2%"}}  url={window.location.href}  hashtags="#kisan #AgroAcers #website for helping India">
                        <TwitterIcon  size={50} round={true} />
                    </TwitterShareButton>

                    <LinkedinShareButton  style={{marginRight:"2%"}} url={window.location.href} >
                        <LinkedinIcon  size={50} round={true}/>
                    </LinkedinShareButton>

                    <EmailShareButton  style={{marginRight:"2%"}} url={window.location.href} >
                        <EmailIcon  size={50} round={true}/>
                    </EmailShareButton>

                    <TelegramShareButton url={window.location.href} >
                        <TelegramIcon  size={50} round={true}/>
                    </TelegramShareButton>
                </div>

              
            <div id="crop-blog-description" className="crop-blog-des-containior">
                {blogData.Description}
            </div>

            <hr />

            <div className="author-details">
              <h3>Article Contributed by : </h3>
              <span className="Author-name"><img style={{width:"3%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWp0MYJDYDd4v9GVzKp4wdx6MoIv-qeQdSwg&usqp=CAU" alt="USER" /> {blogData.Author}</span>
            </div>
            
            <hr />
            {/* More Products  */}
           <CommentBox Cropname={blogData.title}/>
            <SimilarProduct category={blogData.category} title={blogData.title} />
        </div>
        </>
    );
}

export default CRopDetails;






