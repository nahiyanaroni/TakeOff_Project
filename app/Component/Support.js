import React from 'react'

export default function Support({ imgSrc, title, description }) {
  return (
    <div className=" bg-white rounded-xl shadow-md p-6 cursor-pointer  hover:scale-110 transition ">
     <div className='flex  '>
     
       <img src={imgSrc} alt={title} className="w-16 h-16 object-contain" />
      <h1 className="text-2xl text-black font-bold mt-4">
        {title}
      </h1>
     </div>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}

