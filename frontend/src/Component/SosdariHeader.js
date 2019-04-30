import React, { Component } from 'react';
import './css/SOSDARIHeader.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom';
import { MDBTooltip } from 'mdbreact';
import logoimg from './images/SOSDARI_log_transparent.png'; 
const theButtons = [
    {
      value: 'About us',
      to:'AboutUs',
     },
     {
     value: 'Our Services',
     to:'Services',
     },
     {
     value: 'Contact Us',
     to:'ContactUs',
     },
  ]
 
let Button = (props) => 
<NavLink><Link to={props.button.to} style={{textDecoration: 'none', color:"black"}} >{props.button.value}</Link></NavLink>


const Buttons = (props) =>

            props.buttonsList.map((currentButton, i) =>
            <NavItem key={i}>
              <Button button={currentButton} />
              </NavItem>
            )
class SosdariHeader extends Component {
constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
    collapsed: true
    };
}

toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed
    });
}

closeNavbar() {
    if (this.state.collapsed !== true) {
    this.toggleNavbar();
    }
}
  render() {
    return (
   
      <div>
        <Navbar className="Navbar-pers" color="faded" light expand="md">
        <MDBTooltip
        placement="bottom"
        tag="div"
        tooltipContent="Go to Home" color="faded" light>
       <Link to="/"> <NavbarBrand> <img alt='' id="logo-header-image" src={logoimg} /></NavbarBrand></Link>
        </MDBTooltip> 
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          
            <Nav className="ml-auto" navbar>
            <Buttons buttonsList={theButtons} />
             </Nav>
          </Collapse>
          <Link  to="SignInUp" ><MDBBtn color="light-green">Sign up/Sign In</MDBBtn> </Link>
        </Navbar>
      </div>
    );
  }     
                
 
}

export default SosdariHeader;
