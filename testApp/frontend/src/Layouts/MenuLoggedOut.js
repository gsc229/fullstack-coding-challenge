import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
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
    </Navbar>
  )
}

export default Menu