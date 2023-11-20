import React from 'react'
import './Footer.css'
import WhiteLogo from '../Images/LOGO.png'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FooterMain() {
  return (
    <>
      <div className='FooterMain'>
        <div className='container-fluid mt-5'>

          <div className='col-md-12'>
            <img src={WhiteLogo} alt='hcn' className='WhiteLogo' />
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt.</p>


            <Link to='/' className='FooterLink' >Home</Link>
            <Link to='/Pricing' className='FooterLink'>Pricing</Link>
            <Link to='/Faq' className='FooterLink'>FaQs</Link>
            <Link to='/Contact' className='FooterLink'>Contact</Link>
            <br />
            {/* ///////////////Icons//////////////////////// */}
            <a href='www.facebook.com' className='FooterIcon'><FacebookIcon /></a>
            <a href='www.Twitter.com' className='FooterIcon'><TwitterIcon /></a>
            <a href='www.Instagram.com' className='FooterIcon'><InstagramIcon /></a>
            <a href='www.LinkedIn.com' className='FooterIcon'><LinkedInIcon /></a>
            {/* ///////////////////////////////////////////// */}
          </div>



        </div>
      </div>
    </>
  )
}

export default FooterMain