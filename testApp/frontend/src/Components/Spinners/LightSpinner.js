import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const DarkSpinner = ({style, text}) => {
  return (
    <div style={{width: '100%', height: '500px', color: 'var(--nycc-blue)', textAlign: 'center', ...style}}>
      <div 
      style={{position: 'relative', top: '35%'}} >
        <p>{text}</p>
        <Spinner animation="border" variant='secondary' />
      </div>
    </div>
  )
}

export default DarkSpinner