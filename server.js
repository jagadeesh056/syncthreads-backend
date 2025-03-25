const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
require('dotenv').config({ path: './.env' });

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const mapRoutes = require('./routes/mapRoutes');

const app = express();
app.use(cors({ 
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/map', mapRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
console.log("JWT Secret:", process.env.JWT_SECRET);

