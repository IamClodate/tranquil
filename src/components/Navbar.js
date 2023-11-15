import React, { useState,   useEffect } from 'react';
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import Button from "./Button";
import { navItems } from "./NavItems.js";

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <Icons.FaPiedPiper />
                PIPER
            </Link>
        </nav>    
    </>
  );
}

export default Navbar;