import React, { Component } from 'react';
import '../css/SOSDARIHeader.css'
import { MDBIcon } from "mdbreact";
class MoreInfo extends Component {
  render() {
    return (
      <div>
     <div class="aboutus-secktion paddingTB60" style={{backgroundColor: '#fdb801', padding: '10%'}}>
    <div class="container">
        <div class="row">
                	<div class="col-md-6" >
                    	<h1 class="strong">Who we are and<br/>what we do</h1>
                        <p class="lead">This is the world's leading portal for<br/>easy and quick </p>
                    </div>
                    <div class="col-md-6">
                    	<p> It is presented as a solution for a house or a building owner to be served in a quick, relevant and personalized manner.​

It is a solution for workers such as, plumber, electrician, welder, carpenter, etc to get more productive,  to be open to a wider market place.​

It play a connector role between the user in need of a service and the worker who provides it.​
</p>
                    </div>
</div>
    </div>
    <main class="main" style={{ paddingTop: '5%'}}>
    <article class="box">
    <div class="shape-container">
             <div class="shape originBottomLeft originTopRight">
    <div  style={{background: '#ce1123', textAlign: "center", borderRadius: '25px', padding: '10px'}}>
    <MDBIcon
                  icon="check"
                  size="4x"
                  className="white-text"
                />
                <h5 className="font-weight-bold mb-3 white-text">933</h5>
                <p className="white-text">
                  Verified workers
                </p> </div> </div> </div> 
    </article>
    <article class="box" >
    <div class="shape-container">
             <div class="shape originBottomLeft originTopRight">
    <div  style={{background: '#8bc34a', textAlign: "center", borderRadius: '25px', padding: '10px'}}>
    <MDBIcon icon="users" size="4x" className="white-text" />
              <h5 className="font-weight-bold mb-3 white-text">3</h5>
                <p className="white-text">
                  Teams
                </p> </div> </div> </div> 
    </article>
    <article class="box">
    <div class="shape-container">
             <div class="shape originBottomLeft originTopRight">
    <div  style={{background: '#ff7043', textAlign: "center", borderRadius: '25px', padding: '10px'}}>
    <MDBIcon icon="user-circle" size="4x" className="white-text" />
              <h5 className="font-weight-bold mb-3 white-text">2000</h5>
                <p className="white-text">
                  User
                </p></div> </div> </div> 
    </article>
    <article class="box" >
    <div class="shape-container">
             <div class="shape originBottomLeft originTopRight">
    <div  style={{background: '#eb6201', textAlign: "center", borderRadius: '25px', padding: '10px'}}>
    <MDBIcon icon="certificate" size="4x" className="white-text" />
                <h5 className="font-weight-bold mb-3 white-text">30</h5>
                <p className="white-text">
                Assurance
                </p></div> </div> </div> 
    </article>
  </main>
</div>

       </div> 
    );
  }
}

export default MoreInfo;