import React from 'react';
import axios from 'axios';
import '../../css/ReviewList.css';
import UserReviews from './UserReviews.js';
import HeaderUser from './HeaderUser.js';
import FooterUser from './FooterUser.js';
const Tab = ({contacts}) => (
  <div >
     {
         contacts.map(el => <UserReviews Single={el} /> )
     }
    
   </div>
)
class UserReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
      appointemetlist: []
    };
  }
componentWillMount(){
axios.get("/UserReviews/"+this.props.id).then(res=>
this.setState({
  appointemetlist: res.data
  }))

}
  render() {
    return (

      
      <div> 
        <HeaderUser _id={this.props.id}/>
        <div className="reviewstyle">
        <Tab contacts={this.state.appointemetlist} /></div>
        <FooterUser/> 
      </div>
    );
   }
}

export default UserReviewsList;





