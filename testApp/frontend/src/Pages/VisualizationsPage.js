import React, { useState, useEffect } from 'react'
import { TotalsContext } from './TotalsContext'
import { getTypeZipAndBoroughTotals } from '../Api/getVisualizationData'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Visualizations from '../Components/Visualizations/Visualizations'
import LightSpinner from '../Components/Spinners/LightSpinner'
import Alert from 'react-bootstrap/Alert'

const VisualizationsPage = () => {


  const [ totals, setTotals ] = useState({
    isLoading: true,
    errorMessage:'',
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
          ...newData,
          isLoading: false
        })
      }else{
        setTotals({
          ...totals,
          isLoading: false,
          errorMessage: `Sorry, there was a problem loading the data. If refreshing doesn't work, contact system administrator.`
        })
      }
    }

    getNewTypeData()


  }, [])


  return (
    <LayoutLoggedIn>
      <div className='page visualizations-page'>
        <h2>City Complaint Case Totals</h2>
        <TotalsContext.Provider value={ { totals, setTotals } }>
          {!totals.isLoading && !totals.errorMessage && <Visualizations />}
          {totals.isLoading && <LightSpinner text='Loading...' /> }
          {totals.errorMessage && <Alert variant='danger'>{totals.errorMessage}</Alert>}
        </TotalsContext.Provider>
      </div>
    </LayoutLoggedIn>
  )
}

export default VisualizationsPage
