import React, {useState, useEffect} from 'react'
import { getAllComplaintData } from '../../Api/getComplaintData'
import PreContainerObj from '../../DevComponents/PreContainerObj'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AllCasesTab from './AllCasesTab'

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
      <Tabs defaultActiveKey="all-complaints" id="complaints-tabs">
        <Tab eventKey="all-complaints" title="All District">
          <AllCasesTab />
        </Tab>
        <Tab eventKey="open-cases" title="Open Cases">
          Open Cases
        </Tab>
        <Tab eventKey="closed-cases" title="Closed Cases">
          Closed Cases
        </Tab>
        <Tab eventKey="top-complaint-types" title="Top Complaints">
          Top Complaints
        </Tab>
        <Tab eventKey="contact" title="Data">
          <PreContainerObj dataObj={data} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Dashboard
