import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import { UserContext } from '../../Auth/UserContext'
import DataTable from './DataTable'
import { CSVLink }  from 'react-csv'
import { csvHeaders } from './helpers/complatintFieldTitle'
import { CSVIcon } from '../Icons/Icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import ToolTip from 'react-bootstrap/Tooltip'

const ConstituentCasesOnlyTable = () =>  {

  const { constituentCases } = useContext(DashBoardContext)
  const { auth } = useContext(UserContext)

  return (
    <div className='complaints-table-container'>
      <h6>
        <strong>Constituent Cases - Total: {constituentCases.length}</strong>
        
        <OverlayTrigger overlay={<ToolTip id='csv-tooltip'>Download CSV</ToolTip>} >
          
          <CSVLink
          className='csv-link'
          filename={`disttrict_${auth.profile.district}_constituent_complaint_cases.csv`}
          headers={csvHeaders} 
          data={constituentCases} >

            <CSVIcon />

          </CSVLink>

        </OverlayTrigger> 
        
      </h6>
      <DataTable complaintsData={constituentCases} />
    </div>
  )
}

export default ConstituentCasesOnlyTable
