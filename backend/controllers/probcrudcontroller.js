const Problem = require('../models/problemModel'); // Adjust path as needed

// Get all problems
const getAllProblems = async (req, res) => {
    try {
        const problems = await Problem.find();
        res.status(200).json(problems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new problem
const createProblem = async (req, res) => {
    const { title, description, difficulty } = req.body;
    try {
        const newProblem = new Problem({ title, description, difficulty });
        await newProblem.save();
        res.status(201).json(newProblem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing problem
const updateProblem = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedProblem = await Problem.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProblem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.status(200).json(updatedProblem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a problem
const deleteProblem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProblem = await Problem.findByIdAndDelete(id);
        if (!deletedProblem) {
            return res.status(404).json({ message: 'Problem not found' });
        }
        res.status(200).json({ message: 'Problem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProblems,
    createProblem,
    updateProblem,
    deleteProblem
};
