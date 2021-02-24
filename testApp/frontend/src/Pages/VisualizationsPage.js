import React, { useState, useEffect } from 'react'
import { TotalsContext } from './TotalsContext'
import { getTypeTotals, getTypeZipAndBoroughTotals } from '../Api/getVisualizationData'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Visualizations from '../Components/Visualizations/Visualizations'

const VisualizationsPage = () => {


  const [ totals, setTotals ] = useState({
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
        setTotals({
          ...totals,
          ...newData
        })
      }

    }

    getNewTypeData()


  }, [])


  return (
    <LayoutLoggedIn>
      <div className='page visualizations-page'>
        <h2>Complaint Case Statistics</h2>
        <TotalsContext.Provider value={ { totals, setTotals } }>
          <Visualizations />
        </TotalsContext.Provider>
      </div>
    </LayoutLoggedIn>
  )
}

export default VisualizationsPage
