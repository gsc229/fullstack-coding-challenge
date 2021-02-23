import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import { UserContext } from '../../Auth/UserContext'
import DataTable from './DataTable'
import { CSVLink }  from 'react-csv'
import { csvHeaders } from './helpers/complatintFieldTitle'
import { CSVIcon } from '../Icons/Icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ToolTip from 'react-bootstrap/Tooltip'

const OpenCasesTable = () => {

  const { openCases } = useContext(DashBoardContext)
  const { auth } = useContext(UserContext)


  return (
    <div className='complaints-table-container'>
      <h6>
        <strong>Open Cases - Total: {openCases.length}</strong>
        
        <OverlayTrigger overlay={<ToolTip id='csv-tooltip'>Download CSV</ToolTip>} >
          
          <CSVLink
          className='csv-link'
          filename={`disttrict_${auth.profile.district}_open_complaint_cases.csv`}
          headers={csvHeaders} 
          data={openCases} >

            <CSVIcon />

          </CSVLink>

        </OverlayTrigger> 


      </h6>
      <DataTable complaintsData={openCases} />
    </div>
  )
}

export default OpenCasesTable
