import React from 'react';
import './NavBar.css'
import Logo from '../../Assets/NETFLIX.png'

function NavBar() {
  return (
    <div className="navbar">
        <img className="logo" src={Logo} alt="" />
    </div>
  )
}

export default NavBar;
