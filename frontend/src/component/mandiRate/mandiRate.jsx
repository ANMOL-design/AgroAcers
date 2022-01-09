import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Analysis from "./../../Images/Analysis.jpg"
import ProductsBrands from "./Mandibrands.json";
import "./../../Styles/mandirate.css";
import Loader from "../Loader";
import axios from "axios";

function MandiRate() {

  const [DataisLoading, setDataisLoading] = useState(false);
  const [pricedata, setpricedata] = useState([]);
  const [pricedatabackup, setpricedatabackup] = useState([]);
  var result = [];
  
  const [start, setstart] = useState(20);

  var x = 1;

  useEffect(() => {
    const fetchdata = async () =>{
        const {data} = await axios.get("/data");
        setpricedata(data);
        setpricedatabackup(data);
        window.scroll(0,0);
    }
    fetchdata();
    setDataisLoading(true);
  }, [])

    const LoadMoreData = () => {
        setstart(start + 10)
    }

    const LoadLessData = () => {
        if(start <= 0){
          return
        }
        setstart(start - 10)
    }

    const sortproductMSP = () => {
      var e = document.getElementById("SortedProductMSP");
      var value = e.value;

      setpricedata(pricedatabackup);

      if(value === "Select"){
          return
      }
      else if(value === "Lowest"){       
          result.sort((a, b) => {
              return a.min_price - b.min_price;
          });
          setpricedata(result);
      }
      else{       
          result.sort((a, b) => {
              return b.min_price - a.min_price;
          });
          setpricedata(result);
      }
  }

  result = pricedata.filter( (e) => e);

  const HandleTheSearch = (value) => {
    var ans = pricedatabackup.filter( (e) => e.state === value);

    ans = ans.filter((e) => e !== undefined)
    
    // console.log(result, ans)
    setpricedata(ans);
}

  const SearchMSPDetails = () => {
    var e = document.getElementById("FindProductsMSP");
    var value = e.value;


    setpricedata(pricedatabackup)
    // console.log(pricedata, pricedatabackup)


    if(value === "selected"){
      setpricedata(pricedatabackup)
    }
    else{
        HandleTheSearch(value)
    }       
}

  if (!DataisLoading) return <Loader />;
 
    return (

      
      <div className="App">
        {/* Banner of Mandi Price  */}
        <div className="mandi-banner">
            <h1 className="mandi-banner-heading">Mandi Rate</h1>
            <p className="mandi-banner-para">
                The market price is the need of every farmer, the latest
                mandi Rate will show on the Agro Acers platform.
            </p>
        </div>
        
        
        {/* Heading of Sorting MSP  */}
        <div className="MSP-info-container">
            <h3 className="mb-0 text-capitalize">Mandi Price of My City</h3>  
            <div className="innner-MSP-info-container">
                <span>Sort By: </span>
                <select id={"SortedProductMSP"} onChange={sortproductMSP}>
                    <option value="Select">ALL MSP Data </option>
                    <option value="Lowest">Lowest Price</option>
                    <option value="Highest">Highest Price</option>
                </select>

                <span>Filter By: </span>
                <select id="FindProductsMSP" onChange={SearchMSPDetails}>
                    <option value="selected">ALL MSP Data</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Chattisgarh">Chhattisgarh</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttrakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div> 
        </div>
        {/* Table conatining the MSP Prices  */}
        <div className="text-center m-3">
            <h1 id="CheckMSPPrice">MSP Price List</h1>
        </div>
        <table className="table table-striped table-light table-heading-msp mt-1">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>State</th>
              <th>District</th>
              <th>Market</th>
              <th>Item</th>
              <th>Variety</th>
              <th>Min price</th>
              <th>Max Price</th>
              <th>Modal Price</th>
            </tr>
          </thead>

          <tbody>
          
            {result.slice(0,start).map((item) => (
           
              <tr className="table-row" key={x}>
                <td className="table-des">{x++}.</td>
                <td className="table-des">{item.state}</td>
                <td className="table-des-2">{item.district}</td>
                <td className="table-des">{item.market}</td>
                <td className="table-des-2">{item.commodity}</td>
                <td className="table-des">{item.variety}</td>
                <td className="table-des-2">{item.min_price}/ Quantal</td>
                <td className="table-des">{item.max_price}/ Quantal</td>
                <td className="table-des-2">{item.modal_price}/ Quantal</td>
              </tr>
            ))}
          </tbody>
        </table>

        {start <= 0 ? <div className="norenderdata">No Data Found...</div> : null}
        
        {result.length > 20 ? <div className="text-center mb-3">
              <button className="btn btn-outline-success" onClick={LoadMoreData}>Load More</button>
              <button className="btn btn-outline-success mx-4" onClick={LoadLessData}>Load Less</button>
            </div> : null}

        {/* Analysis Image of Mandi Price  */}
        <div className="mandi-Analysis">
            <div>
                <img src={Analysis} alt="Analysis" className="mandi-Analysis-image"/>
            </div>
            <div>
                <div  className="mandi-Analysis-inner">
                    <h1>AgroAcers MSP Price List</h1>
                    <ul>
                      <li>AgroAcers works with idea of वन Nation, वन MSP, वन DBT</li>
                      <li>AgroAcers have more than 3000+ MSP Price List of various Mandi all over India.</li>
                      <li>AgroAcers design a Model to calculate the Profit/Loss on your crop after selling.</li>
                      <li>AgroAcers helps you to deal with Companies and sell crops on the best price.</li>
                      <li>Sell your Crops directly to Mandi and Companies without any middleman.</li>
                      <li>AgroAcers Sofware help your to get the best deal on your Crops.</li>
                    </ul>
                    <a href="#CheckMSPPrice"><button className="btn btn-outline-success mt-4">Check Now</button></a>
                </div>
            </div>
        </div>
        {/* Brands of AgroAcers  */}
        <div className="home_products_sell borderbrands">
            <h1  className="m-4 mb-5">Top Trusted Brands</h1>
          </div>
          {/* Details of Product Brands */}
          <div className="home-products-details container-fluid mb-5" id="UniqueBrandsDetails">
                {ProductsBrands.map( (item) => {
                    return(
                       <div className="TopBrandsMandiPrice" key={item.id}>
                            <img src={item.image} alt="Product" className="MandiBrandsImage" />
                       </div>
                    )
                })}
          </div>
  
        </div>
    )
}

export default MandiRate;
