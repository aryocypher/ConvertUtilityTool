import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

const Header=()=> {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' className='bg-custom-nav'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
        <MDBNavbarToggler className='text-white'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 text-white'>
            <MDBNavbarItem className='text-white'>
              <MDBNavbarLink>
              <i class="fa-solid fa-magnifying-glass text-white"></i>
              </MDBNavbarLink>
            </MDBNavbarItem> 
        
            <MDBNavbarItem className='text-white'>
              <MDBNavbarLink  className='text-white' aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' className='text-white'>About</MDBNavbarLink>
            </MDBNavbarItem>
             <MDBNavbarItem>
              <MDBNavbarLink className='text-white' href='#'>Report Issue/Suggest Utility</MDBNavbarLink>
            </MDBNavbarItem>
            

          </MDBNavbarNav>

          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
    
export default Header
