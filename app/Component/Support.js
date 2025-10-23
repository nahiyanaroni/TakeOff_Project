import React from 'react'

export default function Support({imgSrc, title, description}) {
  return (
    <div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <img src={imgSrc} alt={title} className="w-16 h-16 object-contain" />
            <h1 className="text-2xl text-black font-bold mt-4">
              {title}
            </h1>
            <p className="text-gray-600 mt-2">
              {description}
            </p>
        </div>
    </div>
  )
}
