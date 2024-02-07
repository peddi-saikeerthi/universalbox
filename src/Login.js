import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import "./Login.css"
import { Link } from 'react-router-dom';

import { Card ,Input,Button} from 'react-rainbow-components';
import Header from './Header';


const Login = ({ history }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulating POST request, replace with actual fetch request to backend
    // Example: fetch('http://localhost:5000/login', { method: 'POST', body: JSON.stringify(formData) })
    // Handle response, for this example, just redirect to the dashboard
    history.push('/dashboard');
  };
  const inputStyles = {
    Width: 400,
};

  return (
  
    <div  className="bg"  >
        <Header/>
      <form onSubmit={handleSubmit}>
      <Card className='log_card'>
      
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          className='mail'
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          className='mail'
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Link to="/dashboard">
        <Button type='link' className='sign'>LOGIN</Button></Link>
        </Card>
      </form>
     
    </div>
  );
};

export default withRouter(Login);