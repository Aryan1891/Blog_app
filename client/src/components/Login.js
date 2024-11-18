import {Navigate} from "react-router-dom";
import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
    
    const response = await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })

    if(response.ok){
      setRedirect(true);
    }
    else{
      alert('login failed');
    }
   

  }
  if(redirect){
    return <Navigate to={'/'}/>
  }
  return (
    <div className='login-card' >
        <form className='login' onSubmit={login}> 
            <h1>Login Now</h1>
            <input type="text"
            placeholder='Your Username'
            value={username}
            onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password" 
            placeholder='Your Password'
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            />
            <button class="button-17">Login</button>
        </form>
    </div>
  )
}

export default Login
