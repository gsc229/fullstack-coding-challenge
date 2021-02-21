import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWIthAuth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

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

  const handleSubmit = () => {

  }

  return (
    <div>
      <h4>Login</h4>
      <div className='login-form-container'>
        <Form className='login-form'>
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
          variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login
