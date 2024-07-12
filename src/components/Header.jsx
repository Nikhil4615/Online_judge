import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-zinc-900 p-4'>
      <div className='max-w-[1240px] flex items-center justify-between mx-auto'>
        <div className='text-3xl font-bold text-white'>
          Online Judge
        </div>
        {   
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='md:hidden block text-2xl text-white' />   
          :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='md:hidden block text-2xl text-white' />
        }
        <ul className='hidden md:flex gap-7 items-center mr-[50px] text-[20px] font-bold text-white'>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact us
          </li>
          <li>
            <button className='bg-white text-zinc-900 py-2 px-4 rounded text-[20px] font-semibold'>Sign up</button>
          </li>
          <li>
            <button className='bg-white text-zinc-900 py-2 px-4 rounded text-[20px] font-semibold'>Login</button>
          </li>
        </ul>
        {/* Responsive menu */}
        <ul className={`duration-300 w-full h-screen md:hidden block bg-neutral-800 fixed text-[20px] font-bold text-white ${toggle ? 'left-[0]' : 'left-[-100%]'} top-[83px]`}>
          <li className='p-5'>
            Home
          </li>
          <li className='p-5'>
            About
          </li>
          <li className='p-5'>
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
