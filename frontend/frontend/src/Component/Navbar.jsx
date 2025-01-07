import React, { useState } from 'react'
import { PiBooksThin } from "react-icons/pi";
import { TbBaselineDensitySmall } from "react-icons/tb";
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
 const[mobilenav,setMoblienav]= useState("hidden")
  return (
    <>
    <nav  className='z-50 relative bg-zinc-800 text-white px-8 py-4 flex items-center justify-between '>
      <Link to="/"
       className='flex items-center'>
      <PiBooksThin className='text-4xl text-orange-500'/>
       <h1 className='text-2xl font-semibold'>Book Store</h1> 
      </Link>
      <div className='nav-links-books block md:flex gap-4 items-center'>
        <div className='hidden md:flex gap-4 font-semibold'>
        {links.map((item,i)=>
        (<Link to={item.link}
          className='hover:text-orange-600 transition-all duration-300'
        key={i}>{item.title}</Link>
        ))}
      </div>
      <div className=' hidden md:flex gap-4'>
        <Link to = '/LogIn' className='font-semibold border border-orange-600 py-1 px-2 rounded hover:bg-orange-500 hover:transition-all duration-300'>LogIn</Link>
        <Link to = '/SignUp' className='font-semibold bg-orange-600 py-1 px-2 rounded border border-orange-600 hover:bg-zinc-800 hover:border transition-all duration-300'>SignUp</Link>
      </div>
      <button className='text-white text-2xl lg:hidden' onClick={()=>mobilenav==="hidden"?setMoblienav("block"):setMoblienav("hidden")}>
        <TbBaselineDensitySmall />
      </button>
      </div>
    </nav>
<div className={`${mobilenav} bg-zinc-800 h-screen absolute top-0 right-0 w-[300px] z-40 flex flex-col `}>
{links.map((item,i)=>
        (<Link to={item.link}
          className={`${mobilenav} text-white text-2xl font-semibold mt-16 px-16 hover:text-orange-600 transition-all duration-300`}
        key={i}>
          {item.title}</Link>
        ))}
         <div className={`${mobilenav} mt-8 flex flex-col gap-4 px-4`}>
        <Link to = '/LogIn' className='font-semibold border text-orange-600 border-orange-600 py-1 px-2 rounded hover:bg-orange-500 hover:text-white  hover:transition-all duration-300'>LogIn</Link>
        <Link to = '/SignUp' className='font-semibold bg-orange-600 text-white py-1 px-2 rounded border border-orange-600 hover:bg-zinc-800 hover:text-orange-600 hover:border transition-all duration-300'>SignUp</Link>
      </div>
        
</div>
    </>
  )
}

export default Navbar