import React, { Component } from 'react';
import FooterUser from './FooterUser.js'
import {Link} from 'react-router-dom';
import '../../css/SOSDARIHeader.css';
import axios from 'axios';
import HeaderUser from './HeaderUser.js';
import { FaPen } from 'react-icons/fa';
class UserProfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
        _id: '-----',
        FirstNameUser: '-----',
        LastNameUser: '-----',
        PasswordUser: '-----',
        EmailUser: '-----',
        ImageUser:'-----',
        AdresseUser: "-----",
        JobUser: "-----",  
        PhoneUser:  "-----"
    
    
    }}
componentWillMount(){
axios.get("/Userprofil/"+this.props.id).then(res=>
    this.setState({
        ...res.data
      }))
 
  }
  deletcontactfunction=()=>{
    axios.delete("/UserprofilDelete/"+this.props.id).then(res=>
        alert("user deleted"))
      
      } 

  render() {
    return (
   <div className="backgroundimg">
   <div>
  
   <HeaderUser _id={this.state._id}/>
       <div className="container emp-profile">
        <div className="jumbotron">
  <h1 className="display-4">Hello! {this.state.FirstNameUser}  {this.state.LastNameUser}</h1>
<hr className="my-4"/>
<form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={this.state.ImageUser} alt=""/>
                            <div className="file btn btn-lg btn-warning">
                                Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                       First Name:  {this.state.FirstNameUser} 
                                    </h5>
                                    <h5>
                                       Last Name: {this.state.LastNameUser}
                                    </h5>

                        </div>
                    </div>
                    <div className="col-md-2" >
                   <div className="profile-edit-btn"><Link to={`/UserProfilUpdate/${this.state._id}`}> <FaPen/>Edit</Link> </div> </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                      
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Job</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.JobUser}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div className="col-md-6">
                                            <p>               
                                            <i> {this.state.AdresseUser}</i> 
                                            </p>
                                            </div>
                                        </div> 
                                      <div className="row">
                                            <div className="col-md-6">
                                                <label>Email Address</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.EmailUser}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.PhoneUser}</p>
                                            </div>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>  
 
</div>

        
        </div> 
      
       <FooterUser/>
      </div>   </div>
    );
  }
}

export default UserProfil ;