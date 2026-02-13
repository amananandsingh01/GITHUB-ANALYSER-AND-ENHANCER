/**
 * Scorer Module for Portfolio Analysis
 * This module provides functions to calculate various scores for a portfolio analysis, including:
 * - Documentation Score
 * - Code Quality Score
 * - Activity Score
 * - Organization Score
 * - Impact Score
 * - Technical Depth Score
 */

/**
 * Calculates the documentation score based on provided documentation completeness.
 * @param {number} completeness - A score between 0 and 100 representing documentation completeness.
 * @returns {number} - Documentation score.
 */
function calculateDocumentationScore(completeness) {
    return Math.min(Math.max(completeness, 0), 100);
}

/**
 * Calculates the code quality score based on code metrics.
 * @param {number} qualityRating - A score between 0 and 100 representing code quality.
 * @returns {number} - Code quality score.
 */
function calculateCodeQualityScore(qualityRating) {
    return Math.min(Math.max(qualityRating, 0), 100);
}

/**
 * Calculates the activity score based on frequency of commits.
 * @param {number} commits - Total number of commits.
 * @returns {number} - Activity score.
 */
function calculateActivityScore(commits) {
    return Math.min(Math.max(commits, 0), 100);
}

/**
 * Calculates the organization score based on code structure and organization.
 * @param {number} organizationRating - A score between 0 and 100 for organization.
 * @returns {number} - Organization score.
 */
function calculateOrganizationScore(organizationRating) {
    return Math.min(Math.max(organizationRating, 0), 100);
}

/**
 * Calculates the impact score based on contributions.
 * @param {number} contributions - Total impactful contributions made.
 * @returns {number} - Impact score.
 */
function calculateImpactScore(contributions) {
    return Math.min(Math.max(contributions, 0), 100);
}

/**
 * Calculates the technical depth score based on complexity and technology usage.
 * @param {number} complexity - A score between 0 and 100 representing the complexity of the codebase.
 * @returns {number} - Technical depth score.
 */
function calculateTechnicalDepthScore(complexity) {
    return Math.min(Math.max(complexity, 0), 100);
}

// Exporting the scoring functions.
module.exports = {
    calculateDocumentationScore,
    calculateCodeQualityScore,
    calculateActivityScore,
    calculateOrganizationScore,
    calculateImpactScore,
    calculateTechnicalDepthScore
};
