import React from 'react'
import { useState } from 'react';
import heroImg from '../assets/img.png'
import { CtaSection } from './CtaSection'; 


export function HeroSection({btnText}) {

  const[isCtaOpen, setIsCtaOpen] = useState(false)
    const handleClick = () => {
       setIsCtaOpen(!isCtaOpen)
  }

  return (
    <div className="relative w-full bg-skyblue-300">
      <div className="mx-auto max-w-full  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 md:py-16 lg:py-28 md:my-28 lg:col-span-7  lg:gap-x-6 lg:px-6  xl:col-span-6">
          <h1 className="mt-8 lg:mt-0 text-4xl font-custom font-bold tracking-tight text-black md:text-4xl lg:text-7xl">
            Master class on Journalism
          </h1>
          <h2 className='mt-4 text-xl md:text-2xl lg:text-4xl font-custom1 font-semibold tracking-tight text-black '>
          Unlock the Secrets with Mr. Arun
          </h2>
          <p className="mt-4 font-custom3 text-sm md:text-xl text-gray-700">
            <em>Gain valuable insights from an Retired Journalist</em>
          </p>
          <blockquote>
          <p className="mt-8 font-custom2 text-sm md:text-xl text-gray-800">
            <em>
                "With a passion for mentorship and education, I have crafted this 2-week course to equip you with the knowledge and skills needed to thrive in today's media landscape"
            </em>
          </p>
          </blockquote>
          <form action="" className=" mt-6 md:mt-8">
            <button
                onClick={handleClick}
                type="button"
                className="rounded-lg bg-black px-3 py-2.5 lg:h-14 w-1/2 md:w-1/3 lg:w-1/3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {btnText}
              </button>
          </form>
          {isCtaOpen && (
              <div className="fixed inset-0 z-50  bg-gray-900 bg-opacity-50 transform p-2 transition flex items-center justify-center ">
                <CtaSection handleClick={handleClick} /> 
              </div> 
          )}
        </div>
        <div className="relative my-auto lg:col-span-5 lg:-mr-8 xl:col-span-6">
        <div className=" flex justify-center items-end ">
            <img
              className="aspect-[3/2] bg-none object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] rounded-lg"
              src={heroImg}
              alt="Newspaper image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
