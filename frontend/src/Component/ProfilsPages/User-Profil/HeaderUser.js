import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import {Link} from 'react-router-dom';
import '../../css/SOSDARIHeader.css';
import axios from 'axios';
class HeaderUser extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  deletcontactfunction=()=>{
    axios.delete("/UserprofilDelete/"+this.props._id).then(res=>
        alert("user deleted"))
      
      }
  render() {
    return (
 <div>

<Navbar dark expand="md"  style={{
        backgroundColor: "#5bc0de", 
             
  }}>
          <NavbarBrand>
          <Link to="/"> <NavbarBrand> SOS Dari</NavbarBrand></Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
            <NavItem active>
                <NavLink to="/UserProfil" ><Link to={`/UserProfil/${this.props._id}`}  style={{color: "white"}} >Profil</Link></NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/UserProfil/Search" ><Link to={`/UserProfil/Search/${this.props._id}`} style={{color: "white"}} >Search</Link></NavLink>
              </NavItem>
             
            </NavbarNav>
            <NavbarNav right>
            <NavItem>
            <NavLink to="/newreclamation" > <Link to={`/newreclamation/${this.props._id}`} style={{color: "white"}}> Complaint</Link> </NavLink>
              </NavItem>
              <NavItem>
              <NavLink to={`/UserAppointement/${this.props._id}`} > <Link to={`/UserAppointement/${this.props._id}`} style={{color: "white"}}> Appointment </Link> </NavLink>
              </NavItem>
              <NavItem>
              <NavLink to={`/UserReviews/${this.props._id}`} > <Link to={`/UserReviews/${this.props._id}`} style={{color: "white"}}> User Reviews List</Link>  </NavLink>
              </NavItem>
             <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                  <DropdownItem  onClick={this.deletcontactfunction} > Deactivate Account</DropdownItem>
                    <DropdownItem ><Link to="/SignInUp">logout</Link></DropdownItem>
                   
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    
 </div>
    );
  }
}

export default HeaderUser;

