import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const[name, setName]= useState("");
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const[phone, setPhone]= useState("");
  const[address, setAddress]= useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/v1/auth/register',
        {name,email,password,phone,address }
      );
      if(res.data.success){
        alert(res.data.message);
        navigate('/login');
      }else{
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong.');
    }
  };
  return (
    <Layout>
      <div className='register'>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="form-control" 
              id="exampleInputName1" 
              placeholder='Enter Your Name'
              required
            />
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
          <div className="mb-3">
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control" 
              id="exampleInputPhone1" 
              placeholder='Enter Your Phone'
              required
              />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control" 
              id="exampleInputAddress1"
              placeholder='Enter Your Address'
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;