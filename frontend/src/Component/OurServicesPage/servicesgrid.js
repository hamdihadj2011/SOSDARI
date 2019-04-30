import React, { Component } from 'react';
import {
  MDBMask, MDBView, MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import fone from '../images/carp.jpg'
import ftwo from '../images/9fdab9_0e76057b64a145ba8228ef2b87e28bc8_mv2.jpg'
import fthree from '../images/9fdab9_6bb182d04f467a7dc732aefe8f160127.jpg'
import ffour from '../images/9fdab9_1afa7c74f04249e38c839c415e7f101f_mv2.jpg'
import ffive from '../images/9fdab9_02f66a637c1e4fcdbaf577781d79255b_mv2_d_1920_1285_s_2.jpg'
import fsix from '../images/9fdab9_3a5cf87646624ebfad96b04889576326_mv2_d_1920_1280_s_2.jpg'
import fseven from '../images/9fdab9_dc4600fb74cc413fae260591337259e1.jpg'
import feigth from '../images/9fdab9_b03781e0a1f94db1d9207c25435d5f3e.jpg'
import fnine from '../images/9fdab9_cc007e3854854b1a82c9b722bbc34f46_mv2_d_1920_1280_s_2.jpg'
class Servicesgrid extends Component {
  render() {
    return (
      <div >
 <MDBContainer fluid style={{background: '#eb6201b0', paddingTop: '1%'}}>
        
        <MDBRow>
          <MDBCol md="3" className="mb-3">
          
            <MDBView hover>
              <img
               src={ftwo} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray-text">Install curtain rods</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3" className="mb-3">
          
            <MDBView hover>
              <img
               src={fthree} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3 className="gray">Paint, refurbish</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3" className="mb-3">
            <MDBView hover>
              <img
               src={ffour} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Little DIY</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3" className="mb-3">
            <MDBView hover>
              <img
               src={ffive} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Perform repairs</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3" className="mb-3">
          <MDBView hover>
              <img
               src={feigth} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Valuing a property</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3" className="mb-3">
          <MDBView hover>
              <img
               src={fnine} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Clean your garden</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="3" className="mb-3">
            <MDBView hover>
              <img
               src={fsix} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Mowing the lawn</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="3" className="mb-3">
            <MDBView hover>
              <img
               src={fseven}  className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="yellow-light">
                <h3  className="gray">Detectors Installation</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          
            <MDBView hover>
              <img
               src={fone} className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="white-light">
                <h3  className="gray-text">Carpenter</h3 >
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      
    </MDBContainer> 
   </div>
    );
  }
}

export default Servicesgrid ;