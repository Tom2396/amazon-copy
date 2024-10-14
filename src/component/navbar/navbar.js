import React from 'react'
import NavbarBanner from './navbarBanner/navbarBanner'
import NavbarBelt from './navbarBelt/navbarBelt'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarBelt/>
        <NavbarBanner/>
    </div>
    
  )
}

export default Navbar