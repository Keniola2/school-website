
import React, { useState } from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Nav = () => {
const [nav, setnav] = useState(true)
const handleNav=()=>{
  setnav(!nav)
}
  return (
   <>
    <div className="w-[100%] h-[15vh] md:h-15 flex justify-center fixed top-0 bg-white z-40 " >
        <nav className="w-[90%] sm:w-[95%] md:w-[95%] flex justify-between items-center p-3">
          <div className="flex items-center justify-between pl-4 pr-4">
            <h1  className='ml-2 font-bold md:ml-1'> St Ignaitus <br /> College </h1>
            </div>
            <div className="flex justify-between items-center md:hidden sm:hidden pr-4 ">
            <Link to='/' className='p-2 hover:text-yellow font-regular cursor-pointer transition-all'>Home</Link>
              <Link to='/about' className='p-2 hover:text-yellow font-regular cursor-pointer transition-all'>About</Link>
              <Link to='/gallery' className='p-2 hover:text-yellow font-regular cursor-pointer transition-all'>Gallery</Link>
              <Link to='/contact' className='p-2 hover:text-yellow font-regular cursor-pointer transition-all'>Contact</Link>
             
            </div>
         
              <div className="icon" onClick={handleNav} >
                <Bars3Icon className='cursor-pointer'/>
              </div>
              <div className={!nav?"small-nav":'hide-nav'}>
                <div className="close-icon " onClick={handleNav}><XMarkIcon className='icon-style text-white '/></div>
                <Link to='/' onClick={handleNav} className='nav-list p-2 text-white font-semibold cursor-pointer'>Home</Link>
                <Link to="/about" onClick={handleNav} className='nav-list p-2 text-white font-semibold cursor-pointer'>About</Link>
                <Link to="/gallery" onClick={handleNav} className='nav-list p-2 text-white font-semibold cursor-pointer'>Service</Link>
                <Link to="/contact" onClick={handleNav} className='nav-list p-2 text-white font-semibold cursor-pointer'>Let's talk </Link>
                
              </div>

          </nav>    
          
      </div>
   </>
  )
}

export default Nav