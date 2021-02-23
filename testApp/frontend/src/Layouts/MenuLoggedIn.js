import React, {useContext} from 'react'
import { UserContext } from '../Auth/UserContext'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import nycclogo from '../images/nyc-seal-blue.png'
import { ProfileIcon, LogOutIcon } from '../Components/Icons/Icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ToolTip from 'react-bootstrap/Tooltip'

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
        <Nav className='mr-auto'>
          <Nav.Link
          to='/'
          as={Link}>
            Dashboard
          </Nav.Link>
        </Nav>
        
        <Nav 
        className='ml-auto'>
          <Nav.Link 
          as={Link}
          to={'/user-profile'}
          className='profile-link'>
            <ProfileIcon />
            <h6><strong>{auth.profile.username}</strong></h6>
          </Nav.Link>
          <OverlayTrigger
          placement='bottom'
          overlay={<ToolTip><h6><strong>Logout</strong></h6></ToolTip>}>
            <Nav.Link
            className='logout-link'
            onClick={handleLogOut}>
              <LogOutIcon />
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
