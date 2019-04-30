import React, { Component } from 'react';
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter.js';
import SOSDariCarousel from './SOSDariCarousel.js'
import Reviews from './Reviews.js'
import FeaturesPage from './FeaturesPage.js'
import Icongrid from './Icongrid.js'
import Imagediv from './Imagediv.js'
class Home extends Component {
  render() {
    return (
      <div >
        <SosdariHeader />
       <SOSDariCarousel />
        <Reviews/>
       <Imagediv/>
        <Icongrid/>
        <FeaturesPage />
        <SosdariFooter />
     
      </div>
    );
  }
}

export default Home;
