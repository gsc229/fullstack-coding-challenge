import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const ClosedCasesTable = () => {

  const { closedCases } = useContext(DashBoardContext)

  return (
    <div className='all-complaints-tab-content'>
      Closed Cases - Total: {closedCases.length}
      <DataTable data={closedCases} />
    </div>
  )
}

export default ClosedCasesTable
