import React from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
        <Nav/>
        <div className="w-full flex justify-center mt-14 p-5 md:p-1 ">
          <div className="w-[90%] md:w-full pt-10 flex md:flex-col justify-center">
            <div className="w-[50%] md:w-full pt-12 p-10 flex flex-col  gap-3 bg-about pb-10 ">
              <h1 className='text-7xl md:text-5xl'>Revealing Our Dedication to Excellence</h1>
              <p className='text-lg w-[75%] mt-5 pb-5'> As an esteemed institution with a rich legacy, we are dedicated to providing an exceptional educational experience.</p>
              <Link to="/about" className='border w-[200px] text-center mt-5 border-black p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg  bg-black text-white hover:bg-transparent hover:text-black'>Contact Us</Link>
            </div>
            <div className=" library w-[50%] h-full md:h-[400px] md:w-full "> </div>
          </div>
        </div>
        {/* end of about hero */}
        <div className="w-full flex justify-center mt-14 p-5 md:p-1 ">
          <div className="w-[90%] pt-5 pb-5 p-9 flex flex-col gap-3 justify-center bg-purple ">
              <h1 className='text-7xl md:text-4xl pb-10 md:pb-7'>The love of Christ has gathered us together into one</h1>
              <hr className='bg-black h-[2px]' />
              <p className='text-lg md:text-base pb-20'>The motto of St. Ignatius College School</p>
          </div>
        </div>
        {/* end of school motto */}
        <div className="w-full flex justify-center mt-14 p-5 md:p-1 ">
          <div className="w-[90%] flex md:flex-col justify-between gap-3">
            <div className="w-[50%] md:w-full flex flex-col gap-3">
              <h1 className='text-5xl md:text-3xl w-[90%]'>Discover St. Ignatius College School</h1>
              <Link to="/" className='border w-[200px] text-center mt-5 border-black p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg  bg-black text-white hover:bg-transparent hover:text-black'>Our Departments</Link>
            </div>
            <div className="w-[50%] md:w-full flex flex-col gap-3 text-base">
                  <p>The school is organized on a two-semester system and courses are offered at the Academic, Applied, Locally Developed,
                    and Pre-Advanced Placement levels in grades 9 and 10, 
                    and at the University, College, Workplace, and Advanced Placement levels in grades 11 and 12.
                 </p>
                  <p>Our school is a certified Eco-School at the Silver Level. Our community shows an ongoing commitment to the well-being of
                    our environment through a comprehensive recycling and education program. The success of our co-op program 
                    is enhanced by the resources accessible to us in our immediate community. Our students benefit from a rich variety 
                    of work experiences due to our proximity to the Bay Street business district, Queen’s Park, Toronto hospitals, theatres, 
                    universities, colleges, museums, art galleries and many others.
                  </p>
                    <p>
                        Our location provides our students and teachers with unique opportunities. Being in the heart of Toronto and next door to the University of Toronto, 
                        the Royal Ontario Museum, and the Ontario Legislature, among others, allows teachers to enrich the curriculum.
                        St. Ignatius College School is a diverse and progressive community where every attempt is made to meet the needs of all students.
                    </p>
            </div>
          </div>
        </div>
        {/* our leadership */}
        <div className="w-full flex flex-col justify-center  items-center mt-20">
                  <div className="w-[90%] md:w-[100%] sm:w-full xsm:w-full  md:p-6">
                    <div className="flex md:flex-col justify-between items-start">
                      <h1 className='text-6xl md:text-5xl sm:text-4xl'>Our Leadership</h1>
                      {/* <Link className='border border-black p-5 md:p-3 md:pl-4 md:pr-4 pl-7 pr-7 rounded-r-full bg-black text-white rounded-l-full text-lg md:w-[200px] md:text-center md:mt-4' >Learn More</Link> */}
                    </div>
                  
                    <div className="grid grid-cols-3 md:grid-cols-1  gap-5 mt-10">

                      <div className="">
                        <div className="h-[500px] principal">
                        </div>
                        <div className="flex flex-col justify-between gap-3">
                          <h1 className='text-3xl '>Anna Patejczuk</h1>
                          <hr className='h-[2px] bg-black' />
                          <p className='text-lg'>Principal</p>
                        </div>
                      </div>
                      {/* principal */}
                      <div className="">
                      <div className="h-[500px] trustee">
                        </div>
                        <div className="flex flex-col justify-between gap-3">
                          <h1 className='text-3xl '>Kevin Morrison</h1>
                          <hr className='h-[2px] bg-black' />
                          <p className='text-lg'>Trustee</p>
                        </div>

                      </div>
                      <div className="">
                      <div className="h-[500px] intendent">
                        </div>
                        <div className="flex flex-col justify-between gap-3">
                          <h1 className='text-3xl '>Jack Dixon</h1>
                          <hr className='h-[2px] bg-black' />
                          <p className='text-lg'>Superintendent</p>
                        </div>
                      </div>
                     
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

export default About