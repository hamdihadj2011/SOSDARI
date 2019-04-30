import React, { Component } from 'react';
import '../../css/UserInformation.css'
import { FaPen } from 'react-icons/fa';
import FooterWorker from './FooterWorker.js'
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import '../../css/SOSDARIHeader.css';
import  HeaderWorker from './HeaderWorker.js'
class WorkerProfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
        _id: '-----',
        FirstNameWorker: '-----',
        LastNameWorker: '-----',
        JobWorker:'-----',
        AdresseWorker:'-----',
        EmailWorker: '-----',
        PasswordWorker: '-----',
        PhoneWorker:'-----',
        CommitementRating: '-----',
        QualityRating: '-----',
        ImageWorker:'-----'

    }}
componentWillMount(){
axios.get("/Workerprofil/"+this.props.id).then(res=>
    this.setState({
        ...res.data
      }))
 
  }
  deletworkerfunction=()=>{
    axios.delete("/WorkerprofilDelete/"+this.props.id).then(res=>
        alert("worker deleted"))
      
      }
  render() {
    return (
      <div  className="backgroundimg" >
< HeaderWorker _id={this.state._id}/>
<div class="container emp-profile">
        <div class="jumbotron">
  <h1 className="display-4">Hello!  {this.state.FirstNameWorker}  {this.state.LastNameWorker}
  </h1>
<hr className="my-4"/>
<form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={this.state.ImageWorker} alt=""/>
                            <div class="file btn btn-lg btn-warning">
                                Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                       First Name:  {this.state.FirstNameWorker}
                                    </h5>
                                    <h5>
                                       Last Name: {this.state.LastNameWorker}
                                    </h5>
                                    <div>
        <h5 color="warning">Total Commitment Rating</h5>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${this.state.CommitementRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
    <div>
        <h5 color="info">Total Service Quality Rating</h5>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${this.state.QualityRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>

                        </div>
                    </div>
                    <div className="col-md-2" >
                   <div className="profile-edit-btn"><Link to={`/WorkerProfilUpdate/${this.state._id}`}> <FaPen/> Edit </Link> </div> </div>
                
                </div>
                <div class="row">
                    <div class="col-md-4">
                      
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Job</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.JobWorker}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p>               
                                            <i>{this.state.AdresseWorker}</i> 
                                            </p>
                                            </div>
                                        </div> 
                                      <div class="row">
                                            <div class="col-md-6">
                                                <label>Email Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.EmailWorker}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.PhoneWorker}</p>
                                            </div>
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>  
 
</div>
  
        </div>

     
    
     <FooterWorker/>
      </div>
    );
  }
}

export default WorkerProfil;