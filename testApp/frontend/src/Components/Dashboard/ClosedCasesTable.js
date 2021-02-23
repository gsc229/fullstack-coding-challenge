import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import { UserContext } from '../../Auth/UserContext'
import DataTable from './DataTable'
import { CSVLink }  from 'react-csv'
import { csvHeaders } from './helpers/complatintFieldTitle'
import { CSVIcon } from '../Icons/Icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ToolTip from 'react-bootstrap/Tooltip'

const ClosedCasesTable = () => {

  const { closedCases } = useContext(DashBoardContext)
  const { auth } = useContext(UserContext)

  return (
    <div className='complaints-table-container'>
      <h6>
        <strong>Closed Cases - Total: {closedCases.length}</strong>
        
        <OverlayTrigger overlay={<ToolTip id='csv-tooltip'>Download CSV</ToolTip>} >
          
          <CSVLink
          className='csv-link'
          filename={`disttrict_${auth.profile.district}_closed_complaint_cases.csv`}
          headers={csvHeaders} 
          data={closedCases} >

            <CSVIcon />

          </CSVLink>

        </OverlayTrigger>  
      </h6>
      <DataTable complaintsData={closedCases} />
    </div>
  )
}

export default ClosedCasesTable
