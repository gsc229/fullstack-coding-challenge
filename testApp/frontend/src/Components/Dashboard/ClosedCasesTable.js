import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const ClosedCasesTable = () => {

  const { closedCases } = useContext(DashBoardContext)

  return (
    <div className='complaints-table-container'>
      <h6><strong>Closed Cases - Total: {closedCases.length}</strong></h6>
      <DataTable data={closedCases} />
    </div>
  )
}

export default ClosedCasesTable
