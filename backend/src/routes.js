const express = require('express');
const { ordenarDados } = require('./controller/controller')

const router = express();

router.get('/', ordenarDados);

module.exports = router;
