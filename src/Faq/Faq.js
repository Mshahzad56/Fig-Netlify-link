import React from 'react'
import './Faq.css'
import Accordion from 'react-bootstrap/Accordion';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from '../Navbar/Header';

function Faq() {
    
    return (
        <>
        <Header/>
            <div className='Faq-Sec-1'>
            <div className='container '>
                    <div className='row'>
                        <div className='col-md-12 mt-5'>
                            <h1>Frequently Asked Questions</h1>
                            
                                <div className='faq-dflex'>
                                    <a href='/' style={{ color: 'white', textDecoration: 'none' }}>Home<ArrowForwardIosIcon className='arrow' /></a>
                                    <p style={{ marginLeft: '10px', color: 'white',marginTop:'1px' }}>Frequently Asked Questions</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Faq-Sec-2'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-12'>

                            <h3 className='Faq-Sec-2-h3'>FAQ QUESTIONS</h3>
                            <h1 className='Faq-Sec-2-h1'>Get Every General Answers <br /> From Here</h1>

                        </div>
                        <div className='col-md-6 mt-5'>
                            <Accordion className='Faq-Accordions'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How long is my free trial?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Download limit: How many resources can I download?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Rejected and declined payments?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Someone is stealing my work?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. As indicated by our Terms of Use, the unauthorized
                                          distribution of your graphic resources is not allowed and may 
                                          subject them to criminal and civil penalties. Have you discovered 
                                          a file that violates the image copyright you own?Please report or 
                                          contact us at Copyright@figtemplate.com and attach any  supporting
                                           documentation; we'll look into the situation and take the appropriate  steps.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Accordion className='Faq-Accordions'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How to Change my Plan</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Is Figtemplate for free?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>How can I search for images in Figtemplate?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>How can I search for images in Figtemplate?</Accordion.Header>
                                    <Accordion.Body>
                                        Have you come across a website or a creator who violates Copyright
                                         guidelines?We take seriously any copyright violations done
                                         by any user. 
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Faq