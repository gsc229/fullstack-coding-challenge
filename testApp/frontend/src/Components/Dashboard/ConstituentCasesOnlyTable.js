import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import DataTable from './DataTable'

const ConstituentCasesOnlyTable = () =>  {

  const { constituentCases } = useContext(DashBoardContext)

  return (
    <div className='complaints-table-container'>
      <h6><strong>Constituent Cases - Total: {constituentCases.length}</strong></h6>
      <DataTable complaintsData={constituentCases} />
    </div>
  )
}

export default ConstituentCasesOnlyTable
