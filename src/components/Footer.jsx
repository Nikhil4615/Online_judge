import React from 'react';

const Footer = () => {
  return (
    <div className='bg-zinc-900 p-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='justify-center text-center text-white'>
          Privacy policy
        </div>
        <div className='mt-4 text-white text-center'>
          <p>&copy; {new Date().getFullYear()} Online Judge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
