import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import axios from 'axios';
class MakeAppointement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      _id: '',
     WorkerID: '',
     UserID: "",
     Date: '',
     Time:"",
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  datehandelchangeupdate=(event)=>{
    this.setState({Date:event.target.value})
   }
   timehandelchangeupdate=(event)=>{
    this.setState({Time:event.target.value})
   }
  addappointementfunction=()=>{
    axios.post("/newappoinetement/"+this.props.id,{
      _id: Math.random().toString(36).substr(2, 8),
      WorkerID: this.props.WorkerID,
      UserID: this.props.UserID,
      Date: this.state.Date,
      Time:this.state.Time,
     
     
        }).then(res=>
        alert("New appointement added"))
      
      }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle} color="primary"> Make Appointment </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Appointment form </ModalHeader>
          <ModalBody>
          <form className="editformstyle" >
          <div className="editformstyleinside">
        <label>Date</label>  
        <input type="date"  id="start" name="trip-start"
            
            min="2019-01-01" onChange={this.datehandelchangeupdate}></input>
        {/* <input id="EmailAddressUser" type="text" onChange={this.fnUserhandelchangeupdate} />  */}
        <label>Time</label>  
        <input type="time" id="appt" name="appt"
       min="9:00" max="16:00"  onChange={this.timehandelchangeupdate} required></input>
        {/* <input id="PasswordUser" type="text"onChange={this.lnUserhandelchangeupdate} /> */}
         </div>
        </form>
         </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.addappointementfunction} >Add</Button>
           
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default MakeAppointement;
