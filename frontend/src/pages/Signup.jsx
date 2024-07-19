import React, { useState } from 'react';

const Signup = () => {
    const [val, setVal] = useState('')

    const HandleChange = (e) => {
        setVal({ ...val, [e.target.id]: e.target.value });
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(val)
            });
            const data = await res.json();
            console.log('Signup successful');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='bg-zinc-900 p-4 h-screen flex flex-col'>
            <div className='text-white text-4xl font-bold self-start ml-3'>Online Judge</div>
            <div className='flex-grow flex items-center justify-center'>
                <div className='max-w-[1240px] text-center'>
                    <h2 className='text-white font-bold text-2xl mb-3'>Sign up</h2>
                    <form onSubmit={HandleSubmit} className='flex flex-col items-center'>
                        <input onChange={HandleChange} required type="email" id='email' placeholder='e-mail' className='p-2 mb-4 rounded w-[250px]' />
                        <input onChange={HandleChange} required type="text" id='username' placeholder='Create Username' className='p-2 mb-4 rounded w-[250px]' />
                        <input onChange={HandleChange} required type="password" id='password' placeholder='Create Password' className='p-2 mb-4 rounded w-[250px]' />
                        <input type="submit" value='Create account' className='p-2 mb-2 rounded w-[250px] bg-blue-900 font-bold text-xl text-white' />
                    </form>
                    <div className='text-white mt-5'>Already have an account?<a href="" className='text-blue-700 ml-1'> sign in</a></div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
