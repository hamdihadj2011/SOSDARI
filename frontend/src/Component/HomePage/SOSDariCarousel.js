import React, { Component } from 'react';
import { Animation } from "mdbreact";
import {Link} from 'react-router-dom';
import {MDBBtn} from 'mdbreact';
import '../css/SOSDARIHeader.css';
import '../css/a.scss'
import  imageone from '../images/coverone.jpg';

class SOSDariCarousel extends Component {


  render() {
    return (
<div>
<div className="view">
<img src={imageone} style={{width: "100%"}} alt='' /> 
    <div className="mask no mask carouselsosdari" >
        <h1>
            <Animation type="tada" className="white-text" >  <p>Need a Professional Handyman?</p> </Animation>
            <Animation type="tada" className="white-text">  <p  >Plumber, Electrician, Solder,...</p></Animation>
            <Link to="SignInUp"><MDBBtn  color="deep-orange"> <p className="buttonsevenseven">At your service 24 hours a day, <br/> 7 days a week</p></MDBBtn>
            </Link></h1>
    </div>
</div>
{/* <MDBView hover>
<img src={imageone} style={{width: "100%"}}  /> 
              <MDBMask className="flex-center" overlay="red-light">
                <p className="white-text">Light overlay</p>
              </MDBMask>
            </MDBView>  */}
{/* <div id="box-search">
      <div class="thumbnail"  style={{position: "relative"
    }}>
      <img src={imageone} style={{width: "100%"}}  />  <div class="caption"
        style={{position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate( -40%, -40% )",
         textAlign: "center"  ,
        color: "gold",
        }}
        >
            <Animation type="tada" >  <p>Need a Professional Handyman?</p> </Animation>
            <Animation type="tada" >  <p>Plumber, Electrician, Solder,...</p></Animation>
            <Animation type="heartBeat" slower infinite>  <p >At your service 24 hours a day, 7 days a week</p></Animation>

          </div>
      </div>
  </div> */}
 {/* <Carousel activeItem={1} length={1} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src={imageone} alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </CarouselCaption>
          </CarouselItem>
         
               </CarouselInner>
      </Carousel> */}
     </div>
  
     
    );}

  }



export default SOSDariCarousel;