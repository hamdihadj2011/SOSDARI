import React from 'react';
import axios from 'axios';
import '../../css/Appoinetement.css'
import SingleApp from './SingleApp.js';
import HeaderUser from './HeaderUser.js';
import FooterUser from './FooterUser.js';

const Tab = ({contacts}) => (
  <div >
     {
         contacts.map(el => <SingleApp Single={el} /> )
     }
    
   </div>
)
class Appointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      appointemetlist: []
    };
  }

componentWillMount(){
axios.get("/UserAppointement/"+this.props.id).then(res=>
this.setState({
  appointemetlist: res.data
  }))

}
  render() {
    return (
      <div>
     <HeaderUser _id={this.props.id}/>
     <div className="appoinetemntstyle">
     <Tab contacts={this.state.appointemetlist} /> </div>
     <FooterUser/> 
      </div>
    );
  }
}

export default Appointment;
