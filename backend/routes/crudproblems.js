// routes/crudproblems.js
const express = require('express');
const router = express.Router();
const crudhelp = require('../controllers/probcrudcontroller.js');

// Get all problems
router.get('/', crudhelp.getAllProblems);

// Create a new problem
router.post('/', crudhelp.createProblem);

// Update an existing problem
router.patch('/:id', crudhelp.updateProblem);

// Delete a problem
router.delete('/:id', crudhelp.deleteProblem);

module.exports = router;
