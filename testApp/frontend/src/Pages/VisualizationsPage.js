import React, { useState, useEffect } from 'react'
import { DashBoardContext } from './DashBoardContext'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'

const VisualizationsPage = () => {


  const [ stats, setStats ] = useState([])




  return (
    <LayoutLoggedIn>
      <div className='visualizations-page'>
        <h1>VisualizationsPage</h1>
        <DashBoardContext.Provider value={ stats, setStats }>

        </DashBoardContext.Provider>
      </div>
    </LayoutLoggedIn>
  )
}

export default VisualizationsPage
