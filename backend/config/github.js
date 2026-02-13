const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubClient = axios.create({
    baseURL: GITHUB_API_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
    },
});

module.exports = githubClient;