import React from 'react'

const Register = () => {
  return (
    <div className='register-card'>
        <form className='register'> 
            <h1>Register Now</h1>
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Your Username'/>
            <input type="password" placeholder='Your Password'/>
            <input type="text" placeholder='Your Email Id'/>
            <button class="button-17">Submit</button>
        </form>
    </div>
  )
}

export default Register
