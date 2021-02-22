import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import DarkSpinner from '../Components/Spinners/DarkSpinner'

const PrivateRoute = ({component: Component, auth, ...rest}) => (
  <Route 
  {...rest}
  render={props => {

    if(auth.isLoading){
      return <DarkSpinner text='Loading...' />
    }

    if(!auth.isAuthenticated){
      return <Redirect to='/login' />
    }

    return <Component {...props} />


  }}
  />
)

export default PrivateRoute
