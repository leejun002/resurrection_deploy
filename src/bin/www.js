"use strict";

const app = require('../server');
const PORT = 8080;

app.listen(PORT, () => {
    console.log('Server is running on port 8080');
});