import { useState } from 'react';
import register from '../assets/register.png'


export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

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
      <p>Sign up to create your own food posts. Share us your favorite eats in Queens, NY</p>
      <img className="login_image"src={register} alt="login"/>
    </div>
    <div className="info_login">
    <form className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3>SIGN UP</h3>
      <label>
        Username:
        <input
          type='text'
          placeholder="Enter Username *"
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text'
          name='email'
          placeholder = "name@email.com *"
          value={email}
          onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          placeholder="At Least 6 Characters *"
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
          <br />
         <p className="required"> * Required Fields </p>
      <button className="login_button">Create Account</button>
        </form>
      </div>
      </div>
  );
}
