import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import {Link} from 'react-router-dom';
import { FaHome, FaEnvelope, FaPhone, FaFax } from 'react-icons/fa';
class SosdariFooter extends React.Component {
render() {
return (
<div>
<div style={{
               backgroundColor: "burlywood", 
               height: "40px",
               marginBottom: "-3%"
              
         }}>
                  </div> 
<Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">

                <Container className="text-left">
                    <Row>
                        <Col md="5">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold ">SOSDari</h5>
                            <p>
                            SOS DARI  operates an online maintenance  service  via its websites and mobile app interfaces. Members can use the service to arrange or offer
                             a maintenance services related to house.  <br/> 
                We are continually researching new secure, rapide and personalized solutions
                 for our users to provide the best experience . <br/> 
                 By working with multiple partnars, we are able to quickly 
                 deliver professional variation of services to you us a worker or a user!</p>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-warning">USEFUL LINKS</h5>
                            <ul className="list-unstyled">
                                <li><Link  to="Home" >Home</Link></li>
                                <li><Link  to="AboutUs" >About us</Link></li>
                                <li><Link  to="Services" >Our Services</Link></li>
                                <li><Link  to="ContactUs" >Contact Us</Link></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-warning">Be with us</h5>
                            <ul className="list-unstyled">
                                <li><Link  to="Home" >Become a partner</Link></li>
                                <li><Link  to="Home" >Our Interventions</Link></li>
                                <li><Link  to="Home" >Administration</Link></li>
                                <li><Link  to="Home" >Help</Link></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-warning">Contact</h5>
                            <ul className="list-unstyled">
                                <li><FaHome style={{ color: "white"}} /> Sousse, SO 10012, TN</li>
                                <li><FaEnvelope style={{ color: "white"}} /> SOSDARI.info@gmail.com</li>
                                <li><FaPhone style={{ color: "white"}} /> + 216 51 759 477</li>
                                <li><FaFax style={{ color: "white"}} /> + 216 718 60 692</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"><Link  to="SignInUp" className="btn btn-warning btn-rounded">Sign up!</Link></li>
                    </ul>
                </div>
                    
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <Link to="Home" > SOS DARI </Link>
                    </Container>
                </div>
            </Footer>
    </div>);
}
}

export default SosdariFooter;