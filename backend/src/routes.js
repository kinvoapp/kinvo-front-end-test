const express = require('express');
const { retornarDados } = require('./controller/controller')

const router = express();

router.get('/', retornarDados);

module.exports = router;
