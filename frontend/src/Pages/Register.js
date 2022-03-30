import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    tc: '',
  });

  const [error, setError] = useState('');
  // after axio method
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uri = 'http://localhost:8080/api/user/register';
      const { data: res } = await axios.post(uri, data);
      navigate('/login');
      console.log(res.message);
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
      <h1>Register User</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter name"
        name="name"
        value={data.name}></input>
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
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter password_confrim"
        name="password_confirmation"
        value={data.password_confirmation}></input>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter name"
        name="tc"
        value={data.tc}></input>

      {error && <div>{error}</div>}

      <button onClick={handleSubmit}>Register User</button>
    </div>
  );
}

export default Register;
