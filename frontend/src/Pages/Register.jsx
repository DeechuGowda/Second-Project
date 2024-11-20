import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const navigate=useNavigate()

    const RegisterUser = async (e) => {
      e.preventDefault()
      //check if passwords match before sending to the backend
      if(password !== confirmPassword){
        alert('password do not match')
        return;
      }
      try {
        const response = await axios.post('http://localhost:5000/api/user/',{
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        })
        
        console.log(response)
        alert('Registered Successfully')
        navigate('/login')
        
      } catch (error) {
        if(error.response){
          alert(error.response.data.message)//shows the error from the backend
        }else{
          alert('Failed to register')
        }
      }
    }
  return (
    <div className="register">
      <h1>Registration Form</h1>
      <form onSubmit={RegisterUser}>
        <label htmlFor ="firstname">firstname</label>
        <input type ="text" placeholder="enter your firstname" onChange={(e)=>setFirstName(e.target.value)}required></input><br/>
        <label htmlFor ="lastname">lastname</label>
        <input type ="text" placeholder="enter your lastname"onChange={(e)=>setLastName(e.target.value)}required></input><br/>
        <label htmlFor ="email">Email</label>
        <input type ="email" placeholder="enter your email"onChange={(e)=>setEmail(e.target.value)}required></input><br/>
        <label htmlFor ="password">Password</label>
        <input type ="password" placeholder="enter your password"onChange={(e)=>setPassword(e.target.value)}required></input><br/>
        <label htmlFor ="Confirm password">Confirm Password</label>
        <input type ="password" placeholder="enter your Confirm password"onChange={(e)=>setConfirmPassword(e.target.value)}required></input><br/>
        <button onClick={RegisterUser}>submit</button>
      </form>

    </div>
  )
}

export default Register
