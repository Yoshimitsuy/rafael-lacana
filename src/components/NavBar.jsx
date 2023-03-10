import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMailBulk, FaInstagram, FaTwitter, FaTwitch, FaSpotify } from 'react-icons/fa'
// import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/yoshimitsuy-logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      
      <div>
        <img src={Logo} alt='logo' style={{width: '50px'}} />
      </div>

      {/* menu */}
        <ul className='hidden lg:flex'>
          <li>
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
            Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
            Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>
        </ul>


      {/* hamburger for respons. */}
        <div onClick={handleClick} className='lg:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
            </Link>
          </li>
        </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[20%] left-0'>
        <ul>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://www.linkedin.com/in/rafael-lacana/' target='_blank' rel='noreferrer'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://github.com/Yoshimitsuy' target='_blank' rel='noreferrer'>
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#48b9a1]'>
            <a
              className='flex justify-between items-center w-full font-bold text-gray-800'
              href='mailto:rafael.lacana@hotmail.com' 
              target='_blank' 
              rel='noreferrer'
            >
              Email<FaMailBulk size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='/' target='_blank' rel='noreferrer'>
              Contact <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E4405F]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://www.instagram.com/yoshimitsuy/' target='_blank' rel='noreferrer'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-300' href='https://twitter.com/Yoshimitsuy' target='_blank' rel='noreferrer'>
              Twitter <FaTwitter size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9146FF]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-800' href='https://www.twitch.tv/yoshimitsuy_' target='_blank' rel='noreferrer'>
              Twitch <FaTwitch size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1ED760]'>
            <a className='flex justify-between items-center w-full font-bold text-gray-800' href='https://open.spotify.com/user/yoshimitsuy?si=b076136d3c0640c4&nd=1' target='_blank' rel='noreferrer'>
              Spotify <FaSpotify size={30} />
            </a>
          </li>

        </ul>

        </div>
    </div>
  );
}

export default NavBar;
