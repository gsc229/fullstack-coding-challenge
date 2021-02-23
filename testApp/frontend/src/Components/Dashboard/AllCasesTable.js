import React, { useContext } from 'react'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import DataTable from './DataTable'

const AllCasesTable = () => {

  const { complaints } = useContext(DashBoardContext)

  return (
    <div className='complaints-table-container'>
      <h6><strong>All District - Total: {complaints.length}</strong></h6>
      <DataTable complaintsData={complaints} />
    </div>
  )
}

export default AllCasesTable
