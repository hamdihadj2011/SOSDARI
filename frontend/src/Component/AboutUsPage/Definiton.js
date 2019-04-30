import React, { Component } from 'react';
import '../css/SOSDARIHeader.css'
import {Link} from 'react-router-dom';
class Definiton extends Component {
  render() {
    return (
  <div>
<div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text"> SOS DARI  operates an online maintenance  service  via its websites and mobile app interfaces.
       Members can use the service to arrange or offer a maintenance services related to house such as, 
       electricity,  plumbing system, welding, etc.

       It does not correspond to a real maintenance company. It only receives commissions from every appointment.​

     </p>
                        <Link to="Services" class="aboutus-more" >read more</Link >
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Our philosophy can be simply stated: we work with our clients to assist them in achieving their commercial objectives. </p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>We provides reliable and quality value added services to enable you to focus on your core aspects</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>Our primary goal as an service support provider is to ensure the best quality support while building a strong relationship with our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    );
  }
}

export default Definiton ;