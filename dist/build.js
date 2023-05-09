const express = require('express');
const app = express();
const router = require('../router/route');
const PORT = process.env.PORT || 3000;
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});