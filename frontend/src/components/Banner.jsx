import React from 'react'
import banner from "../../public/book1.jpg";

function Banner() {
  return (
   
        <>
 <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row ' >
       <div className='order-2 md:order-1 w-full md:w-1/2 '>
        
       <div className='space-y-11 mt-13 md:mt-38 pt-8 '> 
       <h1 className='text-4xl font-bold mt-16'>Hello , Welcome here to Learn Something <span className='text-pink-500'>New EveryDay !!</span>
       </h1>
       <p className='text-xl '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut non inventore debitis illo. Dolor iusto architecto, porro atque dignissimos iure ipsam error ad veniam, repudiandae illum, optio consequatur! Reiciendis?
       </p>
       <input 
  type="text"
  placeholder="Type here"
  className="input input-bordered input-primary w-full max-w-xl " />
       </div>
       <button className="btn btn-active btn-secondary mt-6">Secondary</button>
   
       </div>
     


       <div className='order-1 w-full md:w-1/2  ml-2 p-20 '>
       <img src={banner} className='  h-90 w-90 mt-8'  alt="book" />
       </div>

       
       </div>
       <br />
       <br />
        </>
      
    
  )
}

export default Banner;
