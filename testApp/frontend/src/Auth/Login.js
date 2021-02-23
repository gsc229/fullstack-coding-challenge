import React, {useState, useContext} from 'react'
import { UserContext } from './UserContext'
import axios from 'axios'
import {loginUrl} from '../config/config'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const Login = () => {

  const { auth, setAuth } = useContext(UserContext)

  const history = useHistory()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''

  })

  const [loginErrorMessage, setLoginErroMessage] = useState('')

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAuth({
      ...auth,
      isLoading: true
    })
    axios
    .post(loginUrl, credentials)
    .then(loginResponse => {
      localStorage.setItem('token', loginResponse.data.token)
      history.push('/')
      setAuth({
        ...auth,
        isAuthenticated: true,
        isLoading: false
      })
    })
    .catch(loginError => {
      console.log({loginError})
      setLoginErroMessage('Username or password is incorrect.')
    })
  }

  if(loginErrorMessage){
    setTimeout(() => { setLoginErroMessage('') }, 4000)
  }


  return (
      <div className='login-form-container'>
      <h4>Login</h4>
        <Form 
        onSubmit={handleSubmit}
        className='login-form'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
            onChange={handleChange} 
            name='username'
            value={credentials.username}
            type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your info with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            onChange={handleChange} 
            name='password'
            value={credentials.password}
            type="password" placeholder="Password" />
          </Form.Group>
          {loginErrorMessage && <Alert variant='danger'>{loginErrorMessage}</Alert>}
          <Button 
          onSubmit={handleSubmit}
          type="submit">
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default Login
