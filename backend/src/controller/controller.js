const { pegarDados } = require('../data/data');

async function retornarDados(req, res)
{    
    const {data: dados_api} = await pegarDados();

    return res.json(dados_api)  
}

module.exports = { retornarDados }