import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const OpenCasesTable = () => {

  const { openCases } = useContext(DashBoardContext)


  return (
    <div className='complaints-table-container'>
      Open Cases - Total: {openCases.length}
      <DataTable data={openCases} />
    </div>
  )
}

export default OpenCasesTable
