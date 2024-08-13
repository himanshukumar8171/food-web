import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id ="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi, exercitationem voluptatum at omnis deserunt excepturi quae amet, sit corporis pariatur, totam culpa.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                     

                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>info@companyTomato.com</li>
                </ul>
            </div>
        </div>
            <hr />
            <p className='footer-copyright'>Copyrigth 2024 @ Tomato.com -All Right Reserved</p>

      
    </div>
  )
}

export default Footer
