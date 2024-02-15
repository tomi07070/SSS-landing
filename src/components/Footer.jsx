import React from 'react'
import {  NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className='h-[190px] bg-purple-900 mt-[100px] md:'>
        <ul className='block ml-[50px]'>
          <h4 className='text-white ml-2'>SOCIAL</h4>
          <li className='pt-2 ml-[20px]'><a href='https://twitter.com/your_web_dev0' target='blank'><i className=" text-gray-300 hover:text-white fa-brands fa-x-twitter"></i></a></li>
          <li className='pt-2 ml-[20px]'><a href='https://www.linkedin.com/company/software-solutions0/about/?viewAsMember=true' target='blank'><i className=" text-gray-300 hover:text-white fa-brands fa-linkedin"></i></a></li>
          <li className='pt-2 ml-[20px]'><a href='https://www.youtube.com/channel/UCQJbJOKe81AEZEE8Wzx8SQQ' target='blank'><i className=" text-gray-300 hover:text-white fa-brands fa-youtube"></i></a></li>
          <li className='pt-2 ml-[20px]'><a href='https://www.tiktok.com/@software_solutions0' target='blank'><i className=" text-gray-300 hover:text-white fa-brands fa-tiktok"></i></a></li>
        </ul>
        <ul className='relative top-[-150px] w-[100px] left-[190px]'>
          <h4 className='text-white ml-2'>PAGES</h4>
          <li className='pt-2 ml-[10px] w-[100px]'><NavLink to='/' className='text-gray-300 hover:text-white'>Home</NavLink></li>
          <li className='pt-2 ml-[10px] w-[100px]'><NavLink to='/about' className='text-gray-300 hover:text-white'>About us</NavLink></li>
          <li className='pt-2 ml-[10px] w-[100px]'><NavLink to='/products' className='text-gray-300 hover:text-white'>Products</NavLink></li>
          <li className='pt-2 ml-[10px] w-[100px]'><NavLink to='/contact' className='text-gray-300 hover:text-white'>Contact</NavLink></li>
        </ul>
        
        </footer>
    </>
  )
}
