import React, { Component } from "react";
import '../css/Services.css';
class ServicesList extends Component {
    render() {
      return (
        <div >
         <div className="services-section black-trans-bg">
        <div className="services-section-banner"></div>
        <div className="container">
            <div className="row ">
                <div className="col-md-8 col-md-offset-4 col-sm-12 col-xs-12">
                    <div className="services-head">
                        <h2 className="services-title" style={{color: '#eb6201'}}>Our Services</h2>
                        <span className="services-title-border"></span>
                        <p className="services-text"> SOS DARI  operates an online maintenance service  via its websites.</p>
                    </div>
                    <div className="services-content">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="service-2">
                                    <div className="service-box fistservice">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="servicesB-content">
                                                <h4 style={{color: '#8bc34a'}}>Arrange Appointment</h4>
                                                <p>Members can use the service to arrange or offer a maintenance services related to house such as, 
       electricity,  plumbing system, welding, etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-box secondservice">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="servicesB-content">
                                                <h4 style={{color: '#8bc34a'}}>Users Personalized Services</h4>
                                                <p>It is presented as a solution for a house or a building owner to be served in a quick, relevant and personalized manner.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="service-2">
                                    <div className="service-box thirdservice">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="servicesB-content">
                                                <h4 style={{color: '#8bc34a'}}>Wider Market Place</h4>
                                                <p>It is a solution for workers such as, plumber, electrician, welder, carpenter, etc to get more productive,  to be open to a wider market place.​
</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="service-box fourthservice">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="servicesB-content">
                                                <h4 style={{color: '#8bc34a'}}>Connector</h4>
                                                <p>It play a connector role between the user in need of a service and the worker who provides it.​</p>
                                            </div>
                                        </div>
                                    </div>
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
  
  export default ServicesList;