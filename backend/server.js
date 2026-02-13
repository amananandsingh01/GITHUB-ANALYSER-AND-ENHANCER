const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());  // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// API routes for the analyzer
app.get('/api/analyze', (req, res) => {
    // Placeholder for analyzer logic
    res.json({ message: 'Analyzer API endpoint' });
});

// Serve the frontend
app.use(express.static('frontend'));  // Adjust the path as necessary

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});