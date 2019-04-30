import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './HomePage/Home.js';
import AboutUs from './AboutUsPage/AboutUs.js';
import OurServices from './OurServicesPage/OurServices.js';
import ContactUs from './ContactUsPage/ContactUs.js';
import SignInUp from  './SignUp-InPage/Sign.js';
import UserProfil from  './ProfilsPages/User-Profil/Userprofil.js';
import WorkerProfil from  './ProfilsPages/Worker-Profil/Workerprofil.js';
import Search from  './SearchPage/Search';
import Admin from './Administrator/admin'
import TabAdmin from './Administrator/TabAdmin'
import DeleteUser from './Administrator/deleteuser'
import DeleteWorker from './Administrator/deletworker'
import EditUserInfo from './ProfilsPages/User-Profil/EditUserInfo.js';
import EditWorkerInfo from './ProfilsPages/Worker-Profil/EditWorkerInfo.js';
import Complaint from './ProfilsPages/User-Profil/Complaint.js';
import Appointement from './ProfilsPages/User-Profil/Appointment.js';
import WorkerAppointement from './ProfilsPages/Worker-Profil/WorkerAppointment.js';
import WorkerComplaint from './ProfilsPages/Worker-Profil/WorkerComplaint.js'
import UserReviewsList from './ProfilsPages/User-Profil/UserReviewsList.js'
import WorkerReviewsList from './ProfilsPages/Worker-Profil/WorkerReviewsList.js'
const Homepage = () => (
    <Home />
  )
  const AboutUspage = () => (
    <AboutUs />
  )
  const OurServicespage = () => (
    <OurServices />
  ) 
  const ContactUspage = () => (
    <ContactUs />
  ) 
 
  const UserProfilpage = () => (
    <UserProfil />
  ) 
  const WorkerProfilpage = () => (
    <WorkerProfil />
  ) 
  
  const Adminpage =()=>(
    <Admin/>
  )
  const TabAdminpage =()=>(
    <TabAdmin />
  )
class SOSDariRouter extends Component {

  render() {
    return (
      <div >
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/admin' component={Adminpage} />
          <Route exact path='/admin/index' component={TabAdminpage} />
          <Route exact path="/Home" component={Homepage} />
          <Route exact path="/AboutUs" component={AboutUspage} />
          <Route exact path="/Services" component={OurServicespage } />
          <Route exact path="/ContactUs" component={ContactUspage} />
          <Route exact path="/UserProfil/Search/:id" render={(props)=> <Search   id={props.match.params.id} />} />
          <Route exact path="/UserProfil"  component={UserProfilpage} />
          <Route exact path="/WorkerProfil"  component={WorkerProfilpage} />
          <Route exact path="/SignInUp" component={SignInUp}  /> 
          <Route path="/delete_user/:id" render={(props)=> <DeleteUser  id={props.match.params.id} />} />
        <Route path="/delete_worker/:id" render={(props)=> <DeleteWorker  id={props.match.params.id} />} />
        <Route exact path="/WorkerProfil/:id" render={(props)=> <WorkerProfil   id={props.match.params.id} />} />  
          <Route  exact path="/WorkerProfilUpdate/:id" render={(props)=> <EditWorkerInfo   id={props.match.params.id} />} /> 
          <Route  exact path="/WorkerAppointement/:id" render={(props)=> <WorkerAppointement   id={props.match.params.id} />} /> 
          <Route exact path="/Workernewreclamation/:id" render={(props)=> <WorkerComplaint  id={props.match.params.id} />} /> 
          <Route exact path="/SignInUp" component={SignInUp}  /> 
          <Route exact path="/UserProfil/:id" render={(props)=> <UserProfil   id={props.match.params.id} />} />  
          <Route exact path="/UserProfilUpdate/:id" render={(props)=> <EditUserInfo   id={props.match.params.id} />} /> 
          <Route exact path="/newreclamation/:id" render={(props)=> <Complaint  id={props.match.params.id} />} /> 
          <Route exact path="/UserAppointement/:id" render={(props)=> <Appointement   id={props.match.params.id} />} /> 
          <Route exact path="/UserReviews/:id" render={(props)=> <UserReviewsList   id={props.match.params.id} />} /> 
          
          <Route exact path="/WorkerReviews/:id" render={(props)=> <WorkerReviewsList   id={props.match.params.id} />} /> 
          <Route exact path="/newappoinetement/:id" render={(props)=> <WorkerAppointement   id={props.match.params.id} />} /> 
          
          <Redirect to='/' />
          </Switch>
         
           </div>
    );
  }
}

export default SOSDariRouter;