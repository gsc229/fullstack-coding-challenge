import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar fixed='top' expand='lg' >
      <Navbar.Brand>
        <img src="/public/android-chrome-512x512.png" alt=""/>
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
