import React from 'react'
import'./Footer.css'
import logo from '../Assets/logo.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintrest_icon from '../Assets/pintrest_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-log">
        <img src={logo} alt="this is footer img" />
        <p>SHOPPERS STOP</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="icons" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="icons" />
        </div>
        <div className="footer-icons-container">
            <img src={pintrest_icon} alt="icons" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>
            Copyright @2024 - All Right Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
