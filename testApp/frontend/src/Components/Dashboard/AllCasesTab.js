import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import { getAllComplaintData } from '../../Api/getComplaintData'

const AllCasesTab = () => {

  const [allComplaints, setAllComplaints] = useState([])

  useEffect(() => {

    const getData = async() => {
      const newData = await getAllComplaintData(true)
      setAllComplaints(newData.complaints)
    }

    getData()

  }, [])

  return (
    <div className='all-complaints-tab-content'>
      All District
      <DataTable data={allComplaints} />
    </div>
  )
}

export default AllCasesTab
