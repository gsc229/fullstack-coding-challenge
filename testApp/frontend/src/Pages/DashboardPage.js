import React from 'react'
import LayoutOne from '../Layouts'
import Dashboard from '../Components/Dashboard'

const DashboardPage = () => {
  return (
    <LayoutOne>
      <div className='dashboard-page-container'>
        <Dashboard />
      </div>    
    </LayoutOne>
  )
}

export default DashboardPage
