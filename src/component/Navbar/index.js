import React from 'react';
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavLink, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <img src="file:///C:/Users/Clodate/Downloads/tranquilquest-tours-high-resolution-logo.svg" alt=""/>
                <h1>This will be th</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/tours" activeStyle>
                    Tours
                </NavLink>
                <NavLink to="/blog" activeStyle>
                    Blog
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">
                    Sign In
                </NavBtnLink>
            </NavBtn>
        </Nav>
        
    </>
  )
}

export default Navbar;