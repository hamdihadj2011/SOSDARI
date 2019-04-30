import React from "react";
import {  MDBRow, MDBCol } from "mdbreact";
import firsticon from "../images/icon-rapide.png";
import secondicon from "../images/icon-vente.png";
import thirdicon from "../images/icon-financement.png";
import '../css/FeaturesPage.css'
const FeaturesPage = () => {
  return (
    <section className="text-center" style={{padding: "5%"}}>
    <h2 className="h1-responsive font-weight-bold my-5">
      Why is it so great?
    </h2>
    <p className="lead grey-text w-responsive mx-auto mb-5 ">
    Perhaps you are wondering what makes you use this website. SODARI is presented as a solution for a house or a building owner to
     be served in a quick, relevant and personalized manner by operating an online maintenance service appointments.​
    </p>
    <MDBRow>
      <MDBCol md="4">
      <img className="rounded-circle" alt="secure" src={secondicon} data-holder-rendered="true" />
        <h5 className="font-weight-bold my-4">Secure Service</h5>
        <p className="grey-text mb-md-0 mb-5">
        Our services is assured with the necessary insurance. They are sited under policies and regulation.
        </p>
      </MDBCol>
      <MDBCol md="4">
      <img className="rounded-circle" alt="fast" src={firsticon}  data-holder-rendered="true"/>
       <h5 className="font-weight-bold my-4">Fast Service</h5>
        <p className="grey-text mb-md-0 mb-5">
        Our solution provide you a quick service process in less than 30 minutes.
        </p>
      </MDBCol>
      <MDBCol md="4">
      <img className="rounded-circle" alt="Support" src={thirdicon} data-holder-rendered="true"/>
       <h5 className="font-weight-bold my-4">Support</h5>
        <p className="grey-text mb-md-0 mb-5">
        We provide all the required support to both beneficial side along the service execution.
        </p>
      </MDBCol>
    </MDBRow>
  </section>
  );
}

export default FeaturesPage;