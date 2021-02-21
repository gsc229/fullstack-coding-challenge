import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWIthAuth'

const Dashboard = () => {


  const [data, setData] = useState({
    complaints: [],
    openCases: [],
    closedCases: [], 
    topThreeComplaints: [],
    complaintTallies: []
  })

  useEffect(() => {

    const getAllData = async () => {
      
      let newData = {}

      await axiosWithAuth()
      .get('/complaints/')
      .then(complaintsResponse => {
        console.log({complaintsResponse})
        newData = {
          ...newData,
          complaints: complaintsResponse.data.data
        }
      })
      .catch(complaintsError => {
        console.log({complaintsError})        
      })

      await axiosWithAuth()
      .get('/complaints/openCases/')
      .then(openCasesResponse => {
        console.log({openCasesResponse})
        newData = {
          ...newData,
          openCases: openCasesResponse.data.data
        }
      })
      .catch(openCasesError => {
        console.log({openCasesError})        
      })

      await axiosWithAuth()
      .get('/complaints/closedCases/')
      .then(closedCasesResponse => {
        console.log({closedCasesResponse})
        newData = {
          ...newData,
          closedCases: closedCasesResponse.data.data
        }
      })
      .catch(closedCasesError => {
        console.log({closedCasesError})        
      })

      await axiosWithAuth()
      .get('/complaints/topComplaints/')
      .then(topComplaintsResponse => {
        console.log({topComplaintsResponse})
      newData = ({
          ...newData,
          topThreeComplaints: topComplaintsResponse.data.top_three,
        complaintTallies: topComplaintsResponse.data.data
        })
      })
      .catch(topComplaintsError => {
        console.log({topComplaintsError})        
      })

      setData(newData)

    }

    getAllData()

  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <div className='pre-container'>
        <pre style={{color: 'white'}}>{JSON.stringify(data.complaints, null, 2)}</pre>
        <pre style={{color: 'white'}}>{JSON.stringify(data.openCases, null, 2)}</pre>
        <pre style={{color: 'white'}}>{JSON.stringify(data.closedCases, null, 2)}</pre>
        <pre style={{color: 'white'}}>{JSON.stringify(data.complaintTallies, null, 2)}</pre>
        <pre style={{color: 'white'}}>{JSON.stringify(data.topThreeComplaints, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Dashboard
