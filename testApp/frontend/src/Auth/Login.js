import React, {useState} from 'react'
import axios from 'axios'
import {loginUrl} from '../config/config'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

  const history = useHistory()

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''

  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post(loginUrl, credentials)
    .then(loginResponse => {
      localStorage.setItem('token', loginResponse.data.token)
      history.push('/')
    })
    .catch(loginError => {
      console.log({loginError})
    })
  }

  return (
    <div>
      <h4>Login</h4>
      <div className='login-form-container'>
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
          <Button 
          onSubmit={handleSubmit}
          type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
