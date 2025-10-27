import React from 'react'

export default function FareCard 
() {

    const fear=[
        {
            district:"Rajshahi",
            img:"Group 1000006306.png",
            pakNo:"18 Packages"
        }
    ]

  return (
   
 <div className='p-16'>
        <h1 className="text-black mt-20 font-bold text-4xl">
          Find great fares
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2 mt-10">
  {/* img-1 */}
  <div className="relative">
    <img
      src="Group 1000006306.png"
      width={1000}
      height={595}
      alt="Image 1"
      className="rounded-2xl w-full h-[250px]  md:h-full object-cover"
    />
    <div className="absolute bottom-4 md:bottom-4 lg:bottom-8 left-4 lg:ml-6 text-white">
      <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
        <h1 className="text-2xl md:text-xl lg:text-4xl font-bold">Rajshahi</h1>
        <p className="bg-yellow-500 text-xs md:text-xs lg:text-sm text-black px-2 py-1 md:p-2 rounded-full">
          18 Packages
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <p className="text-sm md:text-sm lg:text-base">Starts From</p>
        <h1 className="text-lg md:text-lg lg:text-xl font-bold">BDT 55,500</h1>
      </div>
    </div>
  </div>

  {/* column 2 */}
  <div className="grid grid-cols-1 gap-8 md:gap-2">
    {/* img-2 */}
    <div className="relative">
      <img
        src="image 37 (3).png"
        width={700}
        alt="Image 2"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 lg:bottom-8 left-4 lg:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-xl lg:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-xs lg:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2  items-center">
          <p className="text-sm md:text-sm lg:text-base">Starts From</p>
          <h1 className="text-lg md:text-lg lg:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-3 */}
    <div className="relative">
      <img
        src="image 37.png"
        width={700}
        alt="Image 37"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>

  {/* column 3 */}
  <div className="grid grid-cols-1 gap-8 md:gap-2">
    {/* img-4 */}
    <div className="relative">
      <img
        src="image 37 (1).png"
        width={700}
        alt="Image 4"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-5 */}
    <div className="relative">
      <img
        src="image 37 (2).png"
        width={700}
        alt="Image 5"
        className="rounded-2xl w-full h-[200px] md:h-auto object-cover"
      />
      <div className="absolute bottom-4 md:bottom-8 left-4 md:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs md:text-sm text-black px-2 py-1 md:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm md:text-base">Starts From</p>
          <h1 className="text-lg md:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    
  )
}
