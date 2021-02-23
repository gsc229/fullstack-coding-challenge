import React, { useState, useEffect } from 'react'
import { getAllComplaintData } from '../Api/getComplaintData'
import { DashBoardContext } from './DashBoardContext'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Dashboard from '../Components/Dashboard/Dashboard'


const DashboardPage = () => {

  

  const [data, setData] = useState({
    complaints: [],
    openCases: [],
    closedCases: [],
    constituentCases: [],
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
    <LayoutLoggedIn>
      <div className='dashboard-page-container'>
        <DashBoardContext.Provider value={data}>
         <Dashboard />
        </DashBoardContext.Provider>
      </div>    
    </LayoutLoggedIn>
  )
}

export default DashboardPage
