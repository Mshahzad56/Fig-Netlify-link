import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Main from '../Images/Main-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import person from '../Images/Person.jpg'
import './Header.css'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'


function Header() {

  return (
    <div className='container '>
      <Navbar expand="lg" className="bg-body-light" style={{ height: 'auto' }}>
        <Container fluid >
          <Navbar.Brand href="#"><img alt='Main' src={Main} style={{ height: '40px', width: '183px' }} ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0">
              {/* /////////////////////////Navbar//////////////////////////////// */}
              <LinkContainer to="/" >
                <Nav.Link className='Head1'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Pricing' >
                <Nav.Link className='Head1'>Pricing</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Faq' >
                <Nav.Link className='faq Head1'>Faq</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Report' >
                <Nav.Link className='Head1'>Report</Nav.Link>
              </LinkContainer>
              {/* ////////////////////////////////////////////////////////// */}
            </Nav>
            <Form className="d-flex">
              <div className='SearchIcon-Head'>
                <div>
                  <SearchIcon className='head-searchicon' />
                </div>
                <div className='w-75 text-end input'>
                  <input  type='text' placeholder='Search' />
                </div>
              </div>
              <Button className='HeadBtn'>Upload A Design</Button>
              <Link to='/UserProfile'>
              <img src={person} alt='Person' style={{ width: '42px', height: '43px', cursor: "pointer", borderRadius: '50%' }} />
              </Link>
              <ArrowDropDownOutlinedIcon className='HeadDown-Arrow' />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;





