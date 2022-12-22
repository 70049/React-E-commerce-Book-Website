import React , {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

const Herosection = () => {
  const [show,setShow] =useState(false)

  const showName = ()=>{
    if(show === true){
      setShow(false)
    }else{
      setShow(true)
    }
  }
  const [data,sethide] = useState(false)

  const showData = ()=>{
    if(data === true){
      sethide(false)
    }else{
      sethide(true)
    }
  }
  return (
    <>
    <div className='herosection-image'>
        <img src='https://images.all-free-download.com/images/graphiclarge/time_control_background_staff_book_stack_colorful_design_6848644.jpg' alt=' ' />
    </div>
    <div className='herosection-title'>
        <h3 class='ml-28 text-white font-bold pt-5'>Buy And Sell Your Books</h3>
        <p class='ml-10 text-black italic text-sm '>Search and buy book's Near your post and sell old book's...</p>
        <h2 class="ml-5 mt-5 bg-yellow-500 h-7 w-28 rounded-full pl-1.5 rounded-l-none">User Module</h2><br></br>
        <p class='ml-5 text-m text-white'>❁ Create Account</p>
        <p class='ml-5 text-m text-white'>❁ Login</p>
        <p class='ml-5 text-m text-white'>❁ Post free old books</p>
        <p class='ml-5 text-m text-white'>❁ Edit Profile</p>
        <p class='ml-5 text-m text-white'>❁ Change Password</p>
        <p class='ml-5 text-m text-white'>❁ Login Yourself</p><br></br>
        <h4 class='ml-5 bg-neutral-200 pl-2 pt-1 h-8 w-28 rounded cursor-pointer'>Register Now</h4>
    </div>

    <div className='login-button' >
      <img class='h-14 rounded-full  w-24 pl-5 pt-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9iS4887MqYnErWEHhNy-G2i11h3mG8IG9-Q&usqp=CAU' alt=' ' />
        <button class=' mt-4 pl-1 h-8 w-20 ml-5 focus:outline-none text-black bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' onClick={showName}  >Click Here</button>
        {
      show && (<Login />)
    }
      
    </div>

    <div className='logout-button' >
      <img class='h-14 rounded-full w-24 pl-5 pt-1' src='data:image/png;base64,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' alt=' '/>
        <button class=' mt-4 pl-1 h-8 w-20 ml-5 focus:outline-none text-black  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'  onClick={showData}>Register</button>
        {
          data && (<Signup />)
        }
    </div>
    
    </>
  );
}

export default Herosection