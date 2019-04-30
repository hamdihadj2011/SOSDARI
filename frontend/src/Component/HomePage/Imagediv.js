import React, { Component } from 'react';
import {  MDBBtn } from 'mdbreact';
import '../css/Imagediv.css'
import s from '../images/five.png'
class Imagediv extends Component {
  render() {
    return (
    <div>  
    <div class="we" style={{backgroundColor: '#8bc34a'}}>
              <div class="we1"><img src={s}  alt=''/></div>
              <div class="we2">
              <h1>At the heart of our work</h1><br/>
             <p> Our ambition is to provide a unique and innovative service while allowing job seekers,
                  even without any qualification, to create a sustainable business by joining us.
                  All our members are real "professional handymen". <br/>
                For all the rest, you will be able to find with our "Handymen Professionals" 
                many economic solutions for all your little worries.</p>
           
               <input
              type="text"
              id="subfield"
              className="form-control"
            />
               <MDBBtn color="warning" type="submit">
               Subscribe
                             </MDBBtn>

              </div></div>
      </div>  
    );
  }
}

export default Imagediv;