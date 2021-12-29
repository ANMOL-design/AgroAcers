import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../Styles/mandirate.css";
import Loader from "../Loader";

class UserData extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      dataslice :10
    };
  
  }
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("/AdminAgroAcers362/UserDetails")
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
      <div className="text-center">
       <h1 className="m-4 text-decoration-underline"  style={{fontSize: '3rem', color: '#77bc3f'}}>User Details</h1>
        <table>
          <thead>
            <tr className="table-row">
              
              <th className="table-head">User Id</th>
              <th className="table-head">Name</th>
              <th className="table-head">Email</th>
              <th className="table-head">Mobile No</th>
              <th className="table-head">Time of register</th>
            </tr>
          </thead>

          <tbody>
             {items.map((item) => (
               
              <tr className="table-row">
                <td className="table-des">{item._id}</td>
                <td className="table-des-2">{item.name}</td>
                <td className="table-des">{item.email}</td>
                <td className="table-des-2">{item.number}</td>
                <td className="table-des">{item.time}</td>
              </tr>
            ))}
  
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserData;
