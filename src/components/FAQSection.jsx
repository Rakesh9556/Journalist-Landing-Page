import React from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ContactUs } from './ContactUs'

export const FaqSection = () => {
    const faqs = [
        {id:1 , qns: 'What topics are covered in the course?' ,  ans: 'The course covers storytelling techniques, interviewing skills, research methodologies, reporting practices, and industry insights.'},
        {id:2 , qns: 'How long is the course duration?' ,  ans: 'The course lasts for 2 weeks and offers intensive training with practical, hands-on learning.'},
        {id:3 , qns: 'What qualifications do I need to enroll in the course?' ,  ans: 'There are no specific qualifications required to enroll. The course welcomes individuals passionate about journalism and eager to learn from industry experts.'},
        {id:4 , qns: 'What makes this course different from others available?' ,  ans: 'Our course offers a complete curriculum, personal mentorship, and focuses on practical learning. This ensures participants acquire valuable skills applicable to real-world journalism.'},
        {id:5 , qns: 'Is there any networking opportunities available through the course?' ,  ans: 'Yes, you will have the opportunity to connect with fellow aspiring journalists, industry professionals, and the instructor'},
    ]

    const[openFaqId, setOpenFaqId] = useState(null)

        const toggleFaq = (faqId) => {
            setOpenFaqId(openFaqId === faqId ? null : faqId)

        }

    const[isOpenContact, setIsOpenContact] = useState(false)
      const setVisible = () => {
        setIsOpenContact(!isOpenContact)
      }
    

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center md:mt-10 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-custom2  leading-tight text-black text-center ">
            Frequently Asked Questions
          </h2>
        </div>
        {faqs.map(item =>(
            <div key={item.id} className="cursor-pointer rounded-md border border-gray-400  bg-slate-400 bg-opacity-10 shadow-lg transition-all duration-300 mx-3 my-5 md:my-8">
            <button
              onClick={() => toggleFaq(item.id)}
              type="button"
              className="flex w-full items-center justify-between p-4 md:px-4 md:py-6 "
            >
              <span className="flex text-sm md:text-xl text-left font-custom2 font-normal text-black">{item.qns}</span>
              {openFaqId === item.id ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <div className={openFaqId === item.id ? 'px-6 pb-6 md:px-4 md:pb-5 ' : 'hidden'}>
              <p className="text-sm md:text-lg font-custom2 text-left text-gray-500">
                {item.ans}
              </p>
            </div>
          </div>
        ))}
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
        <p className="text-sm md:text-base font-custom2 mt-6  text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <button
          onClick={setVisible}
          className="font-semibold text-black hover:underline">
            Contact our support
          </button>
        </p>
        </div>
        {isOpenContact && (
              <div className="fixed inset-0 z-50  bg-gray-900 bg-opacity-50 transform p-2 transition flex items-center justify-center ">
                <ContactUs setVisible={setVisible} /> 
              </div> 
          )}
        
      </div>
    </section>
  )
}
