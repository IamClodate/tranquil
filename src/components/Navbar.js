import React, { useState,   useEffect } from "react";
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
                Tranquil
            </Link>
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
            <Button />
        </nav>    
    </>
  );
}

export default Navbar;