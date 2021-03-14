import React from 'react'
import NewYorkCity from './NewYorkCity'
import ZipHeatMap from './ZipHeatMap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Visualizations = () => {

  return (
    <div className='visualizations-container'>
      <Row>
        <Col sm='12'>
          <NewYorkCity />
        </Col>
        <Col sm='12'>
          <ZipHeatMap />
        </Col>
      </Row>
    </div>
  )
}

export default Visualizations
