import React from 'react'
import Nav from '../Component/Nav'
import { FaCar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidNetworkChart } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <Nav/>
        {/* hero container */}
        <div className="w-full flex justify-center mt-14 p-5 md:p-1  ">
          <div className="w-[90%] md:w-[100%] sm:w-full xsm:w-full p-5 flex justify-center md:flex-col ">
            {/* hero left */}
            <div className="flex flex-col justify-between gap-4 w-[50%] md:w-full pt-20 pb-10">   
            <h1 className='text-7xl md:text-5xl '>Empowering Minds, Inspiring Futures</h1>
            <p className=' text-xl w-[80%] md:w-full mt-2 '>Welcome to St. Ignatius College School! Get ready for another year of learning and growing together. We're excited to have you here!</p>
            <div className="flex gap-4 items-center text-center mt-5">
              <Link to="/about" className='border border-black p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg  bg-black text-white hover:bg-transparent hover:text-black'>About School</Link>
              <Link to="/contact" className='border border-black p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg  hover:bg-black hover:text-white '>Contact Us</Link>
              </div>
            </div>
            {/* hero right */}
            <div className="h-auto md:h-[60vh] border border-red w-[50%] md:w-full sm:w-full background flex items-end ">
              <div className="h-[40%] md:h-[45%] w-[70%] md:w-full bg-yellow p-5 ">
                <h3>Mar 3</h3>
                <h1 className='text-4xl md:text-3xl'>PA Day for Elementary and Secondary Schools</h1>
                <div className="flex mt-5 md:mt-2 md:pb-5">
                  <p>Discover Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of hero container */}
        {/* Join our community */}
        <div className="w-full flex flex-col justify-center items-center p-5 pt-20  ">
          <div className="w-[90%] md:w-[100%] bg-yellow p-10 ">
            <div className="pt-5 pb-5">
            <h1 className='text-7xl md:text-5xl sm:text-4xl'>Join Our Welcoming Community through St. Ignatius College School Admissions</h1>
            <button className='border border-black hover:bg-black hover:text-white p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg md:w-full mt-5 '>Learn More</button>
            </div>
          </div>
          {/* <div className="w-[90%] heroVector h-[200px]">  
            </div> */}
        </div>
        {/* end of join our community */}
        {/* essential resources */}

        <div className="w-full flex flex-col justify-center items-center mt-10">
          <div className="w-[90%] md:w-[100%] sm:w-full xsm:w-full p-5 md:p-6">
          <h1 className='text-5xl md:text-4xl sm:text-3xl' >Essential Resources <br /> for Students</h1>
          <div className="grid grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-5 mt-5 pt-10 pb-5">
            {/* transportation */}
            <div className="bg-blue p-3 flex flex-col justify-between gap-3 pb-15">
              <div className="pt-4"><FaCar className='text-3xl' /></div>
              <h3 className='text-3xl font-light'>Transportation Options for Students</h3>
              <p className=' text-md'>The Toronto Cathloic District School Board (TCDS) works with the Toronto student 
                Transportation group provide transportation for qualifying children. </p>
              <div className="flex gap-4 mt-20 pb-5">
                <p>Learn More</p>
                <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            {/* transportation ends */}
            <div className="bg-blue p-3 flex flex-col justify-between gap-3 pb-15">
            <div className="pt-4"><FaBook className='text-3xl' /></div>
              <h3 className='text-3xl font-light'>Online School Library and Databases</h3>
              <p className=' text-md'>Access to academic journals, particles and research papers is crucial for student's academic projects and assignment.
                Stay updated on the latest research trends. </p>
              <div className="flex gap-4 mt-10 pb-5">
                <p>Learn More</p>
                <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            {/* online school and data base ends */}
            <div className="bg-blue p-3 flex flex-col justify-between gap-3 pb-15">
            <div className="pt-4"><BiSolidNetworkChart className='text-3xl' /></div>
              <h3 className='text-3xl font-light'>Tools for Writing and Research Online </h3>
              <p className=' text-md'>Enhance writing proeficiency by refining language skills, meticulosly ensuring grammatical accuracy, and meticulosly detecting
                plagiarism through advance online tools.
               </p>
              <div className="flex gap-4 mt-10  pb-5">
                <p>Learn More</p>
                <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
            {/* tools for writing research online */}
            <div className="bg-blue p-3 flex flex-col justify-between gap-3 pb-15">
            <div className="pt-4"><FaBookOpen className='text-3xl' /></div>
              <h3 className='text-3xl font-light'>Career Exploration and Planning Tools </h3>
              <p className=' text-md'>Engage in exploration of various career options, conduction of in-depth reasearch into diverse industries, and strategically plan
                educational pursuit and career pathways
               </p>
              <div className="flex gap-4 mt-10 pb-5">
                <p>Learn More</p>
                <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        {/* end of essential resources */}
              {/* comprehensive student services */}
              <div className="w-full flex flex-col justify-center items-center mt-10 ">
                <div className="w-[90%] md:w-[100%] sm:w-full xsm:w-full p-5 md:p-6">
                    <div className=" flex justify-between md:w-[70%] md:flex-col  md:items-start md:gap-3 items-center">
                      <h1 className='text-4xl'>
                      Comprehensive <br /> Student Services
                      </h1>
                      <button className='border border-black p-5 h-12 flex items-center pl-7 pr-7 rounded-r-full rounded-l-full text-lg md: '>Learn More</button>
                    </div>


                    <div className="grid grid-cols-3 md:grid-cols-1 gap-4 mt-10 pt-5">
                        
                        <div className="h-[500px]  flex flex-col justify-end items-center  pic-1 ">
                          <div className="w-[90%] flex flex-col justify-between pb-10 ">
                          <h1 className='text-3xl text-white pb-2 '>Academic Counselling</h1>
                          <hr className='pb-2'/>
                          <p className='text-white'>Counsellors provide individual and group support in the areas of 
                            course selection, pathway planning, post secondary applications, scholarships, 
                            and access to study supports and peer tutoring.
                          </p>
                          </div>
                        </div>
                        
                    
                      <div className="h-[500px] pic-2 flex flex-col justify-end items-center   ">
                       
                      <div className="w-[90%] flex flex-col justify-between pb-7 ">
                          <h1 className='text-3xl text-white pb-2 '>Personal Counselling</h1>
                          <hr className='pb-2'/>
                          <p className='text-white'>Provides support and resiliency skills to manage stress, anxiety, 
                          relationships and personal decision making.  
                          Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.
                          </p>
                          </div>
                          
                      </div>
                      <div className="h-[500px] pic-3 flex flex-col justify-end items-center ">

                      <div className="w-[90%] flex flex-col justify-between pb-7 ">
                          <h1 className='text-3xl text-white pb-2 '>Resources and Information</h1>
                          <hr className='pb-2'/>
                          <p className='text-white'>Designed to support and enhance the learning journey of our students, this invaluable platform
                           provides easy access to a wide range of educational materials,
                            helpful guides, research databases, and interactive tools.
                          </p>
                          </div>

                      </div>
                    </div>

                {/* end of comprehensive student services */}

                <div className="w-full flex flex-col justify-center  items-center mt-20 ">

                  <div className="w-100%] md:w-[100%] sm:w-full xsm:w-full  md:p-6 sticky ">

                    <div className="h-[400px] md:h-[300px] w-[100%] bg-darkblue mt-5 p-10 pt-10 ">
                      <h1 className=' text-7xl md:text-4xl sm:text-3xl'>
                      Explore Diverse Departments Available In Our School
                      </h1>
                      <button className='border border-black p-5 md:p-3 md:pl-4 md:pr-4 pl-7 pr-7 mt-10 rounded-r-full bg-black text-white rounded-l-full text-lg md:w-full'>Explore Departments</button>
                    </div>
                    <div className="h-[400px] md:h-[300px] w-[100%] bg-green mt-5 p-10 pt-10   ">
                    <h1 className=' text-7xl md:text-4xl sm:text-3xl'>
                    Embark on Academic Excellence: Advanced Placement Program
                      </h1>
                      <button className='border border-black p-5 md:p-3 md:pl-4 md:pr-4 pl-7 pr-7 mt-10 rounded-r-full bg-black text-white rounded-l-full text-lg md:w-full'> About Program </button>
                    </div>
                    <div className="h-[400px] md:h-[300px] w-[100%] bg-purple mt-5  p-10 pt-10 " >
                    <h1 className=' text-7xl md:text-4xl sm:text-3xl'>
                    St. Ignatius College School's Comprehensive Safe Program
                      </h1>
                      <button className='border border-black p-5 md:p-3 md:pl-4 md:pr-4 pl-7 pr-7 mt-10 rounded-r-full bg-black text-white rounded-l-full text-lg md:w-full'>About Program</button>

                    </div>
                  </div>

                </div>
                {/* our leadership */}
                <div className="w-full flex flex-col justify-center  items-center mt-20">
                  <div className="w-[100%] md:w-[100%] sm:w-full xsm:w-full  md:p-6">
                    <div className="flex md:flex-col justify-between items-center">
                      <h1 className='text-6xl md:text-5xl sm:text-4xl'>Our Leadership</h1>
                      <Link className='border border-black p-5 md:p-3 md:pl-4 md:pr-4 pl-7 pr-7 rounded-r-full bg-black text-white rounded-l-full text-lg md:w-[200px] md:text-center md:mt-4' >Learn More</Link>
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

export default Home