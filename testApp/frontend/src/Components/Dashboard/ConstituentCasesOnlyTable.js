import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const ConstituentCasesOnlyTable = () =>  {

  const { constituentCases } = useContext(DashBoardContext)

  return (
    <div className='complaints-table-container'>
      Constituent Cases - Total: {constituentCases.length}
      <DataTable data={constituentCases} />
    </div>
  )
}

export default ConstituentCasesOnlyTable
