import React from 'react';

const Problem = () => {
    const problemNames = [
        'Problem 1',
        'Problem 2',
        'Problem 3',
        'Problem 4',
        'Problem 5'
        // Add more problems as needed
    ];

    return (
        <div className='bg-zinc-900 text-white min-h-screen'>
            <nav className='bg-zinc-900 p-4 flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Online Judge</h1>
                <button className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg'>
                    Problem of the Day
                </button>
            </nav>

            {/* Main Content */}
            <div className="max-w-[1240px] mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-4">Problem List</h2>
                <ul className='space-y-2'>
                    {problemNames.map((problem, index) => (
                        <li key={index} className='bg-blue-800 hover:bg-blue-700 rounded-lg px-4 py-2 text-white cursor-pointer'>
                            {problem}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <footer className="bg-zinc-900 text-gray-300 text-center py-4 mt-auto">
                © 2024 Problem Solver. All rights reserved.
            </footer>
        </div>
    );
}

export default Problem;
