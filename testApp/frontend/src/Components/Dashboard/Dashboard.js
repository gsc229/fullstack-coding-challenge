import React, { useState, useEffect } from 'react'
import { getAllComplaintData } from '../../Api/getComplaintData'
import { DashBoardContext } from './DashBoardContext'
import PreContainerObj from '../../DevComponents/PreContainerObj'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DashboardHeader from './DashboardHeader'
import AllCasesTable from './AllCasesTable'
import OpenCasesTable from './OpenCasesTable'
import ClosedCasesTable from './ClosedCasesTable'
import ConstituentCasesOnlyTable from './ConstituentCasesOnlyTable'

const Dashboard = () => {


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
    <div className='dashboard'>
      <DashBoardContext.Provider value={data}>
        <DashboardHeader />
        <Tabs defaultActiveKey="all-complaints" id="complaints-tabs">
          <Tab eventKey="all-complaints" title="All District Cases">
            <AllCasesTable />
          </Tab>
          <Tab eventKey="constituent-cases" title="All Constituent Cases">
            <ConstituentCasesOnlyTable />
          </Tab>
          <Tab eventKey="open-cases" title="Open Cases">
            <OpenCasesTable />
          </Tab>
          <Tab eventKey="closed-cases" title="Closed Cases">
            <ClosedCasesTable />
          </Tab>
          {/* <Tab eventKey="contact" title="Data">
            <PreContainerObj dataObj={data} />
          </Tab> */}
        </Tabs>
      </DashBoardContext.Provider>
    </div>
  )
}

export default Dashboard
