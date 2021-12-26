import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import bannerImg from "../../Images/crousal/4.jfif";
import { Link } from "react-router-dom";
import "../../Styles/mandirate.css";
import Loader from "../Loader";
class ContactPadeData extends React.Component {
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
    fetch("/AdminAgroAcers362/ContactResult")
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
       <h1 style={{textaling:"center",marginLeft:"30%"}}>Contact Details</h1>
        <table>
          <thead>
            <tr className="table-row">
              
              <th className="table-head">User Id</th>
              <th className="table-head">Name</th>
              <th className="table-head">Email</th>
              <th className="table-head">Mobile No</th>
              <th className="table-head">Subject</th>
              <th className="table-head">Query</th>
              <th className="table-head">Time</th>
              <th className="table-head">Send reply</th>
            </tr>
          </thead>

          <tbody>
             {items.map((item) => (
               
              <tr className="table-row">
                <td className="table-des">{item._id}</td>
                <td className="table-des-2">{item.name}</td>
                <td className="table-des">{item.email}</td>
                <td className="table-des-2">{item.phonenumber}</td>
                <td className="table-des-2">{item.subject}</td>
                <td className="table-des-2">{item.query}</td>
                <td className="table-des">{item.time}</td>
                <td className="table-des">
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
   Reply
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Send Reply</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action={"mailto:"+item.email} method="post">
      Name:<br></br>
<input type="text"  name="name"/><br></br>E-mail:<br></br>
<input type="text"  name="mail"/><br></br>
Comment:<br></br>
<textarea rows={3} cols={25} type="text" name="comment" size="50"/><br></br>
      
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Send Reply</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
                </td>
                  
              </tr>
            ))}
  
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactPadeData;
