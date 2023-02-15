import React from 'react'

// import aws from '../assets';
import css from '../assets/css.png';
// import firebase from '../assets';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
// import sk from '../assets';
import tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300 py-4'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the tecnologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={github} alt="HTML icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={tailwind} alt="HTML icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={javascript} alt="HTML icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={node} alt="HTML icon" />
            <p className='my-4'>NODE</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={react} alt="HTML icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={mongo} alt="HTML icon" />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={html} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='rounded-lg shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='m-5 w-20 mx-auto' src={css} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills