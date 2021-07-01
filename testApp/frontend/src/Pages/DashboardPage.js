import React, { useState, useEffect } from 'react'
import { getAllComplaintData } from '../Api/getComplaintData'
import { DashBoardContext } from './DashBoardContext'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Dashboard from '../Components/Dashboard/Dashboard'
import LightSpinner from '../Components/Spinners/LightSpinner'
import Alert from 'react-bootstrap/Alert'


const DashboardPage = () => {

  const [data, setData] = useState({
    complaints: [],
    openCases: [],
    closedCases: [],
    constituentCases: [],
    topThreeComplaints: [],
    complaintTallies: [],
    isLoading: true,
    errorMessage: ''
  })

  useEffect(() => {

    const getNewData = async() => {
      const newData = await  getAllComplaintData()
      if(newData){
          setData(() => ({
            ...newData,
            isLoading: false
          }))
      } else{
        setData(d => ({
          ...d,
          isLoading: false,
          errorMessage: `Sorry, there was a problem loading the data. If refreshing doesn't work, contact system administrator.`
        }))
      }
    }

    getNewData()

  }, [])


  return (
    <LayoutLoggedIn>
      <div className='dashboard-page-container page'>
        <DashBoardContext.Provider value={data}>
         {!data.isLoading && !data.errorMessage && <Dashboard />}
         {data.isLoading && <LightSpinner text='Loading Dashboard...' />}
         {data.errorMessage && 
         <Alert variant='danger'>
          {data.errorMessage}
          </Alert>}
        </DashBoardContext.Provider>
      </div>    
    </LayoutLoggedIn>
  )
}

export default DashboardPage
