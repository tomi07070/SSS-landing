import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink  } from 'react-router-dom';
import { animateScroll } from 'react-scroll';



  
    
  


export const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const scrollToSection = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
    return (
    <>
    <article>
      <section>
        <div className='flex justify-center'>
        <h1 className='text-2xl ml-[30px] mt-[50px]'>
          <span className=' text-5xl text-purple-950 font-bold'>SOFTWARE SOLUTIONS</span> <br /> <br /> Your Gateway to Cutting-Edge SaaS Solutions!
        </h1>
        </div>
        <div className='flex justify-center mt-[40px]'>
          <h4 className=' w-[300px] md:w-[400px] text-center '>At SOFTWARE SOLUTIONS, we are on a mission to revolutionize the way businesses operate
             by providing innovative and tailored Software as a Service (SaaS) solutions.</h4>
        </div>
        
        <div className='flex justify-center mt-[50px]'>
            <NavLink to='/products'>
            <div>
              <button className='bg-purple-950 hover:bg-purple-700 text-white p-3 rounded-[40px]'>Get started</button>
            </div>
            </NavLink>
            <div className='ml-6'>  
            
                <button onClick={scrollToSection} className='bg-purple-950 hover:bg-purple-700 text-white p-3 w-[40px] rounded-full	' id='btn'>
                  <i class="fa-solid fa-down-long"></i>
                </button>
              
            </div>
        </div>
        <div id='home'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:ml-10 lg:grid-cols-3 lg:ml-5 xl:ml-16 mt-[300px] gap-[30px]'>
          <div className='w-[150xp] md:w-[300px] xl:w-[400px] h-[200px] border-2 shadow-2xl	p-2 rounded-md	'>
            <i className="fa-solid fa-arrow-up-right-dots text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>Scalable Solutions</h1>
              <p>Scale your business effortlessly with our SaaS solutions. Adapt to changing needs and expand operations seamlessly.</p>
            </div>
          </div>
          <div className='w-[150xp] md:w-[300px] xl:w-[400px] h-[200px] border-2 shadow-2xl	p-2 rounded-md	'>
            <i className="fa-solid fa-users text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>User-Friendly Interface</h1>
              <p>Intuitive design for effortless navigation. No extensive training required - start maximizing productivity instantly.</p>
            </div>
          </div>
          <div className='w-[150xp] md:w-[300px] md:mt-[30px] xl:w-[400px] lg:mt-0 h-[200px] border-2  shadow-2xl	p-2 rounded-md	'>
            <i className="fa-solid fa-puzzle-piece text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>Customizable Solutions</h1>
              <p>Tailor our SaaS solutions to fit your unique requirements. Enjoy the flexibility of customization for a personalized experience.</p>
            </div>
          </div>
          <div className='w-[150xp] md:w-[300px] xl:w-[400px] h-[200px] border-2 shadow-2xl	p-2 rounded-md	mt-[30px]'>
            <i className="fa-solid fa-gears text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>Seamless Integration</h1>
              <p>Effortlessly integrate our solutions with your existing systems. Enjoy a seamless workflow with our interoperable technology.</p>
            </div>
          </div>
          <div className='w-[150xp] md:w-[300px] xl:w-[400px] h-[200px] border-2 shadow-2xl	p-2 rounded-md	mt-[30px]'>
            <i className="fa-solid fa-phone-flip text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>24/7 Support</h1>
              <p>Dedicated support around the clock. Our expert team is ready to assist you anytime, ensuring a smooth and hassle-free experience.</p>
            </div>
          </div>
          <div className='w-[150xp] md:w-[300px] xl:w-[400px] h-[200px] border-2 shadow-2xl	p-2 rounded-md	mt-[30px]'>
            <i className="fa-solid fa-hand-holding-dollar text-3xl text-purple-950"></i>
            <div>
              <h1 className='text-2xl pb-2 pt-2'>Cost-Effective Solutions</h1>
              <p>Maximize value with cost-effective solutions. Achieve your goals without breaking the bank with our budget-friendly options.</p>
            </div>
          </div>
        </div>
        <div id='why-choose-us' className='why-choose-us-section'>
          <h2 className='flex justify-center mt-[100px] ml-10 md:ml-0 text-purple-950 text-3xl  font-bold'>Why SOFTWARE SOLUTIONS?</h2>
          <div className='h-[200px] flex justify-center mt-[30px] ml-[-30px]'>
          <Slider {...sliderSettings} className=' w-[300px] md:w-[600px] lg:w-[800px]'>
            <div className=''>
              <i className="fa-solid fa-book flex justify-center text-purple-950 text-3xl mt-5"></i>
              <h3 className='flex justify-center font-bold text-xl mb-5'>Expertise</h3>
              <p className='flex justify-center ml-10 md:ml-0'>Years of experience in delivering top-notch SaaS solutions.</p>
            </div>
            <div className=''>
              <i className="fa-solid fa-lightbulb flex justify-center text-purple-950 text-3xl mt-5"></i>
              <h3 className='flex justify-center font-bold text-xl mb-5'>Innovation</h3>
              <p className='flex justify-center ml-10 md:ml-0'>Constantly evolving and staying ahead with innovative technologies.</p>
            </div>
            <div className='why-choose-us-item'>
              <i className="fa-solid fa-face-smile flex justify-center text-purple-950 text-3xl mt-5"></i>
              <h3 className='flex justify-center font-bold text-xl mb-5'>Customer-Centric</h3>
              <p className='flex justify-center ml-10 md:ml-0'>Putting our customers' needs at the center of everything we do.</p>
            </div>
            </Slider>
          </div>
        </div>
      </section>
    </article>
    </>
  )
}
