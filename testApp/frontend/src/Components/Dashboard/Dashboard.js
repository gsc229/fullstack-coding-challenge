import React, {useState, useEffect} from 'react'
import { getAllComplaintData } from '../../Api/getData'
import PreContainerObj from '../../DevComponents/PreContainerObj'

const Dashboard = () => {


  const [data, setData] = useState({
    complaints: [],
    openCases: [],
    closedCases: [], 
    topThreeComplaints: [],
    complaintTallies: []
  })

  useEffect(() => {

    const getNewData = async() => {
      const newData = await  getAllComplaintData()
      setData(newData)
    }

    getNewData()

  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <PreContainerObj dataObj={data} />
    </div>
  )
}

export default Dashboard
