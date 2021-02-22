import axiosWithAuth from '../utils/axiosWIthAuth'

export const getComplaints = (logOutput=false) => {
  return axiosWithAuth()
  .get('/complaints/')
  .then(complaintsResponse => {
    logOutput && console.log({complaintsResponse})
    return complaintsResponse.data.data
  })
  .catch(complaintsError => {
    logOutput && console.log({complaintsError})
    return false        
  })
}

export const getOpenCases = (logOutput=false) => {
  return axiosWithAuth()
  .get('/complaints/openCases/')
  .then(openCasesResponse => {
    logOutput && console.log({openCasesResponse}) 
    return openCasesResponse.data.data
  })
  .catch(openCasesError => {
    logOutput && console.log({openCasesError})
    return false     
  })

}

export const getClosedCases = (logOutput=false) => {
  return axiosWithAuth()
  .get('/complaints/closedCases/')
  .then(closedCasesResponse => {
    logOutput && console.log({closedCasesResponse})
    return closedCasesResponse.data.data
  })
  .catch(closedCasesError => {
    logOutput && console.log({closedCasesError})
    return false  
  })
}


export const getTopComplaints = (logOutput=false) => {
  return axiosWithAuth()
  .get('/complaints/topComplaints/')
  .then(topComplaintsResponse => {
    logOutput && console.log({topComplaintsResponse})
    return {
      topThreeComplaints: topComplaintsResponse.data.top_three,
      complaintTallies: topComplaintsResponse.data.data
    }
  })
  .catch(topComplaintsError => {
    logOutput && console.log({topComplaintsError})
    return false     
  })
}

/* complaints/constituentCases/ */
export const getConstituentCases = (logOutput=false) => {
  return axiosWithAuth()
  .get('/complaints/constituentCases/')
  .then(ConstituentCasesResponse => {
    logOutput && console.log({ConstituentCasesResponse})
    return ConstituentCasesResponse.data.data
  })
  .catch(ConstituentCasesError => {
    logOutput && console.log({ConstituentCasesError})
    return false  
  })
}


export const getAllComplaintData = async (logOutput=false) => {
      
  let newData = {
    complaints: [],
    openCases: [],
    closedCases: [],
    constituentCases: [],
    topThreeComplaints: [],
    complaintTallies: []
  }

  const complaints = await getComplaints(logOutput)

  if(complaints) newData = {
    ...newData,
    complaints
  }

  const openCases = await getComplaints(logOutput)
  
  if(openCases) newData = {
    ...newData,
    openCases
  }

  const closedCases =  await getClosedCases(logOutput)

  if(closedCases) newData = {
    ...newData,
    closedCases
  }

  const topData = await getTopComplaints(logOutput) 
  if(topData) newData = {
    ...newData,
    ...topData
  }

  const constituentCases = await getConstituentCases(logOutput) 
  if(topData) newData = {
    ...newData,
    constituentCases
  }

  return newData

}