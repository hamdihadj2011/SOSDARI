import React, { Component } from 'react';
import ContactUsForm from './contactUsForm.js'
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter.js';
class ContactUs extends Component {
  render() {
    return (
      <div >
        <SosdariHeader />
       <ContactUsForm/>
        <SosdariFooter />
      </div>
    );
  }
}

export default ContactUs ;