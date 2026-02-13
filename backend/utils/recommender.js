// recommender.js

/**
 * Generates recommendations based on portfolio scores.
 *
 * @param {Object} portfolio - The user's portfolio containing scores.
 * @returns {Array} - List of recommendations based on scores.
 */
function generateRecommendations(portfolio) {
    const recommendations = [];
    
    // Example logic: recommend actions based on score thresholds
    for (let asset in portfolio) {
        const score = portfolio[asset];
        if (score > 80) {
            recommendations.push(`Consider investing more in ${asset}.`);
        } else if (score < 50) {
            recommendations.push(`Review your position in ${asset}.`);
        } else {
            recommendations.push(`Maintain your current position in ${asset}.`);
        }
    }
    
    return recommendations;
}

// Example usage
const userPortfolio = {
    'Stock A': 85,
    'Stock B': 40,
    'Stock C': 70
};

console.log(generateRecommendations(userPortfolio));