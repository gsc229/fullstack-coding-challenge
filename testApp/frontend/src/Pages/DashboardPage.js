import React from 'react'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import Dashboard from '../Components/Dashboard'


const DashboardPage = () => {
  return (
    <LayoutLoggedIn>
      <div className='dashboard-page-container'>
        <Dashboard />
      </div>    
    </LayoutLoggedIn>
  )
}

export default DashboardPage
