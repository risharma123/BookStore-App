import React from 'react'


function Home() {
  return (
   
      <div className='h-[100vh] flex'>
      <div className='w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
      <h1 className='text-4xl lg:text-6xl font-semibold text-orange-600 text center lg:text-left'>
        Discover Your Next Great Read
      </h1>
      <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>
         Uncover captivating stories,enriching knowledge,and endless 
         inspriration in our curated collection of books.
      </p>
      <button className='text-orange-600 text-2xl font-semibold border border-orange-600 px-9 py-3 rounded-full mt-4 hover:bg-orange-500 transition-all duration-300 hover:text-white '>
          Discover Book
      </button>
      </div>
  {/* <div className='flex items-center justify-center rounded-lg overflow-hidden shadow-md shadow-zinc-500'> */}
  <img  src='./photo/bookstore.png.webp' alt="upload file..." className='md:w-[50%]lg:w-3/6 lg:h-[100%] shadow-md shadow-zinc-500 rounded-lg'/>
  {/* </div> */}
  </div>
  

  )
}

export default Home