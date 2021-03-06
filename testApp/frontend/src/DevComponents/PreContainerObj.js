import React, { useContext } from 'react'
import { DashBoardContext } from '../Pages/DashBoardContext'

const PreContainerObj = ({
  dataObj,
  many=true
}) => {

  const { constituentCases, complaints, openCases, closedCases, complaintTallies } = useContext(DashBoardContext)

  if(!dataObj) dataObj = {
    constituentCases, 
    complaints, 
    openCases, 
    closedCases, 
    complaintTallies 
  }

  return (
    <div className='pre-container'>
      {dataObj && many && Object.keys(dataObj).map(key => {
        return <pre key={key} style={{color: 'white'}}>{JSON.stringify({[key]: dataObj[key]}, null, 2)}</pre>
      })}
      {dataObj && !many && <pre style={{color: 'white'}}>{JSON.stringify({dataObj}, null, 2)}</pre>}
      {!dataObj && <p>DEV PRE CONTAINER: You didn't pass a data object prop down</p>}
    </div>
  )
}

export default PreContainerObj
