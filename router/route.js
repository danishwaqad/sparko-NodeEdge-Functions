const express = require('express');
const controller = require("../controller/edge-controller");

const router = express.Router();

router.get('/api/getHello', controller.getHello);

module.exports = router;



