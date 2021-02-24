import axiosWIthAuth from '../utils/axiosWIthAuth'


export const getTypeTotals = (logOutput=false) => {

  return axiosWIthAuth()
  .get('/complaints/allCases/type-totals/')
  .then(typeTotalsRes => {
    logOutput && console.log({typeTotalsRes})
    return typeTotalsRes.data
  })
  .catch(typeTotalsError => {
    logOutput && console.log({typeTotalsError})

    return false

  })

}



export const getAllVisualizationData = () => {}