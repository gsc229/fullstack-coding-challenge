import React, { useContext, useMemo } from 'react'
import { defs, fill, pieConverter } from './helpers/pieConverters'
import { TotalsContext } from '../../Pages/TotalsContext'
import PieChart from './PieChart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NewYorkCity = () => {

  const { totals } = useContext(TotalsContext)
  console.log({totals})
  const cityPieData = useMemo(() => pieConverter(totals.typeTotals.data || [], 'complaint_type', 'count') , [totals])
  const boroughData = useMemo(() => pieConverter(totals.boroughTotals.data || [], 'borough', 'count') , [totals])

  return (
    <div className='nyc-pie-container' >
      
      <Row>
        <Col lg='6' >
          <div className='nyc-pie-container'>
            <PieChart data={cityPieData} defs={defs} fill={fill} showLegend={false} />
          </div>
        </Col>

        <Col lg='6' >
          <div className='nyc-pie-container'>
            <PieChart data={boroughData} defs={defs} fill={fill}  />
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NewYorkCity
