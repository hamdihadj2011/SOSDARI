import React from 'react';
import {  Button} from 'mdbreact';
import axios from 'axios';
import HeaderWorker from './HeaderWorker';
import FooterWorker from './FooterWorker';
class EditWorkerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      _id: '',
      FirstNameWorker: '',
      LastNameWorker: '',
      JobWorker:'',
      AdresseWorker:'',
      EmailWorker: '',
      PasswordWorker: '',
      PhoneWorker:''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillMount(){
    axios.get("/WorkerProfilUpdate/"+this.props.id).then(res=>
    this.setState({
      ...res.data
      }))
    
    }
  EmailAddressWorkerhandelchangeupdate=(event)=>{
    this.setState({EmailWorker:event.target.value})
   }
   PasswordWorkerhandelchangeupdate=(event)=>{
    this.setState({PasswordWorker:event.target.value})
   }
   lnWorkerhandelchangeupdate=(event)=>{
    this.setState({LastNameWorker:event.target.value})
   }
   fnWorkerhandelchangeupdate=(event)=>{
    this.setState({FirstNameWorker:event.target.value})
   }
   jobWorkerhandelchangeupdate=(event)=>{
    this.setState({JobWorker:event.target.value})
   }
   addressWorkerhandelchangeupdate=(event)=>{
    this.setState({AdresseWorker:event.target.value})
   }
   PhoneWorkerhandelchangeupdate=(event)=>{
    this.setState({PhoneWorker:event.target.value})
   }
  
   updateuserinfofunction=()=>{
    axios.put("/WorkerProfilUpdate/"+this.props.id,{
      FirstNameWorker: this.state.FirstNameWorker,
      LastNameWorker: this.state.LastNameWorker,
      JobWorker:this.state.JobWorker,
      AdresseWorker:this.state.AdresseWorker,
      EmailWorker: this.state.EmailWorker,
      PasswordWorker: this.state.PasswordWorker,
      PhoneWorker:this.state.PhoneWorker
    }).then(res=>
        alert("New worker update added"))
      
      }
  render() {
    return (
      <div className="editstyle" > 
      <HeaderWorker _id={this.props.id}/>
          <form className="editformstyle" >
          <div className="editformstyleinside">
      <label> First_Name</label>  <input id="EmailAddressUser" value={this.state.FirstNameWorker} type="text" onChange={this.fnWorkerhandelchangeupdate} /> 
      <label>Last_Name</label>  <input id="PasswordUser" value={this.state.LastNameWorker} type="text"onChange={this.lnWorkerhandelchangeupdate} />
      <label>Job</label>  <input id="EmailAddressUser" type="text" value={this.state.JobWorker} onChange={this.jobWorkerhandelchangeupdate} /> 
      <label>Address</label>  <input id="PasswordUser" value={this.state.AdresseWorker}  type="text"onChange={this.addressWorkerhandelchangeupdate} />
      <label>Email Address</label>  <input id="EmailAddressUser" value={this.state.EmailWorker} type="text" onChange={this.EmailAddressWorkerhandelchangeupdate} /> 
      <label>Password </label><input id="PasswordUser" type="text" value={this.state.PasswordWorker} onChange={this.PasswordWorkerhandelchangeupdate} />
      <label>Phone</label>  <input id="PasswordUser" value={this.state.PhoneWorker} type="text"onChange={this.PhoneWorkerhandelchangeupdate} />
        
       <Button color="warning" onClick={this.updateuserinfofunction}  >Update</Button> 
         </div>
        </form>
       <FooterWorker/>    
      </div>
    );
  }
}

export default EditWorkerInfo;
