const axios = require('axios');

// Fetch user data from GitHub
const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// Fetch user repositories from GitHub
const fetchUserRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
};

// Analyze Profile Controller
const analyzeProfile = async (req, res) => {
    const { username } = req.params;
    try {
        const userData = await fetchUserData(username);
        const userRepos = await fetchUserRepos(username);
        res.status(200).json({ userData, userRepos });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data from GitHub', error: error.message });
    }
};

module.exports = { analyzeProfile };