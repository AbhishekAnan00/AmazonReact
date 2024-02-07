import React, { useContext } from 'react'
import './Footer.css'
import MyContext from '../../Context/Data/MyContext'
import amazon_logo from '../../assets/amazon_logo.png'

export const Footer = () => {
  const Context = useContext(MyContext)
  const {mode} = Context
  const backtotop = () => {
    window.scroll(0,0)
  }
  return (
    <div className="footer" style={{ backgroundColor: mode === "dark" ? "grey" : ""}}>
        <div class="footer-panel-1">
            <p onClick={backtotop}>Back to top</p>
        </div>
        <div class="footer-panel-2">
            <ul><p>Get to Know Us</p>
                <a>About Us</a>  
                <a>Careers</a>
                <a>Press Releases</a>
                <a>Amazon Science</a>
            </ul>
            <ul><p>Connect with Us</p>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Instagram</a>
            </ul>
                <ul><p>Make Money with Us</p>
                <a>Sell on Amazon</a>
                <a>Sell under Amazon Accelerator</a>
                <a>Protect and Build Your Brand</a>
                <a>Amazon Global Selling</a> 
                <a>Become an Affiliate</a> 
                <a>Fulfilment by Amazon</a>  
                <a>Advertise Your Products</a>
                <a>Amazon Pay on Merchants</a>
            </ul>
                <ul> 
                <p>Let Us Help You</p>
                <a>COVID-19 and Amazon</a>  
                <a>Your Account</a>
                <a>Returns Centre</a>
                <a> 100% Purchase Protection</a>
                <a>Amazon App Download</a>
                <a>Help</a>
            </ul>
        </div>
        <div class="footer-panel-3">
            <div class="panel-logo">
              <img src={amazon_logo} alt="amazon" className='panel-logo' />
            </div>
        </div>
        <div class="footer-panel-4">
            <div class="copyright-notice">
                <a>Conditions of Use & Sales</a>
                <a>Privacy Notice</a>
                <a>Interest Based-Ads</a>
            </div>
            <div class="copyright">
                © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>

      
        </div>
    </div>
  )
}
