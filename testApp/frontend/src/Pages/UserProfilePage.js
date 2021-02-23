import React from 'react'
import LayoutLoggedIn from '../Layouts/LayoutLoggedIn'
import UserProfile from '../Components/UserProfile/UserProfile'

const UserProfilePage = () => {
  return (
    <LayoutLoggedIn>
      <div className="profile-page-container">
        <UserProfile />
      </div>
    </LayoutLoggedIn>
  )
}

export default UserProfilePage
