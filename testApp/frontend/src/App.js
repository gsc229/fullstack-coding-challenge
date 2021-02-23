import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserContext } from './Auth/UserContext'
import { getUserProfile } from './Api/getUserData'
import PrivateRoute from './Auth/PrivateRoute'
import LoginPage from './Auth/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import UserProfilePage from './Pages/UserProfilePage'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [auth, setAuth] = useState({
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    profile: {}
  })

  useEffect(() => {

    const getProfile = async() => {
      const profile = await getUserProfile(true)
      setAuth({
        ...auth,
        profile
      })
    }

    getProfile()

  }, [auth.isAuthenticated])

  return (
    <div className="App">
      
      <Switch>
        <UserContext.Provider value={{auth, setAuth}} >
          <Route path='/login' component={LoginPage}/>
          <PrivateRoute exact path='/' auth={auth} component={DashboardPage} />
          <PrivateRoute path='/user-profile' auth={auth} component={UserProfilePage} />
        </UserContext.Provider>
      </Switch>

    </div>
  );
}

export default App;
