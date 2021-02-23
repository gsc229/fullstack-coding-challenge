import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'

const DashboardHeader = () => {

  const { constituentCases, complaints, openCases, closedCases, complaintTallies } = useContext(DashBoardContext)

  const topThree = complaintTallies.slice(0, 3)


  return (
    <div className='dashboard-header' >
      <h3>Complaints Data</h3>
      <div className='at-a-glance-container'>
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
      </div>
    </div>
  )
}

export default DashboardHeader
