import React from 'react'
import Container from 'react-bootstrap/Container'
import Menu from './MenuLoggedIn'


const LayoutOne = ({children}) => {
  return (
    <Container fluid className='layout-one layout-container'>
      <Menu />
      <div 
      className="layout-one-content layout-content">
        {children}
      </div>
    </Container>
  )
}

export default LayoutOne
