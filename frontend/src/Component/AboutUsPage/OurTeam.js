import React, { Component } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import H from '../images/H.jpg'
import Hh from '../images/hhh.jpg'
import Hhh from '../images/yyy.jpg'
class OurTeam extends Component {
  render() {
    return (
<div className="team-section text-center my-5" style={{paddingLeft: '2%', paddingRight: '2%',paddingBottom: '2%'}}>

<h2 className="h1-responsive font-weight-bold my-5">Meet the team</h2>
 
  <p className="grey-text w-responsive mx-auto mb-5">We are very proud of our dedicated, loyal, and 
  hard-working staff. We think of ourselves as a family, and many on our staff have built workplace 
  friendships that continue after hours. Working together as a team helps us to provide a steady, 
  dependable service.</p>
  <div className="row">

    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src={Hh}  className="rounded-circle"  style={{width: '45%', height: '45%'}}
          alt="Sample avatar"/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Hamdi Hadj Khlifa </h5>
      <p className="text-uppercase blue-text"><strong>Developer</strong></p>
      <p className="grey-text">Electrical Engineer</p>
      <p className="grey-text">National School of Engineering of Monastir</p>
      <ul className="list-unstyled mb-0">
     
        <a className="p-2 fa-lg fb-ic" href="https://facebook.com">
        <FaFacebook style={{ color: "blue"}} />
    
        </a>
       
        <a className="p-2 fa-lg tw-ic" href="https://github.com/hamdihadj2011">
        <FaGithub />
        </a>
      </ul>
    </div>
    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src={H} className="rounded-circle"
          alt="Sample avatar" style={{width: '40%', height: '40%'}}/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Hanen Fourati</h5>
      <p className="text-uppercase blue-text"><strong>Developer</strong></p>
      <p className="grey-text">Master of Sciences in Enterprise System Engineering</p>
      <p className="grey-text">Higher Institute of Computer and Multimedia of Sfax</p>
      <ul className="list-unstyled mb-0">
     
        <a className="p-2 fa-lg fb-ic" href="https://www.facebook.com/fstronge">
        <FaFacebook style={{ color: "blue"}} />
    
        </a>
       
        <a className="p-2 fa-lg tw-ic" href="https://github.com/HanenFourati">
        <FaGithub  style={{ color: "black"}}/>
        </a>
      </ul>
    </div>
    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src={Hhh}  className="rounded-circle z-depth-1"
          style={{width: '43%', height: '43%'}} alt="Sample avatar"/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3"> Youssef Chehata </h5>
      <p className="text-uppercase blue-text"><strong>Developer</strong></p>
      <p className="grey-text">Applied License of Business Administration</p>
      <p className="grey-text">Higher Institute of Technological Studies of Sousse</p>
      <ul className="list-unstyled mb-0">
     
        <a className="p-2 fa-lg fb-ic" href='http://facebook.com'>
        <FaFacebook style={{ color: "blue"}} />
    
        </a>
       
        <a className="p-2 fa-lg tw-ic" href='http://github.com'>
        <FaGithub />
        </a>
      </ul>
    </div>
      </div> </div>
    );
  }
}

export default OurTeam;