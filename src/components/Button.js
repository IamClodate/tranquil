import React from 'react'
import {Link} from "react-router-dom"

function Button() {
  return (
    <>
    <Link to="signup">
      <button className="btn">
        <Icon.FaUserPlus/>
        <span>Sign Up</span>
      </button>
    </Link>
    </>
  );
}

export default Button;