import React from 'react'

export const About = () => {
  return (
    <>
     <h1 className='flex justify-center text-purple-950 mt-10 text-5xl font-bold ml-10 md:ml-0'>About Software Solutions</h1>
          <div className=''>
            <div className='flex justify-center'>
            <p className='w-[300px] md:w-[600px] mt-5'>
              At Software Solutions, we understand that in today's dynamic business landscape,
               adaptability is key. Our mission is to empower organizations with scalable and customizable
                SaaS solutions that enable them to thrive in an ever-evolving digital environment.
            </p>
            </div>
            <div className='grid xl:grid-cols-2 grid-cols-1 mt-[100px]'>
            <div>
            <h2 className='flex justify-center text-purple-950 text-3xl font-bold mb-5'>Our Mission</h2>
            <p className='md:w-[500px] w-[200px] ml-[50px] mb-6 md:ml-[150px] lg:ml-[240px] xl:ml-[170px]'>
              Our mission is to be a catalyst for positive change in businesses worldwide. We aim to revolutionize the way organizations operate by offering innovative, user-friendly, and cost-effective SaaS solutions that streamline processes, enhance efficiency, and foster growth.
            </p>
            </div>
            <div>
            <h2 className='flex justify-center text-purple-950 text-3xl font-bold mb-5'>Our Values</h2>
            <p className='md:ml-[150px] ml-[50px] mb-6 md:w-[500px] w-[200px] lg:ml-[240px] xl:ml-[170px]'>
              At Software Solutions, our values are the foundation of everything we do. We believe in transparency, collaboration, and a relentless pursuit of excellence. These values guide our interactions with clients, partners, and within our own team, fostering a culture of trust and innovation.
            </p>
            </div>
            </div>
          </div>
    </>
  )
}
