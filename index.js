const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

const api = require('./routes/index');

app.use(cors());
app.use('/', api);

app.listen(PORT, () => {
    console.log(`Server work on port ${PORT}`);
})
