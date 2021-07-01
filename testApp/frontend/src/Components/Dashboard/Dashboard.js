import React, { useContext } from 'react'
import { UserContext } from '../../Auth/UserContext'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import DashboardHeader from './DashboardHeader'
import AllCasesTable from './AllCasesTable'
import OpenCasesTable from './OpenCasesTable'
import ClosedCasesTable from './ClosedCasesTable'
import ConstituentCasesOnlyTable from './ConstituentCasesOnlyTable'

const Dashboard = () => {

  const { auth } = useContext(UserContext)

  return (
    <div className='dashboard'>
        <DashboardHeader />
  
          <Tabs defaultActiveKey="all-complaints" id="complaints-tabs">
            <Tab eventKey="all-complaints" title={`All Dist. ${auth.profile.district} Cases`}>
              <AllCasesTable />
            </Tab>
            <Tab eventKey="constituent-cases" title={`All Dist. ${auth.profile.district} Constituent Cases`}>
              <ConstituentCasesOnlyTable />
            </Tab>
            <Tab eventKey="open-cases" title={`Dist. ${auth.profile.district} Open Cases`}>
              <OpenCasesTable />
            </Tab>
            <Tab eventKey="closed-cases" title={`Dist. ${auth.profile.district} Closed Cases`}>
              <ClosedCasesTable />
            </Tab>
            {/* <Tab eventKey="contact" title="Data">
              <PreContainerObj />
            </Tab> */}
          </Tabs>
    </div>
  )
}

export default Dashboard
