import React from 'react'
import LayoutLoggedOut from '../Layouts/LayoutLoggedOut'
import Login from '../Auth/Login'

const LoginPage = ({setAuth}) => {
  return (
    <LayoutLoggedOut >
      <div className="login-page">
        <Login setAuth={setAuth} />
      </div>
    </LayoutLoggedOut>
  )
}

export default LoginPage
