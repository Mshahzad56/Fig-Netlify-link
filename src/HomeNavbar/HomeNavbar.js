import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../Images/LOGO.png'
import SearchIcon from '@mui/icons-material/Search';
import person from '../Images/Person.jpg'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { LinkContainer } from 'react-router-bootstrap'
import './HomeNavbar.css'
import Userprofile from '../Components/Pages/Userprofile';
import { Link } from 'react-router-dom';

function HomeNavbar() {
  return (
    <div>
    <div className='container '>
      <Navbar expand="lg" className='HomeNavbar'  style={{ height: 'auto'}}>
        <Container fluid >
          <Navbar.Brand href="#"><img alt='Main' src={LOGO} style={{ height: '40px', width: '183px' }} ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0">
              {/* /////////////////////////Navbar//////////////////////////////// */}
              <LinkContainer to="/" >
                <Nav.Link className='Head2'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Pricing' >
                <Nav.Link className='Head2'>Pricing</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Faq' >
                <Nav.Link className='faq Head2'>Faq</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Report' >
                <Nav.Link className='Head2'>Report</Nav.Link>
              </LinkContainer>
              {/* ////////////////////////////////////////////////////////// */}
            </Nav>
            <Form className="d-flex">
              <div className='SearchIcon-Head'>
                <div>
                  <SearchIcon className='head-searchicon' />
                </div>
                <div className='w-75 text-end inputHome'>
                  <input  type='text' placeholder='Search' />
                </div>
              </div>
              <Button className='HeadBtn'>Upload A Design</Button>
              <Link to='UserProfile'>
              <img src={person} alt='Person' style={{ width: '42px', height: '43px', cursor: "pointer", borderRadius: '50%' }} />
              </Link>
              <ArrowDropDownOutlinedIcon className='HeadDown-Arrow1' />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    </div>
  )
}

export default HomeNavbar