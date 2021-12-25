import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import bannerImg from "../../Images/crousal/4.jfif";
import { Link } from "react-router-dom";
import { Country, State, City } from "country-state-city";
import "../../Styles/mandirate.css";
import Loader from "../Loader";
class MandiRate extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      dataslice: 10,
      search : "",
      output:[]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.searchHandle = this.searchHandle.bind(this)
    this.handlevalue = this.handlevalue.bind(this)
  }

  handleClick() {
    // Changing state
    this.setState({ dataslice: this.state.dataslice + 10 });
  }
  handleClick2() {
    // Changing state
    this.setState({ dataslice: this.state.dataslice - 10 });
    if (this.state.dataslice < 20) {
      this.setState({ dataslice: 10 });
    }
  }
  searchHandle(){
     
    var ans =  this.state.items.filter(e=> e.state === this.state.search);
    this.setState({output:ans})
  
  }
  
   handlevalue(j){
     var inputvalue = j.target.value;
     this.setState({search:inputvalue})
   }
  
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("/data")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
  
    const { DataisLoaded, items } = this.state;
    console.log(this.state.search);
     
     
    
    
   
    if (!DataisLoaded) return <Loader />;
 
    return (
      <div className="App">
        <div className="mandi-rate-banner">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid"
                src={bannerImg}
                alt="maindiRate banner"
              />
              <Link to="/blog">
                <div className="carousel-caption d-none d-md-block">
                  <h3>Mandi Rate</h3>
                  <p>
                    The market price is the need of every farmer, the latest
                    mandi Rate will show on the Agro Acers platform
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="filter-container">
          <input list="searchBar" onChange={this.handlevalue} type="text" />
          <datalist id="searchBar">
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </datalist>
          <input type="button" onClick={this.searchHandle} value="search" />
        </div>
        <table>
          <thead>
            <tr className="table-row">
              <th className="table-head">State</th>
              <th className="table-head">District</th>
              <th className="table-head">Market</th>
              <th className="table-head">commodity</th>
              <th className="table-head">Variety</th>
              <th className="table-head">Min price</th>
              <th className="table-head">Max Price</th>
              <th className="table-head">Modal Price</th>
            </tr>
          </thead>

          <tbody>
          
            {this.state.output.slice(0, this.state.dataslice).map((item) => (
           
              <tr className="table-row">
                <td className="table-des">{item.state}</td>
                <td className="table-des-2">{item.district}</td>
                <td className="table-des">{item.market}</td>
                <td className="table-des-2">{item.commodity}</td>
                <td className="table-des">{item.variety}</td>
                <td className="table-des-2">{item.min_price}/Quantal</td>
                <td className="table-des">{item.max_price}/Quantal</td>
                <td className="table-des-2">{item.modal_price}/Quantal</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={this.handleClick}>Load more</button>
        <button onClick={this.handleClick2}>Load less</button>
      </div>
    );
            }
  
}

export default MandiRate;
