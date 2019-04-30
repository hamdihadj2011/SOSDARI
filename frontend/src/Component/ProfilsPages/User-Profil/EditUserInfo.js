import React from 'react';
import {  Button} from 'mdbreact';
import axios from 'axios';
import HeaderUser from './HeaderUser.js';
import FooterUser from './FooterUser.js';
import '../../css/form.css';
class EditUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      FirstNameUser: '',
      LastNameUser: '',
      PasswordUser: '',
      EmailUser: '',
      ImageUser:'',
      AdresseUser: '',
      JobUser: '',  
      PhoneUser:  ''
  
    };
  }
  componentWillMount(){
    axios.get("/UserProfilUpdate/"+this.props.id).then(res=>
    this.setState({
      ...res.data
      }))
    
    }
  EmailAddressUserhandelchangeupdate=(event)=>{
    this.setState({ EmailUser:event.target.value})
   }
   PasswordUserhandelchangeupdate=(event)=>{
    this.setState({PasswordUser:event.target.value})
   }
   lnUserhandelchangeupdate=(event)=>{
    this.setState({LastNameUser:event.target.value})
   }
   fnUserhandelchangeupdate=(event)=>{
    this.setState({FirstNameUser:event.target.value})
   }
   jobUserhandelchangeupdate=(event)=>{
    this.setState({JobUser:event.target.value})
   }
   addressUserhandelchangeupdate=(event)=>{
    this.setState({AdresseUser:event.target.value})
   }
   PhoneUserhandelchangeupdate=(event)=>{
    this.setState({PhoneUser:event.target.value})
   }
  
   updateuserinfofunction=()=>{
    axios.put("/UserProfilUpdate/"+this.props.id,{
      
      FirstNameUser: this.state.FirstNameUser,
      LastNameUser: this.state.LastNameUser,
      PasswordUser: this.state.PasswordUser,
      EmailUser: this.state.EmailUser,
      AdresseUser: this.state.AdresseUser,
      JobUser: this.state.JobUser,  
      PhoneUser:  this.state.PhoneUser
     
    }).then(res=>
        alert("New update done"))
      
      }
  render() {
    return (
      <div className="editstyle" > 
      <HeaderUser _id={this.props.id}/>
          <form className="editformstyle" >
          <div className="editformstyleinside">
        <label> First Name</label>  <input id="EmailAddressUser" value={this.state.FirstNameUser} type="text" onChange={this.fnUserhandelchangeupdate} /> 
        <label>Last Name</label>  <input id="PasswordUser" value={this.state.LastNameUser} type="text"onChange={this.lnUserhandelchangeupdate} />
       
       
        <label>Job</label>  <input id="EmailAddressUser" value={this.state.JobUser} type="text" onChange={this.jobUserhandelchangeupdate} /> 
        <label>Address</label>  <input id="PasswordUser" value={this.state.AdresseUser} type="text"onChange={this.addressUserhandelchangeupdate} />
        
        <label>Email Address</label>  <input id="EmailAddressUser" value={this.state.EmailUser} type="text" onChange={this.EmailAddressUserhandelchangeupdate} /> 
        <label>Password </label><input value={this.state.PasswordUser} id="PasswordUser" type="text"onChange={this.PasswordUserhandelchangeupdate} />
        
         <label>Phone</label>  <input value={this.state.PhoneUser} id="PasswordUser" type="text"onChange={this.PhoneUserhandelchangeupdate} />
         <Button color="warning" onClick={this.updateuserinfofunction} >Update</Button> 
         </div>
        </form>
       <FooterUser/>    
      </div>
    );
  }
}

export default EditUserInfo;
