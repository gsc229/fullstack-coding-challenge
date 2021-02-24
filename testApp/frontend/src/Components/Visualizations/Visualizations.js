import React, { useContext } from 'react'
import { VisualizationContext } from '../../Pages/VisualizationContext'
import PreContainerVisData  from '../../DevComponents/PreContainerVisData'

const Visualizations = () => {


  const { stats } = useContext(VisualizationContext)



  return (
    <div>
      <h5>Visualizations</h5>
      <PreContainerVisData  dataObj={stats}  />
    </div>
  )
}

export default Visualizations
