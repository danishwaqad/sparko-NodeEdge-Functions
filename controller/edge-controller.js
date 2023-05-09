const cfClient = require("../config/cfClient");

exports.getHello = (req, res) => {
    // Call the Cloudflare API to fetch the zone information
    cfClient.zones.browse()
        .then((zones) => {
            // Extract the zone names from the response
            const zoneNames = zones.result.map((zone) => zone.name);

            // Send the zone names as the API response
            res.json({ zones: zoneNames });
        })
        .catch((err) => {
            console.error('Error fetching zone information:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

