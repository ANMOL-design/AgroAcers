import { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/GovtScheme.css"
import AgroSchemeBanner from "../../Images/crousal/AgroSchemes1.jpg"
import Loader from "../Loader";
const GovtScheme = ()=>{
    const [SchemeData,SetSchemeData] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);
    var x=1;
    useEffect(() => {
        const fetchdata = async () =>{
              const {data} = await axios.get("/GovtSchemeData");
              SetSchemeData(data);
              setIsLoading(true);
            
          }
        fetchdata();
        window.scroll(0,0);
        console.log(SchemeData);
      },[]);
      if(!IsLoading){
          return(
              <Loader />
          )
      }
      else{
    return(
        <>
        <div className="govt-scheme-container">
            <div className="Govt-scheme-header">
                <img style={{width:"100%"}} src={AgroSchemeBanner} alt="Govt Scheme" />
            </div>
            <div className="govt-scheme-header">
            <h1 >Government Schemes</h1>
                <p>All agriculture government schemes with accurate information. Our goal to deliver this service to every Indian farmer.</p>
            </div>
           <div className="govt-schemes-body university-card-container">
              {SchemeData.map((item)=>{
                  return(
                      <>
                     <div className="card mb-3" key={x++}>
                    <img className="card-img-top imageuniver" src={item.Imageurl} alt="Card cap" />
                    
                    <div className="card-body">
                      <h2 className="card-title pagricheckhead" style={{color:"#198754"}}>{item.SchemeName}</h2>
                      <p className="card-text pagricheck">
                        <span style={{fontWeight: "300",fontSize:"16px" ,color:"green"}}>{item.Description}</span>
                      </p>

                      {item.website && (
                        <a href={item.website} target={"_blank"} rel="noopener noreferrer external">
                          <button className="btn btn-success">
                            Visit Scheme
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                      </>
                  )
              })}
           </div>
        </div>
        </>
    )
            }
}
export default GovtScheme;