import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const notify = () => toast("Registered Successfully");
  return (
    <>
    <div className='registration'>
   <div className='headeer'>
    <h1>Registration Form</h1>
   </div><br></br>
   <span id='u'>User Name</span>
    <div className='username'>
       <input type='text' className='username' placeholder='Username' autoComplete='off' required />
    </div><br></br>
    <span id='f'>First Name</span>
    <div className='fname'>
        <input type="text" className='fname' placeholder='First Name' autoComplete='off' required />
    </div><br></br>
    <span id='l'>Last Name</span>
    <div className='l-name'>
        <input type="name"  className='l-name' placeholder='Last Name' autoComplete='off' required/>
    </div><br></br>
    <span id='e'>Email-id</span>
    <div className='email'>
        <input type="email" className="email" placeholder="Enter Email" autoComplete='off' required />
    </div><br></br>

    <span id='c'>Contact</span>
    <div className='contact'>
        <input type="number" className="contact" placeholder="Contact Number"  required/>
    </div><br></br>
    <span id='d'>D-O-B</span>
    <div className='dob'>
       <input type="date"  className='dob' placeholder='D-O-B' required/>
    </div>
    <div className='gender'>
        <span id='g'>gender</span><br></br>
        Male:<input id='male' type="radio" className='male' name='gender' required />
        Female:<input id='female' type="radio" className="Female" name="gender" required />
    </div><br></br>
    <div className='password'>
        <span id='p'>Password</span>
        <input type="password" className="password" placeholder="Password" maxLength={8} required />
    </div><br></br>
    <div className='repassword'>
        <span id='c-p'>Conform Password</span>
        <input type="password" className="repassword" placeholder='Conform Password' maxLength={8} required />
    </div><br></br>
    <div className='button'>
        <button onClick={notify}>Register</button>
        <ToastContainer />
    </div>
    <i class="text-red-500 font-italic">Or Register Yourself through...</i><br></br>
    {/* Facebook */}
    <button id='b1' data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
    <svg viewBox="0 0 320 512" class="w-4 h-4">
      <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  </button>
  {/* Google */}
  <button id='b2' data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >
    <svg viewBox="0 0 488 512" class="w-4 h-4">
      <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
    </svg>
  </button>
  {/* Instagram */}
  <button id='b3' data-mdb-ripple="true" data-mdb-ripple-color="light" class="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >
    <svg viewBox="0 0 448 512" class="w-4 h-4">
      <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  </button>


    </div>
    
    </>
  )
}

export default Signup