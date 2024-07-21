// src/api.js

const API_URL = 'http://localhost:3000/api/problems';

// Fetch all problems
export const fetchProblems = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

// Create a new problem
export const createProblem = async (problem) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(problem),
    });
    return response.json();
};

// Update a problem
export const updateProblem = async (id, updatedProblem) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProblem),
    });
    return response.json();
};

// Delete a problem
export const deleteProblem = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
