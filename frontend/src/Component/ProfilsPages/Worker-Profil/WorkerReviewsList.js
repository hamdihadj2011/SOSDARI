import React from 'react';
import axios from 'axios';
import '../../css/ReviewList.css'
import WorkerReviews from './WorkerReviews.js';
import HeaderWorker from './HeaderWorker';
import FooterWorker from './FooterWorker';
const Tab = ({contacts}) => (
  <div >
     {
         contacts.map(el => <WorkerReviews Single={el} /> )
     }
    
   </div>
)
class WorkerReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      alist: []
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

componentWillMount(){
axios.get("/WorkerReviews/"+this.props.id).then(res=>
this.setState({
  alist: res.data
  }))

}
  render() {
    return (
      <div> 
      <HeaderWorker _id={this.props.id}/>
      <div className="reviewstyle">
      <Tab contacts={this.state.alist} /> /></div>
      <FooterWorker/> 
    </div>
    );
  }
}

export default WorkerReviewsList;
