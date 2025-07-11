import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values,setValues]=useState({
        name:"",
        email:"",
        phone:""
    })
    const navigate=useNavigate();

   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 🔹 Step 1: Get existing users
      const res = await axios.get('http://localhost:4000/users');
      const users = res.data;

      // 🔹 Step 2: Calculate next numeric ID
      const nextId = users.length > 0
        ? Math.max(...users.map(user => Number(user.id))) + 1
        : 1;

      // 🔹 Step 3: Add new user with the generated ID
      await axios.post('http://localhost:4000/users', { id: nextId, ...values });

      // 🔹 Step 4: Navigate back to home
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light w-100 vh-100'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                    onChange={e=>setValues({...values, name:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-control' placeholder='Enter Email'
                    onChange={e=>setValues({...values, email:e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='phone'>Phone:</label>
                    <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
                    onChange={e=>setValues({...values, phone:e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Create

