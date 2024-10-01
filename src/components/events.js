import React from "react"
import Header from './header'

import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import logo from '../assets/logo.png';

export default function Event() {

  const callouts = [
    {
      name: 'Event 1',
      description: '',
      imageSrc: image1,
      imageAlt: 'img1',
      href: '#',
    },
    {
      name: 'Event 2',
      description: '',
      imageSrc: image2,
      imageAlt: 'img2',
      href: '#',
    },
    {
      name: 'Event 3',
      description: '',
      imageSrc: image3,
      imageAlt: 'img3',
      href: '#',
    },
    {
      name: 'Event 4',
      description: '',
      imageSrc: image4,
      imageAlt: 'img4',
      href: '#',
    },
    {
      name: 'Event 5',
      description: '',
      imageSrc: image5,
      imageAlt: 'img5',
      href: '#',
    },
    {
      name: 'Event 6',
      description: '',
      imageSrc: image6,
      imageAlt: 'img6',
      href: '#',
    },
  ]
  return (
    <>
      <div className="Navigation">
        <Header />
      </div>
      <div className="bg-gray-100 rounded-xl -z-10 h-screen w-screen lg:overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 lg:max-w-none pb-0">
            <div className="flex items-center gap-5 justify-between py-10 ">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 poppins-bold">Events</h2>
                <p className="poppins-semibold sm:text-lg lg:text-xl leading-8 my-5">Attend our interactive workshops, panel discussions, <br />
                  pitch nights, and networking mixers to enhance your <br />
                  skills, grow your venture, and expand your community.</p>
              </div>
              <img className="absolute top-0  right-0 m-5 sm:h-20 h-14" src={logo} alt="logo" />
            </div>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0 relative bottom-20 bg-slate-200 p-5 pb-2 rounded-xl">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white aspect-auto group-hover:opacity-75 sm:h-64">
                    <a href={callout.href}><img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                    </a>
                  </div>
                  <h3 className="flex justify-center mt-2 text-sm text-gray-500 poppins-semibold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}