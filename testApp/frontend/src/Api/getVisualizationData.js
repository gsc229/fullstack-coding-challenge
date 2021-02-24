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

export const getZipTotals = (logOutput=false) => {

  return axiosWIthAuth()
  .get('/complaints/allCases/zip-totals/')
  .then(zipTotalsRes => {
    logOutput && console.log({zipTotalsRes})
    return zipTotalsRes.data
  })
  .catch(zipTotalsError => {
    logOutput && console.log({zipTotalsError})

    return false

  })

}

export const getBoroughTotals = (logOutput=false) => {

  return axiosWIthAuth()
  .get('/complaints/allCases/borough-totals/')
  .then(boroughTotalsRes => {
    logOutput && console.log({boroughTotalsRes})
    return boroughTotalsRes.data
  })
  .catch(boroughTotalsError => {
    logOutput && console.log({boroughTotalsError})

    return false

  })

}

export const getAllZipsAndTypes = (logOutput=false) => {

  return axiosWIthAuth()
  .get('/complaints/allCases/zip-and-type/')
  .then(AllZipsAndTypesRes => {
    logOutput && console.log({AllZipsAndTypesRes})
    return AllZipsAndTypesRes.data
  })
  .catch(AllZipsAndTypesError => {
    logOutput && console.log({AllZipsAndTypesError})

    return false

  })

}


export const getSingleZipAndType = ( zipcode,logOutput=false ) => {

  return axiosWIthAuth()
  .get(`/complaints/allCases/zip-and-type/${zipcode}`)
  .then(singleZipAndTypeRes => {
    logOutput && console.log({singleZipAndTypeRes})
    return singleZipAndTypeRes.data
  })
  .catch(singleZipAndTypeError => {
    logOutput && console.log({singleZipAndTypeError})

    return false

  })

}


export const getAllBoroughsAndTypes = (logOutput=false) => {

  return axiosWIthAuth()
  .get('/complaints/allCases/borough-and-type/')
  .then(AllBoroughsAndTypesRes => {
    logOutput && console.log({AllBoroughsAndTypesRes})
    return AllBoroughsAndTypesRes.data
  })
  .catch(AllBoroughsAndTypesError => {
    logOutput && console.log({AllBoroughsAndTypesError})

    return false

  })

}


export const getSingleBoroughAndType = ( borough,logOutput=false ) => {

  return axiosWIthAuth()
  .get(`/complaints/allCases/borough-and-type/${borough}`)
  .then(singleBoroughAndTypeRes => {
    logOutput && console.log({singleBoroughAndTypeRes})
    return singleBoroughAndTypeRes.data
  })
  .catch(singleBoroughAndTypeError => {
    logOutput && console.log({singleBoroughAndTypeError})

    return false

  })

}



export const getTypeZipAndBoroughTotals = async(logOutput=false) => {

  let allNewData = {
    typeTotals: {},
    zipTotals: {},
    boroughTotals: {}
  }

  const newTypeToals = await getTypeTotals(logOutput)

  if(newTypeToals) allNewData = {...allNewData,  typeTotals: newTypeToals }
  
  const newZipTotals = await getZipTotals(logOutput)

  if(newTypeToals) allNewData = {...allNewData, zipTotals: newZipTotals}

  const newBoroughTotals = await getBoroughTotals(logOutput)

  if(newBoroughTotals) allNewData = { ...allNewData, boroughTotals: newBoroughTotals }

  return allNewData

}