import React from 'react'

export const Contact = () => {
  return (
    <>
    <article>
      <section>
        <div className='flex justify-center mt-[30px] div-c'>        
          <h1 className='text-6xl font-bold	text-purple-950'>Get in touch</h1>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className='flex justify-center'>
          
          <input type="hidden" name="access_key" value="152ee1ee-5abd-44a5-b629-280903566a0a"/>
          
          <div className='mt-[20px] border-4 p-5 rounded-s-2xl w-[350px] border-gray-500	div-f'>
            <div className='pt-5'>
              <input type="text" placeholder='Name' name='name' required className='p-1 placeholder-black w-[300px] outline-none	border-2 border-gray-500 rounded-lg		'/>
            </div>
            <div className='pt-5'>
              <input type="email" placeholder='Email' name='email' required className='p-1 placeholder-black w-[300px] outline-none	border-2 border-gray-500 rounded-lg		'/>
            </div>
            <div className='pt-5'>
              <textarea className='w-[300px] p-1 max-w-[300px] min-h-[270px] max-h-[300px] placeholder-black outline-none border-gray-500 rounded-lg border-2' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
            <div>
              <button className='bg-purple-950 p-2 text-white w-[300px] mt-2 hover:bg-purple-700' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </section>
    </article>
    </>
  )
}
