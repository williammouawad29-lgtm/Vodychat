// routes/auth.js

const express = require('express');
const router = express.Router();

// Mock authentication endpoints

// User registration
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Logic to add user to database (mock)
    res.status(201).json({ message: 'User registered successfully', username });
});

// User login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Logic to authenticate user (mock)
    if (username === 'test' && password === 'password') {
        res.status(200).json({ message: 'User logged in successfully' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// User logout
router.post('/logout', (req, res) => {
    // Logic to handle user logout (mock)
    res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = router;