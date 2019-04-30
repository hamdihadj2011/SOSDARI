import React, { Component } from 'react';
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter.js';
import Definiton from './Definiton.js'
import AboutUsTitle from './AboutUsTitle.js'
import MoreInfo from './MoreInfo.js'
import OurTeam from './OurTeam.js'
class AboutUs extends Component {
  render() {
    return (
      <div>
     <SosdariHeader />
     <AboutUsTitle/>
       <Definiton/>
       <MoreInfo/>
       <OurTeam/>
      <SosdariFooter />
       </div>
    );
  }
}

export default AboutUs;