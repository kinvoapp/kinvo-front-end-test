const axios = require('axios');

async function pegarDados()
{
    const { data: api_completa }  = await axios('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData');
    return api_completa;
}

module.exports = {pegarDados};