import React from 'react'
import { Link } from 'react-router-dom'
import BG from '../assets/bg/BG.jpg'
import logo from '../assets/logo.png'
import Header from './header'

export default function home() {
  function slideUp() {
    const page = document.getElementById('first-slide')
    const content = document.getElementById('Main-content')
    page.classList.add('translate-y-[-100%]', 'duration-500')
    setTimeout(() => {
      content.classList.remove('hidden')
    }, 100)
  }
  return (
    <>
      <div className="Home-page-container h-screen w-screen absolute z-20 overflow-hidden" id='first-slide'>
        <div className='h-screen w-screen bg-gradient-to-t from-black/80'>
          <img src={BG} alt='bg' className='h-screen sm:w-screen absolute object-cover right-0 left-0 -z-10'></img>
          <img src={logo} alt='SIC_Logo' className='absolute top-0  right-0 m-5 sm:h-20 h-14' ></img>

          <div className='h-screen w-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-5'>
              <h1 className='sm:text-8xl text-4xl poppins-bold text-white relative bottom-5'>SIC GEHU</h1>
              <div className='flex justify-center'>
                <button onClick={slideUp} className='Get-started-btn w-fit shadow-sm shadow-gray-700 p-4 text-xl bg-slate-300 poppins-semibold rounded-full hover:bg-slate-500 hover:text-slate-50 animate-pulse duration-1000 hover:animate-none relative bottom-5'>Get Started</button>
              </div>
            </div>
          </div>

          <div className='Text-content'>
            <div className='About absolute right-0 bottom-0 sm:mr-5 z-30 m-2'>
              <div className='bg-white/20 h-fit w-fit p-4 border rounded-3xl'>
                <div className='poppins-semibold text-white lg:text-xl md:text-lg text-[8px]'>
                  <div className='poppins-bold justify-start flex mb-2'>About Us</div>
                  <div>Since 2018, we’ve been Uttarakhand’s</div>
                  <div>first recognized incubator, driving</div>
                  <div>innovation and entrepreneurship. We</div>
                  <div>help overcome challenges, attract</div>
                  <div>talent and investment, and</div>
                  <div>strengthen the local</div>
                  <div>economy.</div>
                  <Link to={'/about'}>
                    <button className='absolute right-0 bottom-3 mr-5 border rounded-full md:p-5 lg:p-5 p-2 rotate-180'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#FFF" className="lg:size-10 md:size-8 size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='absolute bottom-0 left-0 text-white'>
              <div className='bg-black w-fit p-6 md:p-5 sm:p-4 poppins-regular lg:text-2xl md:text-sm text-[8px] rounded-r-2xl rounded-b-none rounded-l-none'>Incubating your <p>dreams into reality</p></div>
              <div className='bg-black w-fit p-6 md:p-5 sm:p-4 poppins-bold lg:text-8xl md:text-4xl text-xl rounded-r-2xl  rounded-b-none rounded-l-none'>Start Up</div>
              <div className='bg-black w-fit p-6 md:p-5 sm:p-4 poppins-bold lg:text-8xl md:text-4xl text-xl rounded-r-2xl  rounded-b-none rounded-l-none'>Incubation Cell</div>
            </div>
          </div>
        </div>
      </div >

      <div className='Main-Content z-10 hidden' id='Main-content'>
        <div className='Navigation'>
          < Header />
        </div>

        <div className='Content'>
          <img className='absolute top-0 right-0 m-5 sm:h-20 h-14' src={logo} alt="logo"></img>

          <div className='h-screen w-screen flex justify-center items-center'>
            <h1 className='poppins-semibold text-xl'> Check Event Page!</h1>
          </div>

        </div>

      </div>
    </>
  )
}
