import React from 'react'

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
        </Nav>
        
    </>
  )
}

export default Navbar;