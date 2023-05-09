require('dotenv').config();
const cloudflare = require('cloudflare');
const env = require('./env');

// Initialize the Cloudflare API client
const cfClient = cloudflare({
    email: env.CLOUDFLARE_EMAIL,
    key: env.CLOUDFLARE_API_KEY,
});

module.exports = cfClient;
