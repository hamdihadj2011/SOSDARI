import React, { Component } from 'react';
import '../css/icongrid.css'
import sone from '../images/imageedit_8_9974690258.png';
import stwo from '../images/imageedit_10_3701417289.png';
import sthree from '../images/imageedit_6_9489796128.png';
import sfour from '../images/imageedit_12_7837493307.png';
import sfive from '../images/imageedit_18_7013219732.png';
import ssix from '../images/imageedit_22_9322309713.png';
import sseven from '../images/imageedit_26_5184942230.png';
import seight from '../images/imageedit_28_6205408014.png';
class Icongrid extends Component {
  render() {
    return (
      <div className="grid-container-one">
 <div  className="text-icon"><img src={sone} className="image-icon" alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>HOUSING DIY</h5></div>
 <div className="text-icon"><img src={stwo} className="image-icon"  alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>CARPENTER</h5></div>
 <div className="text-icon"><img src={sthree} className="image-icon" alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>AGRICULTURAL</h5></div>
 <div className="text-icon"><img src={sfour} className="image-icon" alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>EQUIPMENT</h5></div>
 <div className="text-icon"><img src={sfive} className="image-icon" alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>MOTOCULTURE</h5></div>
 <div className="text-icon"><img src={ssix} className="image-icon" alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>GARDENING</h5></div>
 <div className="text-icon">  <img src={sseven} className="image-icon"  alt=''/><br/><br/><h5 style={{color: '#ce1123'}}>HARDWARE</h5></div>
 <div className="text-icon"> <img src={seight} className="image-icon" alt='' /><br/><br/><h5 style={{color: '#ce1123'}}>TRAILER</h5></div>
   </div>

    );
  }
}

export default Icongrid;
