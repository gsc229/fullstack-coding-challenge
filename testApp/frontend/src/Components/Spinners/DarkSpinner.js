import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const DarkSpinner = ({style, text}) => {
  return (
    <div style={{width: '100%', height: '500px', color: 'white', textAlign: 'center', backgroundColor: '#343A40', ...style}}>
      <div 
      style={{position: 'relative', top: '35%'}} >
        <p>{text}</p>
        <Spinner animation="border" variant="light"/>
      </div>
    </div>
  )
}

export default DarkSpinner
