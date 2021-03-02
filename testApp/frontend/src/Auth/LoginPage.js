import React, { useContext } from 'react'
import { UserContext } from '../Auth/UserContext'
import LayoutLoggedOut from '../Layouts/LayoutLoggedOut'
import Login from '../Auth/Login'
import LightSpinner from '../Components/Spinners/LightSpinner'

const LoginPage = () => {

  const { auth } = useContext(UserContext)

  return (
    <LayoutLoggedOut >
      <div className="login-page">
        {!auth.isLoading && <Login />}
        {auth.isLoading && !auth.errorMessage && <LightSpinner text='Logging in...' />}
      </div>
    </LayoutLoggedOut>
  )
}

export default LoginPage
