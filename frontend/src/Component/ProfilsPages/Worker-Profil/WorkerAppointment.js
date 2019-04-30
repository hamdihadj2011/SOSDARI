import React from 'react';
import axios from 'axios';
import '../../css/Appoinetement.css'
import WorkerSingleApp from './WorkerSingleApp'
import HeaderWorker from './HeaderWorker';
import FooterWorker from './FooterWorker';
const Tab = ({contacts}) => (
  <div >
     {
         contacts.map(el => <WorkerSingleApp Single={el} /> )
     }
   
   </div>
)
class WorkerAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      appointemetlist: []
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

componentWillMount(){
axios.get("/WorkerAppointement/"+this.props.id).then(res=>
this.setState({
  appointemetlist: res.data
  }))

}
  render() {
    return (
       <div>
     <HeaderWorker _id={this.props.id}/>
     <div className="appoinetemntstyle">
          <Tab contacts={this.state.appointemetlist} />
       </div>
     <FooterWorker/> 
      </div>
    );
  }
}

export default WorkerAppointment;
