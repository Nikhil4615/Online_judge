import React from 'react'
import { ReactTyped } from 'react-typed'

const Mid = () => {
    return (
        <div className='bg-sky-500 w-full py-[100px] '>
            <div className='mx-auto text-center my-[100px]'>
                <div className='text-zinc-100 font-bold text-2xl md:text-3xl mt-4'>
                    Increase your problem solving skills
                </div>
                <div className='text-black font-bold text-3xl md:text-[40px] mt-4'>
                    Learn{' '}
                    <ReactTyped
                        strings={['Data structures', 'Algorithms']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop // Shortened attribute for loop={true}
                    />
                </div>
                <div className='text-zinc-100 font-bold text-2xl md:text-3xl mt-4'>
                    Compete and win
                </div>
                <button className='bg-zinc-900 text-white p-[9px] rounded mt-5 text-xl font-semibold'>Start solving</button>
            </div>
        </div>
    )
}

export default Mid