import React from 'react'
import './Pricing.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import Header from '../Navbar/Header';
function Pricing() {
  return (
    <div>
    <Header/>
        <div className='Pricing-Sec-1'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-12 mt-5'>
                            <h1>Pricing</h1>
                            
                                <div className='Pricing-dflex'>
                                    <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Home<ArrowForwardIosIcon className='arrow' /></a>
                                    <p style={{ marginLeft: '10px', color: 'white',marginTop:'1px' }}>Pricing</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Pricing-Sec-2'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='Pricing-sec-2-h1'>Simple, transparent pricing</h1>
                            <p className='Pricing-sec-2-p'>No contracts. No surprise fees.</p>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='Pricing-Card'>
                                <h2 className='pricing-card-h2'>$0 <span className='price-span'>/month</span></h2>
                                <h3 >Earn Free Credit</h3>
                                <p >Upload a design to get 5 free <br/> credits</p>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>5 Free Downloads</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Own analytics platform</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Chat support</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Optimize hashtags</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Unlimited users</p>
                                </div>
                                <button className='pricing-card-btn'>Choose plan</button>
                            </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='Pricing-Card'>
                                <h2 className='pricing-card-h2'>$5 <span className='price-span'>/month</span></h2>
                                <h3 >Weekly</h3>
                                <p >For most businesses that want to otpimize web queries</p>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>5 Free Downloads</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Own analytics platform</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Chat support</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Optimize hashtags</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Unlimited users</p>
                                </div>
                                <button className='pricing-card-btn'>Choose plan</button>
                            </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='Pricing-Card-3'>
                                <button className='Most'>MOST POPULAR</button>
                                <h2 className='pricing-card-h2' style={{color:'white'}}>$20 <span className='price-span one'>/month</span></h2>
                                <h3>Monthly</h3>
                                <p >For most businesses that want to otpimize web queries</p>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check1'/>
                                <p>5 Free Downloads</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check1'/>
                                <p>Own analytics platform</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check1'/>
                                <p>Chat support</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check1'/>
                                <p>Optimize hashtags</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check1'/>
                                <p>Unlimited users</p>
                                </div>
                                <button className='pricing-card-btn'>Choose plan</button>
                            </div>
                        </div>
                        <div className='col-md-3'>
                        <div className='Pricing-Card'>
                                <h2 className='pricing-card-h2'>$200 <span className='price-span'>/month</span></h2>
                                <h3 >Yearly</h3>
                                <p >Upload a design to get 5 free <br/> credits</p>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>5 Free Downloads</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Own analytics platform</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Chat support</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Optimize hashtags</p>
                                </div>
                                <div style={{display:'flex',gap:'14px'}}>
                                <CheckCircleOutlineSharpIcon className='check'/>
                                <p>Unlimited users</p>
                                </div>
                                <button className='pricing-card-btn'>Choose plan</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

    </div>
  )
}

export default Pricing