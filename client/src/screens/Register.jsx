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
      <img className="login_image"src={register}/>
    </div>
    <div className="info_login">
    <form
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
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type='text' name='email' value={email} onChange={handleChange} />
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
      <button>Submit</button>
        </form>
      </div>
      </div>
  );
}
