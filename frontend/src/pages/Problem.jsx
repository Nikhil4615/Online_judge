import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/problems';

const Problem = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [problems, setProblems] = useState([]);
    const [newProblem, setNewProblem] = useState({ title: '', description: '', difficulty: '' });

    useEffect(() => {
        const getProblems = async () => {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setProblems(data);
            } catch (error) {
                console.error('Error fetching problems:', error);
            }
        };
        getProblems();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProblem({ ...newProblem, [name]: value });
    };

    const handleCreateProblem = async () => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProblem)
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setProblems([...problems, data]);
            setNewProblem({ title: '', description: '', difficulty: '' });
        } catch (error) {
            console.error('Error creating problem:', error);
        }
    };

    const handleDeleteProblem = async (id) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            setProblems(problems.filter(problem => problem._id !== id));
        } catch (error) {
            console.error('Error deleting problem:', error);
        }
    };

    const handleUpdateProblem = async (id, updatedProblem) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProblem)
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setProblems(problems.map(problem => (problem._id === id ? data : problem)));
        } catch (error) {
            console.error('Error updating problem:', error);
        }
    };

    return (
        <div className='bg-zinc-900 text-white min-h-screen'>
            <nav className='bg-zinc-900 p-4 flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Online Judge</h1>
                <button className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg' onClick={() => navigate('/problem-of-the-day')}>
                    Problem of the Day
                </button>
            </nav>

            {/* Main Content */}
            <div className="max-w-[1240px] mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-4">Problem List</h2>
                <ul className='space-y-2'>
                    {problems.length > 0 ? (
                        problems.map((problem) => (
                            <li key={problem._id} className='bg-blue-800 hover:bg-blue-700 rounded-lg px-4 py-2 text-white flex justify-between items-center'>
                                <span>{problem.title}</span>
                                {user && user.isAdmin && (
                                    <div className='flex space-x-2'>
                                        <button
                                            onClick={() => handleUpdateProblem(problem._id, { ...problem, title: 'Updated Title' })}
                                            className='bg-yellow-600 text-white px-2 py-1 rounded-lg'>
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProblem(problem._id)}
                                            className='bg-red-600 text-white px-2 py-1 rounded-lg'>
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </li>
                        ))
                    ) : (
                        <p>No problems available.</p>
                    )}
                </ul>

                {user && user.isAdmin && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-2">Add New Problem</h3>
                        <input
                            type="text"
                            name="title"
                            value={newProblem.title}
                            onChange={handleInputChange}
                            placeholder="Title"
                            className="p-2 mb-2 rounded w-full"
                        />
                        <textarea
                            name="description"
                            value={newProblem.description}
                            onChange={handleInputChange}
                            placeholder="Description"
                            className="p-2 mb-2 rounded w-full"
                        />
                        <input
                            type="text"
                            name="difficulty"
                            value={newProblem.difficulty}
                            onChange={handleInputChange}
                            placeholder="Difficulty"
                            className="p-2 mb-2 rounded w-full"
                        />
                        <button
                            onClick={handleCreateProblem}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg mt-2">
                            Create Problem
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-zinc-900 text-gray-300 text-center py-4 mt-auto">
                © 2024 Problem Solver. All rights reserved.
            </footer>
        </div>
    );
}

export default Problem;
