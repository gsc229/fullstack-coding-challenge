import React, { useContext } from 'react'
import { TotalsContext } from '../../Pages/TotalsContext'
import PreContainerVisData  from '../../DevComponents/PreContainerVisData'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import NewYorkCity from './NewYorkCity'

const Visualizations = () => {


  const { totals } = useContext(TotalsContext)
 
  

  return (
    <div className='visualizations-container'>
      <Tabs defaultActiveKey='complaint-totals'  id='visualizations-tabs'>
        <Tab eventKey='borough-totals' title='Borough' >
            Borough Totals
        </Tab>
        <Tab eventKey='zip-code-totals' title='Zip Code' >
            Zip Code
        </Tab>
        <Tab eventKey='complaint-totals' title='NYC'>
          NYC
          <NewYorkCity />
        </Tab>
      </Tabs>
      <PreContainerVisData  dataObj={totals}  />
    </div>
  )
}

export default Visualizations
