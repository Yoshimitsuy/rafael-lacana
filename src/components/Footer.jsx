import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaInstagram, FaTwitter, FaTwitch, FaSpotify } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='flex fixed flex-col bottom-[1%] right-0 lg:hidden'>
        <ul className='flex'>
          
          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[10px] duration-300 bg-[#0077b5]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://www.linkedin.com/in/rafael-lacana/' target='_blank' rel='noreferrer'>
              <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://github.com/Yoshimitsuy' target='_blank' rel='noreferrer'>
              <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#48b9a1]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-800' href='/' target='_blank' rel='noreferrer'>
              <FaMailBulk size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='/' target='_blank' rel='noreferrer'>
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#E4405F]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://www.instagram.com/yoshimitsuy/' target='_blank' rel='noreferrer'>
              <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://twitter.com/Yoshimitsuy' target='_blank' rel='noreferrer'>
              <FaTwitter size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:mb-[20px] duration-300 bg-[#9146FF]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-800' href='https://www.twitch.tv/yoshimitsuy_' target='_blank' rel='noreferrer'>
              <FaTwitch size={30} />
            </a>
          </li>

          <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-120px] hover:mb-[20px] duration-300 bg-[#1ED760]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-800' href='https://open.spotify.com/user/yoshimitsuy?si=b076136d3c0640c4&nd=1' target='_blank' rel='noreferrer'>
              <FaSpotify size={30} />
            </a>
          </li>

        </ul>

        </div>
    </div>
  )
}

export default Footer