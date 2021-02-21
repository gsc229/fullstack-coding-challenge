import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import LoginPage from './Auth/LoginPage'
import DashboardPage from './Pages/DashboardPage'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/' component={DashboardPage} />
      </Switch>
      
    </div>
  );
}

export default App;
