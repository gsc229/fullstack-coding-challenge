import React from 'react'
import PreContainerObj from '../../DevComponents/PreContainerObj'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DashboardHeader from './DashboardHeader'
import AllCasesTable from './AllCasesTable'
import OpenCasesTable from './OpenCasesTable'
import ClosedCasesTable from './ClosedCasesTable'
import ConstituentCasesOnlyTable from './ConstituentCasesOnlyTable'

const Dashboard = () => {

  return (
    <div className='dashboard'>
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
    </div>
  )
}

export default Dashboard
