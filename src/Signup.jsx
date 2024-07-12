import React from 'react'

const Signup = () => {
    return (
        <div className='bg-zinc-900 p-4 h-screen flex items-center justify-center'>
            <div className='max-w-[1240px] text-center'>
                <h2 className='text-white font-bold text-2xl mb-3'>Sign up</h2>
                <form action="#" className='flex flex-col items-center'>
                    <input required type="text" placeholder='e-mail' className='p-2 mb-4 rounded w-[250px]' />
                    <input required type="text" placeholder='Create Username' className='p-2 mb-4 rounded w-[250px]' />
                    <input required type="password" placeholder='Create Password' className='p-2 mb-4 rounded w-[250px]' />
                    <input required type="password" placeholder='Retype Password' className='p-2 mb-4 rounded w-[250px]' />
                    <input type="submit" value='Create account' className='p-2 mb-2 rounded w-[250px] bg-blue-900 font-bold text-xl text-white' />
                </form>
            </div>
        </div>
    )
}

export default Signup