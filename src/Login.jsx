import React from 'react';

const Login = () => {
    return (
        <div className='bg-zinc-900 p-4 h-screen flex items-center justify-center'>
            <div className='max-w-[1240px] text-center'>
                <h2 className='text-white font-bold text-2xl mb-3'>Login</h2>
                <form action="#" className='flex flex-col items-center'>
                    <input required type="text" placeholder='Username' className='p-2 mb-4 rounded w-[250px]' />
                    <input required type="password" placeholder='Password' className='p-2 mb-4 rounded w-[250px]' />
                    <input required type="submit" value='Submit' className='p-2 mb-2 rounded w-[250px] bg-blue-900 font-bold text-xl text-white' />
                </form>
                <div>
                    <a href="#" className='text-white font-semibold'>create a new account</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
