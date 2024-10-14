// Navbar.jsx
import React from 'react';
import NavbarBanner from './navbarBanner/navbarBanner';
import NavbarBelt from './navbarBelt/navbarBelt';
import './navbar.css'; 

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarBelt />
        <NavbarBanner/>
    </div>
  );
}

export default Navbar;
