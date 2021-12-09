import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import bannerImg from "../../Images/crousal/4.jfif";
import { Link } from "react-router-dom";
import "../../Styles/mandirate.css";
import Loader from "../Loader";
class MandiRate extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      dataslice :10
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
  }
  handleClick(){
    
    // Changing state
    this.setState({dataslice:this.state.dataslice+10})
  }
  handleClick2(){
    
    // Changing state
    this.setState({dataslice:this.state.dataslice-10})
    if(this.state.dataslice<20){
      this.setState({dataslice:10})
    }
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
    if (!DataisLoaded)
      return (
       
         <Loader />

        
      );

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
             {items.slice(0, this.state.dataslice).map((item) => (
               
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
