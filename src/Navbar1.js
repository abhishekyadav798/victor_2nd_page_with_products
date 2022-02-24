import React,{useState} from 'react'
import {Nav,NavItem,NavLink,NavbarBrand,NavbarToggler,
  Collapse,UncontrolledDropdown,DropdownToggle,DropdownMenu,
  DropdownItem,Navbar,Form,Button, FormGroup} from 'reactstrap';
import './Navbar1.css'


function Navbar1() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

     


  return (
    <div>
         <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">Victor</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav  navbar>
              <NavItem>
                <NavLink  href="/components/">MEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">WOMEN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">KIDS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">SPORTS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">BRANDS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">COLLECTION</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">OUTLET</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret size="sm">
                  Options
                </DropdownToggle>
                <DropdownMenu group right >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            {/* <Form inline
           
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2">
            
            
          </Form> */}
            </Nav>
          </Collapse>
        </Navbar>

    </div>
  )
}

export default Navbar1