import React, { useContext } from 'react'
import { TotalsContext } from '../../Pages/TotalsContext'
import PreContainerVisData  from '../../DevComponents/PreContainerVisData'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Visualizations = () => {


  const { totals } = useContext(TotalsContext)



  return (
    <div className='visualizations-container'>
      <Tabs defaultActiveKey='borough-totals'  id='visualizations-tabs'>
        <Tab eventKey='borough-totals' title='Borough' >
            Borough Totals
        </Tab>
        <Tab eventKey='zip-code-totals' title='Zip Code' >
            Zip Code
        </Tab>
        <Tab eventKey='complaint-totals' title='NYC'>
          NYC
        </Tab>
      </Tabs>
      <PreContainerVisData  dataObj={totals}  />
    </div>
  )
}

export default Visualizations
