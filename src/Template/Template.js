import React from 'react'
import template from '../Images/Template.png'
import './Template.css'
import figma from '../Images/figma.png'
import download from '../Images/Download.png'
import report from '../Images/Report.png'
import User from '../Images/Person.jpg'
import ComputerIcon from '@mui/icons-material/Computer';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import call from '../Images/Call.png'
import message from '../Images/Message.png'
import skype from '../Images/Skype.png'
import telegram from '../Images/Telegram.png'
import booking from '../Images/Booking.png'

function Template() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row' >
                    <div className='col-md-9'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='Template-id'>
                                    <h1 className='Template-h1'>Sales Website Landing Page Design</h1>
                                    <div style={{ display: "flex" }}>
                                        <img alt='User' src={User} className='user-img' />
                                        <p className='Template-p'>Uploaded By <span style={{ color: 'rgba(12, 140, 233, 1)' }}>Aliyan Baig</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='Template-btns'>
                                    <button className='Template-btn'><img alt='figma' src={figma} className='LOGOS' />Copy</button>
                                    <button className='Template-btn2'><img alt='download' src={download} className='LOGOS' />Download Fig File</button>
                                    <button className='Template-btn'><img alt='report' src={report} className='LOGOS' />Report</button>
                                </div>
                            </div>
                        </div>
                        <div className='Temp-Old'>
                            <h2 className='Template-h2'>Select responsiveness</h2>
                            <button><ComputerIcon />Desktop (1920)</button>
                            <button><LaptopMacIcon />Laptop (1440)</button>
                            <button><TabletMacIcon />Tablet (768)</button>
                            <button><PhoneAndroidIcon />Mobile (390)</button>
                        </div>
                        <img alt='template' src={template} style={{ width: '100%' }} />
                        <div className='row mt-4'>
                            <div className='col-md-6'>
                                <div className='Template-id'>
                                    <h1 className='Template-h1'>Sales Website Landing Page Design</h1>
                                    <div style={{ display: "flex" }}>
                                        <img alt='User' src={User} className='user-img' />
                                        <p className='Template-p'>Uploaded By <span style={{ color: 'rgba(12, 140, 233, 1)' }}>Aliyan Baig</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='Template-btns'>
                                    <button className='Template-btn'><img alt='figma' src={figma} className='LOGOS' />Copy</button>
                                    <button className='Template-btn2'><img alt='download' src={download} className='LOGOS' />Download Fig File</button>
                                    <button className='Template-btn'><img alt='report' src={report} className='LOGOS' />Report</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mt-3'>
                        <div className='Template-card'>
                            <h2 className='card-h2'>Need a design Service?</h2>
                            <div style={{ display: "flex" }}>
                                <img alt='User' src={User} className='user-img' />
                                <p className='Template-p'>From <span style={{ color: 'rgba(12, 140, 233, 1)' }}>Aliyan Baig</span></p>
                            </div>
                            <hr className='hr'/>
                            <div style={{display:'flex',margin:'10px'}}>
                            <img className='temp-logo' src={call} alt='Call'/>
                            <a href='Number' className='temp-h6'>+1 (323) 750 1234</a>
                            </div>
                            <div style={{display:'flex',margin:'10px'}}>
                            <img className='temp-logo'  src={message} alt='Message'/>
                            <a href='Info' className='temp-h6'>info@design.com</a>
                            </div>
                            <div style={{display:'flex',margin:'10px'}}>
                            <img className='temp-logo'  src={skype} alt='Skype'/>
                            <a href='Skype' className='temp-h6'>Skype</a>
                            </div>
                            <div style={{display:'flex',margin:'10px'}}>
                            <img className='temp-logo'  src={telegram} alt='Telegram'/>
                            <a href='Telegram' className='temp-h6'>Telegram</a>
                            </div>
                            <div style={{display:'flex',margin:'10px'}}>
                            <img className='temp-logo'  src={booking} alt='Booking'/>
                            <a href='Google Meet' className='temp-h6'>Book a meeting</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template