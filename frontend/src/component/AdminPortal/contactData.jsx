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
      dataslice :10,
      name:"",
      mail:"",
      subject:"",
      body:"" 
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
    let name,value;
     const handleInput = async (e)=>{
      name = e.target.name;
      value = e.target.value;
      this.setState({[name]:value})
      console.log(this.state);
     }
     const postData =async (e)=>{
      e.preventDefault();
      const {name,mail,subject,body} = this.state;
      const res =  await fetch("/sendReply" ,{
      method : "POST",
      headers : { 
          "content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,mail,subject,body
      })
    });
    const data = await res.json();
    if(res.status === 201){
        window.alert("Your mail is succesfully sent.");
    }
    else {
      window.alert("Error occured , try again")
    }
  
  }
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
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target={"#"+item._id}>
                   Reply
                </button>

              <div className="modal fade" id={item._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Send Reply</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                      </div>

                    <div className="modal-body">
                        <form  method="post">
                            Name:<br></br>
                            <input type="text" onChange={handleInput} value={this.state.name} list={item.phonenumber}   name="name"/><br></br>
                               <datalist id={item.phonenumber}>
                                 <option value={item.name}>{item.name}</option>
                               </datalist>
                            E-mail:<br></br>
                            <input type="text" onChange={handleInput} list={item.email} value={this.state.mail}  name="mail"/><br></br>
                             <datalist id={item.email}>
                                <option value={item.email}>{item.email}</option>
                             </datalist>
                           Subject:<br></br>
                            <input type="text" onChange={handleInput} list={item.subject}  value={this.state.subject}   name="subject"/><br></br>
                            <datalist id={item.subject}>
                                <option value={item.subject}>{item.subject}</option>
                             </datalist>
                           Body:<br></br>
                            <textarea rows={3} onChange={handleInput}  value={this.state.body}  cols={25} type="text" name="body" size="50"/><br></br>
      
                            <div classname="modal-footer">
                              <button type="button" className="btn btn-secondary m-2" data-dismiss="modal">Close</button>
                              <button type="submit" className="btn btn-primary m-2" onClick={postData} >Send Reply</button>
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
