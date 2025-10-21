import React from 'react'
import { FaChevronUp } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className='relative '>
      <img src='/bg.png' alt="Bacground" />
      {/* inside image-design */}
      <div className='absolute top-0 w-full'>
        {/* nav-design */}
        <div className="navbar  border-b-[0.1] border-gray-400  pl-40 pr-40">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
                <li><a>Quick Link</a></li>
              </ul>
            </div>
            <img src="Group.png" alt="" />
          </div>
          <div className=" navbar-start ml-[-250px] hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
              <li><a>About Us</a></li>
              <li><a>Contact</a></li>
              <li><a>Quick Link</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-white border-none rounded-lg text-black"><img src="flag.png" alt=""/>English <FaChevronUp /> </a> 
          </div>
        </div>
        {/* banner-design */}
 
      </div>
    </div>
  )
}
