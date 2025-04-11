import React from 'react'


function Cards( {item} ) {
  return (
    <>
    
    <div className='mt-5 my-3 p-5' >
    <div className="card bg-base-100 w-70 h-80 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}  alt="Shoes" 
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.tittle}</p>
    <div className="card-actions justify-between mt-6">
      <div className="badge badge-outline ">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]   badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  );
}

export default Cards;
