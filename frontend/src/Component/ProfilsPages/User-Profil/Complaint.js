import React from 'react';
import { Button } from 'mdbreact';
import axios from 'axios';
import '../../css/Complaint.css'
import HeaderUser from './HeaderUser.js';
import FooterUser from './FooterUser.js';
class Complaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal: false,
      _id: '',
      SenderID: '',
     Content: '',
     State: 'unread',
    };
  }
//UserID
  // toggle = () => {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }
  
  Contenthandelchangeupdate=(event)=>{
    this.setState({Content:event.target.value})
   }
 
   addcompfunction=()=>{
    axios.post("/newreclamation/"+this.props.id,{
      _id: Math.random().toString(36).substr(2, 8),
      SenderID: this.props.id,
     Content: this.state.Content,
     State: 'unread',
        }).then(res=>
        alert("New reclamation added"))
      
      }
      

  render() {
    return (
  
      <div>
         <HeaderUser _id={this.props.id}/>
         <div className="complaintform">
        
      <form  className="complaintformstyle">
      <h1>Reclamation Form</h1>
       <label>Message</label> 
        <textarea  style={{width: "90%",height: "150px"}} id="PasswordUser" type="text" onChange={this.Contenthandelchangeupdate} />
        <Button  style={{width: "90%"}}  color="primary" onClick={this.addcompfunction} >Send</Button>
        </form> </div>
        <FooterUser/>  
      </div>
    );
  }
}

export default Complaint;
