import React, { useContext } from 'react'
import { DashBoardContext } from './DashBoardContext'
import DataTable from './DataTable'

const AllCasesTable = () => {

  const { complaints } = useContext(DashBoardContext)

  return (
    <div className='all-complaints-tab-content'>
      All District - Total: {complaints.length}
      <DataTable data={complaints} />
    </div>
  )
}

export default AllCasesTable
