// Fetch GitHub profile analysis results
async function fetchGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

// Render score
function renderScore(score) {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `GitHub Score: ${score}`;
}

// Display recommendations
function displayRecommendations(recommendations) {
    const recommendationsElement = document.getElementById('recommendations');
    recommendationsElement.innerHTML = ''; // Clear previous recommendations

    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsElement.appendChild(li);
    });
}

// Example usage
async function analyzeProfile() {
    const username = 'amananandsingh01';
    const profileData = await fetchGitHubProfile(username);
    const score = profileData.public_repos + profileData.followers; // Example scoring logic
    const recommendations = [
        'Increase followers by engaging with the community.',
        'Contribute to open source projects.',
        'Complete your profile with a bio and profile picture.'
    ];
    renderScore(score);
    displayRecommendations(recommendations);
}

// Call analyzeProfile on page load
window.onload = analyzeProfile;
