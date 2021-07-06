const cors = require('cors');
const express = require('express');

const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8000;
app.listen(PORT);


