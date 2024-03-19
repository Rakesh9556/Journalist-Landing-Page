import { useState } from 'react'
// import './App.css'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Testimonial } from './components/Testimonial'
import { AboutSection } from './components/AboutSection'
import { FaqSection } from './components/FAQSection'

function App() {

  return (
    
    <>
    
    <div className='w-screen h-screen'><div className='w-screen h-fit bg-blue-700 bg-opacity-40'>
      <Navbar btnText = "Join Now"/>
      <HeroSection btnText = "Join Now"/>
    </div>
      <div className='my-12 px-5 md:py-10'>
      <Testimonial />
      </div>
      <div className=' flex  justify-center items-stretch min-h-screen h-fit  bg-blue-700  bg-opacity-40 py-8'>
      <AboutSection />
      </div>
      <div className='bg-white my-10'>
      <FaqSection />
      </div>
      
    </div>
    
    </>
      
   
  )
}

export default App
