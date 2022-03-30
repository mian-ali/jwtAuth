import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  // after axio method

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uri = 'http://localhost:8080/api/user/userlogin';
      const { data: res } = await axios.post(uri, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <h1>Login User</h1>

      <input
        type="email"
        onChange={handleChange}
        placeholder="Enter Email"
        name="email"
        value={data.email}></input>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter password"
        name="password"
        value={data.password}></input>
      {error && <div>{error}</div>}

      <button onClick={handleSubmit}>Login User</button>
    </div>
  );
}

export default Login;
