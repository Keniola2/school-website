import React from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div>
        <Nav/>
        <div className="w-full flex justify-center mt-14 p-5 md:p-1">
          <div className="w-[90%]  pt-10 flex gap-5 md:gap-3 md:flex-col justify-center ">
            <div className="h-[500px] md:h-[300px] w-[60%] md:w-full building"></div>
            <div className="flex flex-col gap-5 md:gap-3 w-[40%] h-auto md:w-full">
              <div className="h-[50%] md:h-[250px] classroom"></div>
              <div className="outside h-[50%] md:h-[250px]"></div>
            </div>
          </div>
        </div>




           {/* footer */}
           <div className="w-full bg-blue flex flex-col items-center justify-center mt-20 p-5 pt-20">
                  <div className="  w-[90%] grid grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
                      <p>School</p>
                      <hr className='h-[2px] bg-black' />
                      <div className="flex flex-col gap-3  ">
                        <Link className='hover:text-yellow'>About</Link>
                        <Link className='hover:text-yellow'>Services</Link>
                        <Link className='hover:text-yellow'>Admissions</Link>
                        <Link className='hover:text-yellow'>News & Events</Link>
                        <Link className='hover:text-yellow'>Contact Us</Link>
                      </div>
                    </div>
                    {/* end of school */}
                    <div className="flex flex-col gap-3">
                      <p>Academics</p>
                      <hr className='h-[2px] bg-black' />
                      <div className="flex flex-col gap-3  ">
                        <Link className='hover:text-yellow'>Department</Link>
                        <Link className='hover:text-yellow'>Advanced Placement Program</Link>
                        <Link className='hover:text-yellow'>Safe Schools Program</Link>
                      
                      </div>
                    </div>
                    {/* end of academics */}
                    <div className="flex flex-col gap-3">
                      <p>Follow Us</p>
                      <hr className='h-[2px] bg-black' />
                      <div className="flex flex-col gap-3  ">
                        <Link className='hover:text-yellow'>Facebook</Link>
                        <Link className='hover:text-yellow'>Twitter</Link>
                        <Link className='hover:text-yellow'>Youtube</Link>
                        <Link className='hover:text-yellow'>Instagram</Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-[90%] flex items-center justify-center p-5">
                  <span className='text-base'>  &copy; 2024 Sage Studios </span>
                  </div>
                </div>
       </div>
  )
}

export default Gallery