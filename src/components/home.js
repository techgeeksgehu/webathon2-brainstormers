import React from 'react'
import {Link} from 'react-router-dom'
import BG from '../assets/bg.jpg'
import Header from './header'

export default function home() {
  function slideUp() {
    const page = document.getElementById('first-slide')
    const nav = document.getElementById('content')
    page.classList.add('translate-y-[-100%]', 'duration-500')
    setTimeout(() => {
      nav.classList.remove('hidden', 'translate-x-0')
      nav.classList.add('tranlate-x-[100]')
    }, 320)
  }
  return (
    <>
        <div className="Home-page-container h-screen w-screen relative overflow-hidden z-10" id='first-slide'>
          <div className='h-screen w-screen bg-gradient-to-t from-black/80'>
            <img src={BG} alt='bg' className='h-screen w-screen absolute object-cover right-0 left-0 -z-10'></img>
            <img src='https://tbi.geu.ac.in/assets/tbiLogo-7wOxXMot.png' alt='TBI' className='absolute top-0  right-0 m-5 h-20' ></img>

            <div className='flex justify-center items-center h-screen w-screen'>
              <div className='grid grid-cols-1 gap-5'>
                <h1 className='text-8xl poppins-bold text-white relative bottom-5'>SIC GEHU</h1>
                <div className='flex justify-center'>
                  <button onClick={slideUp} className='Get-started-btn w-fit shadow-sm shadow-gray-700 p-4 text-xl bg-slate-300 poppins-semibold rounded-full hover:bg-slate-500 hover:text-slate-50 animate-pulse duration-1000 hover:animate-none relative bottom-5'>Get Started</button>
                </div>
              </div>
            </div>

            <div className='About absolute right-0 bottom-0 m-5 z-30'>
              <div className='bg-white/20 h-fit w-fit p-6 border rounded-3xl'>
                <div className='poppins-semibold text-white text-xl'>
                  <div className='poppins-bold justify-start flex m-2'>About Us</div>
                  <div>Since 2018, we’ve been Uttarakhand’s</div>
                  <div>first recognized incubator, driving</div>
                  <div>innovation and entrepreneurship. We</div>
                  <div>help overcome challenges, attract</div>
                  <div>talent and investment, and</div>
                  <div>strengthen the local</div>
                  <div>economy.</div>
                  <Link to={'/about'}>
                    <button className='absolute right-0 bottom-3 mr-5 border rounded-full p-5 rotate-180'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#FFF" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='Text-content absolute bottom-0 left-0 text-white'>
              <div className='bg-black w-fit p-6 poppins-regular text-3xl rounded-r-3xl rounded-b-none rounded-l-none'>Incubating your <div>dreams into reality</div></div>
              <div className='bg-black w-fit p-6 poppins-bold text-8xl rounded-r-3xl  rounded-b-none rounded-l-none'>Start Up</div>
              <div className='bg-black w-fit p-6 poppins-bold text-8xl rounded-r-3xl  rounded-b-none rounded-l-none'>Incubation Cell</div>
            </div>
          </div>
        </div >
        <div className='z-0' id='content'>
          <Header />
        </div>
    </>
  )
}
