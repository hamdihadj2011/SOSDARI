import React, { Component } from 'react';
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter.js';
import ServicesList from './ServicesList.js'
import Servicesgrid from './servicesgrid.js'
class OurServices extends Component {
  render() {
    return (
      <div >
      <SosdariHeader />
      <ServicesList/>
      <Servicesgrid/>
      <SosdariFooter />
      </div>
    );
  }
}

export default OurServices ;