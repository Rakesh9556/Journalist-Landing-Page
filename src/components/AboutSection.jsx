import React from 'react'
import careerIcon from '../assets/career.svg'
import mentorshipIcon from '../assets/mentorship.svg'
import interviewIcon from '../assets/interview.svg'
import networkIcon from '../assets/network.svg'
import insightsIcon from '../assets/insights.svg'
import storyTellingIcon from '../assets/storytelling.svg'



export function AboutSection() {
    const learn = [
        { id: 1 , img: careerIcon , heading: 'Career Advancement', content: 'Acquire the knowledge and skills needed to kickstart or advance your career in journalism, setting yourself apart in a competitive industry.' },
        { id: 2 , img: mentorshipIcon , heading: 'Mentorship', content: 'Receive personalized mentorship and guidance ' },
        { id: 3 , img: interviewIcon , heading: 'Interviewing Skills', content: 'Develop strong interviewing skills by learning from Mr. Arun who has conducted countless interviews throughout his career' },
        { id: 4 , img: networkIcon , heading: 'Networking Oppurtunities', content: 'Connect with fellow aspiring journalists and industry professionals, expanding your network and potential career opportunities' },
        { id: 5 , img: insightsIcon , heading: 'Practical Insights', content: 'Gain practical insights and real-world knowledge from the expert' },
        { id: 6 , img: storyTellingIcon , heading: 'Storytelling Techniques', content: 'Learn effective storytelling techniques gained through years of experience. ' },

      ];

  return (
    <div id='aboutSection' className="px-2 py-2 md:px-6 md:py-10 text-center h-fit">
      <h1 className="mt-8 text-3xl font-custom2 text-black lg:text-5xl">
        What You'll Learn
      </h1>
      
      <hr className='border-b-2 w-1/2 mx-auto mt-0.5 md:mt-4' />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {learn.map( item => (
          <div key={item.id} className="space-y-3 my-2 md:my-10 flex-col justify-center items-center">
            <span className="inline-block rounded-full h-12 w-12 md:h-16 md:w-16 bg-gray-100 p-3 text-black">
              <img src={item.img} alt="not found"  />

            </span>
            <h1 className="text-md md:text-xl lg:text-2xl font-custom3 capitalize text-black">{item.heading}</h1>
            <p className="text-sm md:text-xl font-custom2 text-gray-600 px-5">
              
              {item.content}
            </p>
          </div>

          
        ))}

      </div>
    </div>
  )
}
