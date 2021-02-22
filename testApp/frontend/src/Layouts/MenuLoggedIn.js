import React, {useContext} from 'react'
import { UserContext } from '../Auth/UserContext'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import nycclogo from '../images/nyc-seal-blue.png'

const Menu = () => {

  const { auth, setAuth } = useContext(UserContext)

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setAuth({
      ...auth,
      isLoading: false,
      isAuthenticated: false
    })
  }

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
      <Navbar.Collapse>
        <Nav 
        className='ml-auto'
        onClick={handleLogOut}
        as={Link} to='#'>
          Logout
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
