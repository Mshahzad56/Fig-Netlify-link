import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Report.css'
import Uploadimg from '../Images/Upload.png'
import Header from '../Navbar/Header';


function Report() {

    return (
        <div>
        <Header/>
            <div className='Report-Sec-1'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-12 mt-5'>
                            <h1>Report</h1>
                            <div className='Report-dflex'>
                                <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Home<ArrowForwardIosIcon className='arrow' /></a>
                                <p style={{ marginLeft: '10px', color: 'white', marginTop: '1px' }}>Report</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Report-Sec-2'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='Report-h1'>Report</h1>
                        </div>

                        <div className='col-md-6 mt-4'>
                            <label className='Report-label'>Select a reason</label><br />
                            <select className='Report-input' style={{cursor:'pointer'}}>
                                <option className='option'>Select</option>
                                <option className='option'>I want to report a copyright infringement</option>
                                <option className='option'>#</option>
                            </select>
                            <br />
                            <label className='Report-label'>Subject*</label><br />
                            <input className='Report-input' type='text' placeholder='-' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <label className='Report-label'>Email*</label><br />
                            <input className='Report-input' type='email' placeholder='ex: kevin@uxper.co' />
                            <label className='Report-label' >Attachments*</label><br />
                            <div className='Upload-Icon-input'>
                                <img src={Uploadimg} alt='Upload Image' />
                                <input className='upload-input' type='text' placeholder='Upload' />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='Report-Msg '>
                                        <label className='Report-label'>Message</label><br />
                                        <textarea placeholder='Please enter the details of your request. A member of our support staff will respond as soon as possible'>

                                        </textarea>
                                        <button className='Report-btn2 mt-4'>Report</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Report