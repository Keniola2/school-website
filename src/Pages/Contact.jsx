import React from 'react'
import Nav from '../Component/Nav'
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div>
        <Nav/>
        <div className="w-full flex justify-center mt-14 p-5 pb-5 md:p-1">
          <div className="w-[90%]  pt-10   flex  md:flex-col justify-center">
          <div className="w-[50%] md:w-full pt-12 p-10  flex flex-col  gap-3 bg-pink pb-40 ">
              <h1 className='text-7xl md:text-5xl'>St. Ignatius College School Contacts</h1>
              <p className='text-lg w-[75%] mt-5 pb-5'> Whether you're a prospective student, parent, alumni, or community member, we value your feedback and are eager to assist you.</p>
              {/* <Link to="/about" className='border w-[200px] text-center mt-5 border-black p-5 pl-7 pr-7 rounded-r-full rounded-l-full text-lg  bg-black text-white hover:bg-transparent hover:text-black'>Contact Us</Link> */}
            </div>
            <div className=" contact w-[50%] h-full md:h-[400px] md:w-full "> </div>
          </div>
        </div>
          {/* end of hero section */}
          {/* stay connected with the school */}
          <div className="w-full flex justify-center mt-14 p-5 pb-5 md:p-1">
            <div className="w-[90%] pt-10 flex flex-col  md:gap-3 md:flex-col ">
              <h1 className='text-7xl md:text-5xl w-[60%] md:w-full'>Stay Connected With The School</h1>

              <div className="grid grid-cols-3 md:grid-cols-1 gap-3 mt-10">

                {/* visit us */}
                <div className="flex flex-col gap-3 bg-blue p-7">
                  <h1 className='text-3xl'>Visit us</h1>
                  <hr className='h-[2px] bg-black' />
                  <p className='pb-5'>Come visit us at St Ignatus college school convinently located in Toronto. We look forward
                    to welcoming you to our vibrant new community.
                  </p>
                  <div className="flex gap-3 items-center">
                    <a href='https://g.co/kgs/HHZUiZG' target='blank'>View on map</a>
                    <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                  </div>
                </div>
                {/* end of visit us */}
                <div className="flex flex-col gap-3 bg-blue p-7">
                <h1 className='text-3xl'>Email us</h1>
                  <hr className='h-[2px] bg-black' />
                  <p className='pb-5'>Wheather you are a prospective student, parent, community member, we are here to provide you with
                  the information you seek.
                  </p>
                  <div className="flex gap-3 items-center">
                  <a href='mailto:eniolahabeeb98@gmail.com'>Email Us</a>
                    <div className=" border border-black p-2 flex items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                  </div>
                </div>
                {/* end of email us */}
                <div className="flex flex-col gap-3 bg-blue p-7">
                <h1 className='text-3xl'>Call us</h1>
                  <hr className='h-[2px] bg-black' />
                  <p className='pb-5'>Contacting Us at St Ignaitus college School is just a phone call away. We value open communication and we are ready to assist you.
                  </p>
                  <div className="flex gap-3 items-center">
                  <a href='tel:+2349071752143'>Call Us</a>
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
          {/* contact form */}
          <div className="w-full flex justify-center mt-10 p-5 pb-5 md:p-1">
          <div className="w-[90%]  pt-5  flex   md:flex-col justify-center">
          <div className="w-[50%] md:w-full pt-12 p-10  flex flex-col  gap-3 bg-lightyellow pb-20 ">
            <h1 className='text-7xl md:text-5xl '>Reach Out to Us</h1>
            <p className='text-base'>Whether you have questions, feedback, or inquiries, we welcome your messages.
               Fill out the form below with your contact information and message, and our dedicated team will respond to you promptly.</p>
            <form action="" className='flex flex-col gap-3   '>
              <input type="text" name="" id=""  placeholder='Full Name' className='pt-3 pb-3 bg-transparent bb '/>
              <input type="email" name="" id="" placeholder='Email' className='pt-3 pb-3 bg-transparent bb' />
              <input type="number" name="" id="" placeholder='Phone' className='pt-3 pb-3 bg-transparent bb' />
              <textarea name="" id="" cols="10" rows="1" className=' resize-none pt-3 pb-3 bg-transparent bb p-2 flex items-center  ' placeholder='What intrest you?' ></textarea>
              <button className='w-[160px] pt-4 pb-4 p-5 border bg-black text-white hover:bg-white hover:text-black rounded-r-3xl rounded-l-3xl mt-3'>Send Message</button>
            </form>
              
            </div>
            <div className=" contact-form w-[50%] h-full md:h-[400px] md:w-full "> </div>
          </div>
        </div>
        {/* end of contact form */}
        {/* socials */}
        <div className="w-full flex justify-center mt-10 p-5 pb-5 md:p-1">
          <div className="w-[90%] pt-5 ">
            <h1 className='text-7xl md:text-5xl w-[50%] md:w-full'>Follow St. Ignatius College School</h1>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-1 mt-20">
              {/* facebook */}
              <div className="pt-2 pb-2 ">
                <hr className='h-[2px] bg-black' />
                  <div className="mt-3">
                  <a href="#" className=' flex justify-between items-center '>
                    <h1 className='text-4xl font-light'>Facebook</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </a>
                  </div>
              </div>
              {/* end of facebook */}
              {/* twitter */}
            <div className="pt-2 pb-2">
            <hr className='h-[2px] bg-black' />
                  <div className="mt-3">
                  <a href="#" className=' flex justify-between items-center '>
                    <h1 className='text-4xl font-light'>Twitter</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </a>
                  </div>
            </div>
            {/* youtube */}
              <div className="pt-2 pb-2">
              <hr className='h-[2px] bg-black' />
                  <div className="mt-3">
                  <a href="#" className=' flex justify-between items-center '>
                    <h1 className='text-4xl font-light'>Youtube</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </a>
                  </div>
              </div>
              {/* Instagram */}
              <div className="pt-2 pb-2">
              <hr className='h-[2px] bg-black' />
                  <div className="mt-3">
                  <a href="#" className=' flex justify-between items-center '>
                    <h1 className='text-4xl font-light'>Instagram</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </a>
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

export default Contact