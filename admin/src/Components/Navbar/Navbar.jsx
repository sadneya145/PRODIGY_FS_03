import React from 'react'
import './Navbar.css'
import navLogo from '../../assets/navlogo.svg'
import profile from '../../assets/profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navLogo} className="nav-logo"alt="" />
      <div className="name">
        SHOPPERS STOP
      </div>
      <img src={profile} className="nav-profile"alt="" />
    </div>
  )
}

export default Navbar
