import React from 'react'

export function Testimonial() {
  return (
    <section className="px-4 py-2 md:px-0">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center space-x-4 md:space-x-14">
          <div className="relative h-20 w-20 lg:h-48 lg:w-48 flex-shrink-0">
            <img
              className="relative h-20 w-20 lg:h-48 lg:w-48 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

          <div className="mt-0 md:mt-0">
            <blockquote>
            <p className="text-[10px] md:text-xl text-black tracking-wider leading-tight font-light">
                <em>
                "Throughout my journey, I have witnessed the evolution of journalism and have been deeply involved in its transformative process. From covering local stories to reporting on global events, I have dedicated myself to the pursuit of truth and storytelling"
                </em>
            </p>
            </blockquote>
            <p className="mt-2 md:mt-7 text-sm md:text-lg font-semibold text-black">Mr. Arun <span className='text-[10px] md:text-base font-normal text-gray-600'><em>(Retired Journalist)</em></span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
