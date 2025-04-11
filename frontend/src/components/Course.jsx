import React from 'react'
import list from "../../public/list.json"
import Laura from './Cards';



function Course() {
  return (

    <>
    <div className='max-w-full container mx-auto md:px-20 px-4'>

<div className='mt-28 item-center justify-center text-center'>
  
  <h1 className='text-2xl  md:text-4xl' >we're delighted to have you <span className='text-pink-500'> Here ! :</span> </h1>

<p style={{marginTop:"2rem"}}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, natus ipsum mollitia tempore omnis laborum commodi, vitae neque repellat corporis molestias dolor, nisi dolorum reprehenderit sunt illum? Optio quasi dolore in, corporis dignissimos provident consectetur deleniti aperiam quisquam laudantium, facere pariatur fugiat repellendus molestiae. Distinctio, saepe. Inventore cupiditate quam quaerat?
  </p>
  <br />
  <a href="/">
  <button className='bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-700 duration:300 '>back</button>
  </a>
</div> 

<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
 {list.map((item)=>(
  <Laura item={item} key={item.id} />
))}
</div>


</div>
     
    </>
  )
}

export default Course;

































// style={{marginTop:"5rem", fontFamily:"bold",marginLeft:"10rem"}}