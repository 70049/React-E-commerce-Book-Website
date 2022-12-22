import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const notify = () => toast("Login Successful!");
  return (
    <>
      <div className='form'>
        <header id='header'>Login Form</header>
        <input id='email' type="email" placeholder=' Username or Email' required /><br></br>
        <input id='password' maxLength={8} type="password" placeholder='Password' required /><br></br>
        <button id='button'onClick={notify} >Login</button><br></br>
        <ToastContainer />
        <i>Or login with</i>
         
        <div className='logo'>
        <a href='facebook'>
        <svg  id='facebook'  viewBox="0 0 320 512" >
          <path  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"> </path>
        </svg>
      </a>
      </div>
    
      <div className='logo2'>
      <h2 className='logo2-name'>Google</h2>
      <a href="google"> 
        <svg id='google' viewBox="0 0 488 512" >
          <path  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
      </a>
      </div>
      
      <p id='signup'>You don't have Account? Please...<a href='a'>Signup</a> </p>
  </div>
    
    </>
  )
}

export default Login