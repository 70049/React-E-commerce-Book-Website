import React from 'react'

const Navbar = () => {
  return (
    <>

      <nav class="p-6  border-lime-900  bg-gray-400  dark:bg-lime-800 dark:border-lime-700">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="ae" class="flex items-center">
            <img src="data:image/png;base64,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" class="h-6 mr-5 sm:h-10 rounded" alt=" Logo" />
            <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white text-white">Book Store</span>
          </a>

          <div class=" mr-11 hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-m md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="a" class=" mr-10 block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="b" class=" mr-10 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About US</a>
              </li>
              <li>
                <a href="c" class=" mr-10 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Books</a>
              </li>
              <li>
                <a href="d" class=" mr-10 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar