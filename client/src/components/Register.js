import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    
    const response = await fetch('http://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username, password, email}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.status === 200){
     
      setRedirect(true);

      alert('registration successful');
    }
    else{
      alert('registration failed');
    }
   
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }
  
  return (
    <div className='register-card'>
        <form className='register' onSubmit={register}> 
            <h1>Register Now</h1>
            <input type="text" placeholder='Your Name' 
            value={username}
             onChange={ev =>  setUsername(ev.target.value)}
            />
            <input type="password" 
            placeholder='Your Password'
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            />
              <input type="text" 
            placeholder='Your email'
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            />

            
            <button class="button-17">Submit</button>
        </form>
    </div>
  ) 
} 

export default Register
