import React from 'react'

function Main() {
  return (
   
    <>
    <div class="relative"> 
      <img class=" w-full h-full bg-no-repeat" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLqiD7Ca7J9ZfH46xAv8G8XCYz8xdddPH5w&usqp=CAU' alt=' '/>
      


     <h1  class="absolute top-80 ml-96  text-fuchsia-400  font-bold text-6xl">Tryzentt Book Store</h1>
      <span class="cursor-pointer bg-red-500 h-7 w-16 top-96 absolute float-left ml-28 text-black font-bold text-sm pt-1 pl-2 rounded">SHARE</span>
      <span class="cursor-pointer bg-yellow-500 h-7 w-20 top-96 absolute ml-5 float-left text-black font-bold text-sm pt-1 pl-2 rounded">EXPLORE</span>
      <span class="cursor-pointer bg-green-500 h-7 w-20 top-96 absolute ml-48 text-black font-bold text-sm pt-1 pl-2 rounded">AMPLIFY</span>
    </div>

    </>
  )
}

export default Main