import React, { useState,   useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import Button from "./Button";
import { navItems } from "./NavItems.js";

function Navbar() {
   const [mobile, setMobile] = useState(false);
   const [sidebar, setSidebar] = useState(false)
    
   useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth < 1065) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    window.addEventListener("resize",handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
   }, []);


  return (
    <>
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <Icons.FaPiedPiper />
                Tranquil
            </Link>
            {!mobile &&(
                <ul className="nav-items">
                {navItems.map(item => {
                    return (
                    <li key={item.id} className={item.nName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            )}
            {!mobile && <Button />}

            {/* add the menu-icon on a smaleer screen,  */}
            {mobile && (
                <div className="sidebar-toggle">
                    {sidebar ? (
                        <Icons.FaTimes className="sidebar-toggle-logo"
                        onClick={() => setSidebar(!sidebar)} />
                    ) : (
                        <Icons.FaBars className="sidebar-toggle-logo" onClick={() => setSidebar(!sidebar)}/>
                    )}
                    </div>
                    )}
                </div>
            )}
        </nav>    
    </>
  );
}

export default Navbar;