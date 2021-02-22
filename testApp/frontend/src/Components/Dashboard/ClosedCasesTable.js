import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const ClosedCasesTable = () => {

  const { closedCases } = useContext(DashBoardContext)

  return (
    <div className='complaints-table-container'>
      Closed Cases - Total: {closedCases.length}
      <DataTable data={closedCases} />
    </div>
  )
}

export default ClosedCasesTable
