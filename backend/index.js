const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userroute.js');
const authRoutesSignup =require('./routes/authsignup.js');
const authRoutesLogin =require('./routes/authlogin.js');
const crudRoutesproblems =require('./routes/crudproblems.js');
// Load environment variables
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));

const mongoUri = process.env.MONGO;

mongoose.connect(mongoUri).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API connected'
  });
});

app.use('/api/users', userRoutes);
app.use('/api/auth',authRoutesSignup);
app.use('/api/auth',authRoutesLogin);
app.use('/api/problems',crudRoutesproblems);

app.use((err,req,res,next) =>{
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Service Error.";
  res.status(statuscode).json({
    success:false,
    statuscode,
    message
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
