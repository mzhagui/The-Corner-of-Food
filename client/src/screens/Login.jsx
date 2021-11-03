import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import login from '../assets/login.png'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login_container">
      <div className="login_side">
        <h3>The Corner of Food</h3>
        <p>Welcome back, please log in to continue posting your all time faves!</p>
        <img className="login_image"src={login}/>
      </div>
      <div className="info_login">
    <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      Not a Member Yet? <Link to='/register'>Register</Link>
      <button className="login_button">Submit</button>

        </form>
        </div>
      </div>
    
  );
}
