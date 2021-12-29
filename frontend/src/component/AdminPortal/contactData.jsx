import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
      <div className="text-center">
       <h1 className="m-4 text-decoration-underline"  style={{fontSize: '3rem', color: '#77bc3f'}}>Contact Details</h1>
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

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Send Reply</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                      </div>

                    <div className="modal-body">
                        <form action={"mailto:"+item.email} method="post">
                            Name:<br></br>
                            <input type="text"  name="name"/><br></br>
                            E-mail:<br></br>
                            <input type="text"  name="mail"/><br></br>
                            Comment:<br></br>
                            <textarea rows={3} cols={25} type="text" name="comment" size="50"/><br></br>
      
                            <div classname="modal-footer">
                              <button type="button" className="btn btn-secondary m-2" data-dismiss="modal">Close</button>
                              <button type="submit" className="btn btn-primary m-2">Send Reply</button>
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
