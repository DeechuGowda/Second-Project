
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LoginUser = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', {
                email: email,
                password: password
            });
            console.log(response);
            alert('Login Successfully');
            navigate('/home');

        } catch (error) {
          if(error.response){
            alert(error.response.data.message);//show the error
          }else{

          
            alert('Failed to login')
          }

        }

    };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={LoginUser}>
  <label htmlFor="email">Email:</label>
        
        <input type="email" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} required/><br/>
 <label htmlFor="password">Password:</label>
 <input type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} required /><br/>
 <br/>
 <button type="submit">Login</button>
 </form>
    </div>
  )
}

export default Login
