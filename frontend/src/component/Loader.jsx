import React from "react";
import loader from '../Images/New Img/loader1.gif'
class Loader extends React.Component {


     render(){
         return(
             <>  
                 <img style={{width:"30%",margin:"auto",marginLeft:"30%"}} src={loader} alt="" />
                 <h1  style={{margin:"auto",marginLeft:"35%",color:"green"}}>Data is Loading...</h1>
            
             </>
         );
     }
}
export default Loader;