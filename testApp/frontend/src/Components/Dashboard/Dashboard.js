import React, { useState, useEffect } from 'react'
import { getAllComplaintData } from '../../Api/getComplaintData'
import { DashBoardContext } from './DashBoardContext'
import PreContainerObj from '../../DevComponents/PreContainerObj'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AllCasesTable from './AllCasesTable'
import OpenCasesTable from './OpenCasesTable'
import ClosedCasesTable from './ClosedCasesTable'

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
      <h3>Complaints Data</h3>
      <DashBoardContext.Provider value={data}>
        <Tabs defaultActiveKey="all-complaints" id="complaints-tabs">
          <Tab eventKey="all-complaints" title="All District">
            <AllCasesTable />
          </Tab>
          <Tab eventKey="open-cases" title="Open Cases">
            <OpenCasesTable />
          </Tab>
          <Tab eventKey="closed-cases" title="Closed Cases">
            <ClosedCasesTable />
          </Tab>
          <Tab eventKey="top-complaint-types" title="Top Complaints">
            Top Complaints
          </Tab>
          <Tab eventKey="contact" title="Data">
            <PreContainerObj dataObj={data} />
          </Tab>
        </Tabs>
      </DashBoardContext.Provider>
    </div>
  )
}

export default Dashboard
