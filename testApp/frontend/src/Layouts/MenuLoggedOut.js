import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import nycclogo from '../images/nyc-seal-blue.png'

const Menu = () => {
  return (
    <Navbar 
    className='layout-navbar'
    fixed='top' bg='light' expand='lg' >
      <Navbar.Brand>
      <img  
      className='navbar-nycc-brand'
      src={nycclogo} alt=""/>
      <h4>New York City Council</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      {/* <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/dashboard'>
            Dashboard
          </Nav.Link>
        </Nav>
        <Nav as={Link} to='/login'>
          Log In
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Menu