import React from 'react'

export default function FareCard 
() {

  return (
   
 <div className='px-6 md:px-16 lg:px-40 py-16 bg-[#f4faff]'>
        <h1 className="text-black mt-20 font-bold text-4xl">
          Find great fares
        </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-2 mt-10">
  {/* img-1 */}
  <div className="relative">
    <img
      src="Group 1000006306.png"
      width={1000}
      height={595}
      alt="Image 1"
      className="rounded-2xl w-full h-[250px]  xl:h-full object-cover"
    />
    <div className="absolute bottom-4  xl:bottom-8 left-4 xl:ml-6 text-white">
      <div className="flex flex-wrap items-center gap-2 mb-2 xl:mb-4">
        <h1 className="text-2xl  xl:text-4xl font-bold">Rajshahi</h1>
        <p className="bg-yellow-500 text-xs xl:text-sm text-black px-2 py-1 xl:p-2 rounded-full">
          18 Packages
        </p>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <p className="text-sm  xl:text-base">Starts From</p>
        <h1 className="text-lg  xl:text-xl font-bold">BDT 55,500</h1>
      </div>
    </div>
  </div>

  {/* column 2 */}
  <div className="grid grid-cols-1 gap-8 xl:gap-2">
    {/* img-2 */}
    <div className="relative">
      <img
        src="image 37 (3).png"
        width={700}
        alt="Image 2"
        className="rounded-2xl w-full h-[200px] xl:h-auto object-cover"
      />
      <div className="absolute bottom-4 xl:bottom-8 left-4 xl:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 xl:mb-4">
          <h1 className="text-2xl  xl:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs xl:text-sm text-black px-2 py-1 xl:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2  items-center">
          <p className="text-sm  xl:text-base">Starts From</p>
          <h1 className="text-lg  xl:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-3 */}
    <div className="relative">
      <img
        src="image 37.png"
        width={700}
        alt="Image 37"
        className="rounded-2xl w-full h-[200px] xl:h-auto object-cover"
      />
      <div className="absolute bottom-4 xl:bottom-8 left-4 xl:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 xl:mb-4">
          <h1 className="text-2xl xl:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs xl:text-sm text-black px-2 py-1 xl:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm xl:text-base">Starts From</p>
          <h1 className="text-lg xl:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>

  {/* column 3 */}
  <div className="grid grid-cols-1 gap-8 xl:gap-2">
    {/* img-4 */}
    <div className="relative">
      <img
        src="image 37 (1).png"
        width={700}
        alt="Image 4"
        className="rounded-2xl w-full h-[200px] xl:h-auto object-cover"
      />
      <div className="absolute bottom-4 xl:bottom-8 left-4 xl:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 xl:mb-4">
          <h1 className="text-2xl xl:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs xl:text-sm text-black px-2 py-1 xl:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm xl:text-base">Starts From</p>
          <h1 className="text-lg xl:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>

    {/* img-5 */}
    <div className="relative">
      <img
        src="image 37 (2).png"
        width={700}
        alt="Image 5"
        className="rounded-2xl w-full h-[200px] xl:h-auto object-cover"
      />
      <div className="absolute bottom-4 xl:bottom-8 left-4 xl:ml-6 text-white">
        <div className="flex flex-wrap items-center gap-2 mb-2 xl:mb-4">
          <h1 className="text-2xl xl:text-4xl font-bold">Rajshahi</h1>
          <p className="bg-yellow-500 text-xs xl:text-sm text-black px-2 py-1 xl:p-2 rounded-full">
            18 Packages
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-sm xl:text-base">Starts From</p>
          <h1 className="text-lg xl:text-xl font-bold">BDT 55,500</h1>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    
  )
}
