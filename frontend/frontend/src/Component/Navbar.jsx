import React from 'react'
import { PiBooksThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

function Navbar() {
  const links=[
    {title:"Home",
      link:"/",
    },
  
    {title:"All Books",
      link:"/all-books",

    },
    {title:"Cart",
      link:"/cart",

    },
    {title:"Profile",
      link:"/profile",

    },

  ];
  return (
    <div className='bg-zinc-800 text-white px-8 py-4 flex items-center justify-between'>
      <Link to="/" className='flex items-center'>
      <PiBooksThin className='text-4xl text-orange-500'/>
       <h1 className='text-2xl font-semibold'>Book Store</h1> 
      </Link>
      <div className='nav-links-books flex gap-4 items-center'>
        <div className='flex gap-4 font-semibold'>
        {links.map((item,i)=>
        (<Link to={item.link}
          className='hover:text-orange-600 transition-all duration-300'
        key={i}>{item.title}</Link>
        ))}
      </div>
      <div className='flex gap-4'>
        <Link to = '/LogIn' className='font-semibold border border-orange-600 py-1 px-2 rounded hover:bg-orange-500 hover:transition-all duration-300'>LogIn</Link>
        <Link to = '/SignUp' className='font-semibold bg-orange-600 py-1 px-2 rounded border border-orange-600 hover:bg-zinc-800 hover:border transition-all duration-300'>SignUp</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar