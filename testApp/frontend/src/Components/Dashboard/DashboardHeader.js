import React, { useContext, useMemo } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import { pieConverter, defs, fill } from '../Dashboard/helpers/pieConverter'
import { UserContext } from '../../Auth/UserContext'
import PicChart from '../Visualizations/PieChart'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DashboardHeader = () => {

  const { constituentCases, complaints, openCases, closedCases, complaintTallies } = useContext(DashBoardContext)
  const { auth } = useContext(UserContext)

  const data = useMemo(() =>  pieConverter(complaintTallies), [])

  const topThree = complaintTallies.slice(0, 3)


  return (
    <div className='dashboard-header' >
      <h3>Complaint Data  for District {auth.profile.district}</h3>
      <Row className="inner-container">

        <Col lg='4' md='12'  className='at-a-glance-container'>
          <h5>Cases at a glance: </h5>
          <div className='list-container'>
            <ul className='at-a-glance-list'>
            <strong>Totals:</strong>
              <li>District Cases: {complaints.length}</li>
              <li>Constituent Cases: {constituentCases.length}</li>
              <li>Open: {openCases.length}</li>
              <li>Closed: {closedCases.length}</li>
            </ul>
            <ol className='top-types-list'>
              <strong>Top 3 Complaints:</strong>
              {topThree && topThree.map(type => (
                <li key={type.complaint_type} >{type.complaint_type} - {type.count}</li>
              ))}
            </ol>
          </div>
        </Col>
        <Col  className='pie-column' md='12' lg='8'>
          <div className='pie-chart-parent'>
            <PicChart data={data} defs={defs} fill={fill} />
          </div>
        </Col>

      </Row>


    </div>
  )
}

export default DashboardHeader
