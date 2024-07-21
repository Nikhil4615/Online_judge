import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [val, setVal] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const HandleChange = (e) => {
        setVal({ ...val, [e.target.id]: e.target.value.trim() });
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(val)
            });
            const data = await res.json();
            if (res.ok) {
                console.log('login successful');
                navigate('/');
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='bg-zinc-900 p-4 h-screen flex flex-col'>
            <div className='text-white text-4xl font-bold self-start ml-3'>Online Judge</div>
            <div className='flex-grow flex items-center justify-center'>
                <div className='max-w-[1240px] text-center'>
                    <h2 className='text-white font-bold text-2xl mb-3'>Sign in</h2>
                    <form className='flex flex-col items-center' onSubmit={HandleSubmit}>
                        <input required type="text" onChange={HandleChange} placeholder='Username' id='username' className='p-2 mb-4 rounded w-[250px]' />
                        <input required type="password" onChange={HandleChange} placeholder='Password' id='password' className='p-2 mb-4 rounded w-[250px]' />
                        <input type="submit" value='Submit' className='p-2 mb-2 rounded w-[250px] bg-blue-900 font-bold text-xl text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
