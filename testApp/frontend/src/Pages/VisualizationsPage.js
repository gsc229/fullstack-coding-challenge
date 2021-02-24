import React, { useState, useEffect } from 'react'
import { VisualizationContext } from './VisualizationContext'
import { getTypeTotals, getTypeZipAndBoroughTotals } from '../Api/getVisualizationData'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Visualizations from '../Components/Visualizations/Visualizations'

const VisualizationsPage = () => {


  const [ stats, setStats ] = useState({
    total_cases: null,
    typeTotals: [],
    zipTotals: [],
    boroughTotals: [],
    allZipsAndTypes: [],
    singlZipAndTypes: [],
    allBuroughsAndTypes: [],
    singleBuroughAndTypes: []
  })

  useEffect(() => {

    const getNewTypeData = async() => {
      const newData = await getTypeZipAndBoroughTotals()

      if(newData){
        setStats({
          ...stats,
          ...newData
        })
      }

    }

    getNewTypeData()


  }, [])


  return (
    <LayoutLoggedIn>
      <div className='visualizations-page'>
        <h1>VisualizationsPage</h1>
        <VisualizationContext.Provider value={ { stats, setStats } }>
          <Visualizations />
        </VisualizationContext.Provider>
      </div>
    </LayoutLoggedIn>
  )
}

export default VisualizationsPage
