import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [val, setVal] = useState({ username: '', password: '', email: '' });
    const [errmsg, setErrmsg] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const HandleChange = (e) => {
        setVal({ ...val, [e.target.id]: e.target.value.trim() });
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        if (!val.username || !val.password || !val.email) {
            return setErrmsg("Please fill all the fields.");
        }
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(val)
            });
            const data = await res.json();
            if (data.success === false) {
                return setErrmsg(data.message);
            }
            if (res.ok) {
                setSuccess("Account created successfully!");
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (error) {
            setErrmsg(error.message);
        }
    };

    return (
        <div className='bg-zinc-900 p-4 h-screen flex flex-col'>
            <div className='text-white text-4xl font-bold self-start ml-3'>Online Judge</div>
            <div className='flex-grow flex items-center justify-center'>
                <div className='max-w-[1240px] text-center'>
                    <h2 className='text-white font-bold text-2xl mb-3'>Sign up</h2>
                    <form onSubmit={HandleSubmit} className='flex flex-col items-center'>
                        <input 
                            onChange={HandleChange} 
                            required 
                            type="email" 
                            id='email' 
                            placeholder='e-mail' 
                            className='p-2 mb-4 rounded w-[250px]' 
                            value={val.email}
                        />
                        <input 
                            onChange={HandleChange} 
                            required 
                            type="text" 
                            id='username' 
                            placeholder='Create Username' 
                            className='p-2 mb-4 rounded w-[250px]' 
                            value={val.username}
                        />
                        <input 
                            onChange={HandleChange} 
                            required 
                            type="password" 
                            id='password' 
                            placeholder='Create Password' 
                            className='p-2 mb-4 rounded w-[250px]' 
                            value={val.password}
                        />
                        <input 
                            type="submit" 
                            value='Create account' 
                            className='p-2 mb-2 rounded w-[250px] bg-blue-900 font-bold text-xl text-white'
                        />
                    </form>
                    <div className='text-white mt-5'>Already have an account?<a href="/login" className='text-blue-700 ml-1'> sign in</a></div>
                    {/* {errmsg && <div className='text-red-500 mt-5'>{errmsg}</div>} */}
                    {/* {success && <div className='text-green-500 mt-5'>{success}</div>} */}
                </div>
            </div>
        </div>
    );
};

export default Signup;
