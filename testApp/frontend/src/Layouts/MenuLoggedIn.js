import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import nycclogo from '../images/nyc-seal-blue.png'

const Menu = () => {
  return (
    <Navbar fixed='top' expand='lg' >
      <Navbar.Brand>
        <img  
        className='navbar-nycc-brand'
        src={nycclogo} alt=""/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/dashboard'>
            Dashboard
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
