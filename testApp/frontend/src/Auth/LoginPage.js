import React from 'react'
import LayoutLoggedOut from '../Layouts/LayoutLoggedOut'
import Login from '../Auth/Login'

const LoginPage = () => {
  return (
    <LayoutLoggedOut >
      <div className="login-page">
        <Login />
      </div>
    </LayoutLoggedOut>
  )
}

export default LoginPage
