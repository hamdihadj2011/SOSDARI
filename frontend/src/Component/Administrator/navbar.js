import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";


class NavAdmin extends React.Component {
    state = {
        isOpen: false
      };
    
      toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
    render() { 
        return ( 
            <Navbar dark expand="md" style={{marginBottom: "5px", backgroundColor: "#6b3c26"}}>
          <NavbarBrand>
            <strong className="white-text">SOS DARI</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                
              </NavItem>
              <NavItem>
                
              </NavItem>
              <NavItem>
                
              </NavItem>
              <NavItem>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <Link to='/admin/'>
                    <DropdownItem href="#!"><Fa icon="sign-out" />Logout</DropdownItem>
                    </Link>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
         );
    }
}
 
export default NavAdmin;