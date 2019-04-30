import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    MDBMask, MDBView
  } from "mdbreact";
  import '../css/SOSDARIHeader.css'
import  imageone from '../images/i1.jpg'
import  imagetwo from '../images/i2.jpg'
class Aboutusgrid extends Component {
  render() {
    return (
      <div id="twolinksgrid" >
    <MDBView >
    <img src={imageone} style={{width: "50%"}}  /> 
              <MDBMask className="flex-center" overlay="green-light" style={{width: "50%"}} >
              <Link to="Services" className="white-text">Our Services</Link>
              </MDBMask>
            </MDBView> 
            <MDBView >
            <img src={imagetwo} style={{width: "50%"}}  /> 
              <MDBMask className="flex-center" overlay="red-light" style={{width: "50%"}} >
              <Link to="Services" className="white-text">Terms and Policies</Link>
              </MDBMask>
            </MDBView>  
                <hr/>   
</div>
    
    );
  }
}

export default Aboutusgrid;