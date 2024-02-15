import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import '../App.css'

export const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleAbrirClick = () => {
    setNavVisible(true);
  };

  const handleCerrarClick = () => {
    setNavVisible(false);
  };
  return (
    <>
    <header className='bg-gray-100 h-[80px] border-b-2'>
    <div className='absolute top-0'>
          <img className='h-[80px] w-[90px]' src={logo} alt="Software Solutions" />
        </div>
      <nav id='nav' className={navVisible ? 'visible' : ''}>
      <div className="cerrar">
          <button onClick={handleCerrarClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ul className=' ul flex justify-end mr-10'>  
          <li className='pl-20 mt-4'><NavLink className='text-[20px] hover:border-purple-900 hover:border-b-2' to='/'>Home</NavLink></li>
          <li className='pl-20 mt-4'><NavLink className='text-[20px] hover:border-purple-900 hover:border-b-2' to='/about'>About</NavLink></li>
          <li className='pl-20 mt-4'><NavLink className='text-[20px] hover:border-purple-900 hover:border-b-2' to='/products'>Products</NavLink></li>
          <li className='pl-20 mt-4'><NavLink className='text-[20px] hover:border-purple-900 hover:border-b-2' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
      <div className="bars-cont" id="abrir" onClick={handleAbrirClick}>
          <i className="fa-solid fa-bars"></i>
      </div>
    </header>
    </>
  )
}
