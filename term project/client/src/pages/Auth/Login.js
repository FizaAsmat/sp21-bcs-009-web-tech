import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate, useLocation} from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Login = () => {
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const[auth, setAuth]=useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/v1/auth/login',
        {
          email,
          password 
        }
      );
      if(res.data.success){
        alert(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state||'/');
      }else{
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong.');
    }
  };

  return (
    <Layout>
    <div className='register'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control" 
            id="exampleInputEmail1" 
            placeholder='Enter Your Email'
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control" 
            id="exampleInputPassword1"
            placeholder='Enter Your Password'
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  </Layout>
  );
};

export default Login;