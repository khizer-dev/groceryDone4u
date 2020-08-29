import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";
// import SideDrawerButton from '../../side-drawer/SideDrawerButton';
import SideDrawer from '../../side-drawer/SideDrawer';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);



  return (
    <Container>

      <Navbar color="light" light expand="md" className="border-bottom-green">
        <NavbarBrand className="bg-green  all-category mobile-hide  ">
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="bg-green ">
              <i className="fa fa-list-ul pr-4"></i> All Categories{" "}
              <i class="fa fa-angle-down pl-4"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            <div></div>
            <UncontrolledDropdown nav inNavbar className="">
              <DropdownToggle nav caret className="nav-menu-text">
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={'/product'}><DropdownItem> Product Page</DropdownItem></Link> 
                <Link to={'/about'}><DropdownItem> About us</DropdownItem></Link> 
                <Link to={'/contact'}><DropdownItem> Contact us</DropdownItem></Link> 
                <Link to={'/faq'}><DropdownItem> FAQ</DropdownItem></Link> 
                <Link to={'/terms-and-condition'}><DropdownItem> Terms and Conditions</DropdownItem></Link> 
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="nav-menu-text">
                <span class="menu-label mb-5">NEW</span>Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="nav-menu-text">
                <span class="menu-label mb-5">NEW</span> Blog
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div>
            <span class="xs-wish-list">
              <a
                href="#"
                className="xs-single-wishList d-none d-md-none d-lg-block"
              >
                <span className="xs-item-count highlight">0</span>
                <i className="fa fa-heart"></i>
              </a>
            </span>
           
            <span class="xs-wish-list ">
              <a
                href="#"
                className="xs-single-wishList d-none d-md-none d-lg-block"
              >
                <span className="xs-item-count highlight">0</span>
                <i class="fa fa-cart-arrow-down"></i>
                
              </a>
            </span>
            
          </div>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Example;
