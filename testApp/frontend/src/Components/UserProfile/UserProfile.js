import React, { useContext } from 'react'
import { UserContext } from '../../Auth/UserContext'
import moment from 'moment'
import PreContainerObj from '../../DevComponents/PreContainerObj'

const UserProfile = () => {

  const { auth } = useContext(UserContext)
  const { profile } = auth
  const notProvided = <span className='not-provided'>not provided</span>
  return (
    <div className='user-profile'>
      <h3>Profile: </h3>
      <div className="profile-info">
        <ul>
          <li><strong>First Name:</strong>&nbsp;&nbsp; {profile.first_name || notProvided }</li>
          <li><strong>Last Name:</strong>&nbsp;&nbsp; {profile.last_name || notProvided }</li>
          <li><strong>Userame:</strong>&nbsp;&nbsp; {profile.username || notProvided }</li>
          <li><strong>Email:</strong>&nbsp;&nbsp; {profile.email || notProvided }</li>
          <li><strong>Party:</strong>&nbsp;&nbsp; {profile.party || notProvided }</li>
          <li><strong>District:</strong>&nbsp;&nbsp; {profile.district || notProvided }</li>
          <li><strong>Borough:</strong>&nbsp;&nbsp; {profile.borough || notProvided }</li>
          <li><strong>Joined:</strong>&nbsp;&nbsp; {profile.date_joined ? moment(profile.date_joined).format('MMMM Do YYYY') : notProvided }</li>
          <li><strong>Staff:</strong>&nbsp;&nbsp; {profile.is_staff ? 'Yes' : 'No'}</li>
        </ul>
      </div>
      {/* <PreContainerObj many={false} dataObj={profile} /> */}
    </div>
  )
}

export default UserProfile
