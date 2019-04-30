import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import {Link} from 'react-router-dom';
import '../../css/SOSDARIHeader.css';
class HeaderWorker extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return ( 
<Navbar dark expand="md"  style={{
        backgroundColor: "#8bc34a", 
             
  }}>
          <NavbarBrand>
          <Link to="/"> <NavbarBrand> SOS Dari</NavbarBrand></Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3"  navbar> 
          {/* isOpen={this.state.isOpen} */}
            <NavbarNav left>
            <NavItem active>
                <NavLink to="/WorkerProfil" ><Link to={`/WorkerProfil/${this.props._id}`} style={{color: "white"}} >Profil</Link></NavLink>
              </NavItem>
              </NavbarNav>
            <NavbarNav right>
            <NavItem>
            <NavLink to={`/Workernewreclamation/${this.props._id}`} ><Link to={`/Workernewreclamation/${this.props._id}`} style={{color: "white"}} >  WorkerComplaint </Link>  </NavLink>
              </NavItem>
              <NavItem>
              <NavLink  to={`/WorkerAppointement/${this.props._id}`} ><Link to={`/WorkerAppointement/${this.props._id}`} style={{color: "white"}}> WorkerAppointment</Link> </NavLink>
              </NavItem><NavItem>
              <NavLink to={`/WorkerReviews/${this.props._id}`}  > <Link to={`/WorkerReviews/${this.props._id}`} style={{color: "white"}}> WorkerReviewsList </Link> </NavLink>
              </NavItem>
             <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                  <DropdownItem  onClick={this.deletworkerfunction} > Deactivate Account</DropdownItem>
                    <DropdownItem ><Link to="/SignInUp">logout</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
   
    );
  }
}

export default  HeaderWorker;