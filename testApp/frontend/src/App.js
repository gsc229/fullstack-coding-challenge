import React, {useState} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './Auth/LoginPage'
import DashboardPage from './Pages/DashboardPage'

function App() {

  const [auth, setAuth] = useState({
    isLoading: false,
    isAuthenticated: false
  })


  return (
    <div className="App">

      <Switch>
        <Route exact path='/login' render={() => <LoginPage />}/>
        <Route exact path='/' component={DashboardPage} />
      </Switch>
      
    </div>
  );
}

export default App;
