import React from 'react'

const Login = () => {
  return (
    <div className='login-card'>
        <form className='login'> 
            <h1>Login Now</h1>
            <input type="text" placeholder='Your Username'/>
            <input type="password" placeholder='Your Password'/>
            <button class="button-17">Login</button>
        </form>
    </div>
  )
}

export default Login
