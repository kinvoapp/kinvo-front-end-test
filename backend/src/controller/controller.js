const { pegarDados } = require('../data/data');

function ordenar(item, ordem)
{
    
}


async function ordenarDados(req, res)
{
    const { item_pesquisa, ordem } = req.body;

    const {data: dados_api} = await pegarDados();
    const {snapshotByProduct: itens_para_filtrar} = dados_api;

    if(!item_pesquisa) return res.json(itens_para_filtrar);

    const retorno_pesquisa = itens_para_filtrar.forEach(element => 
    {        
        const { fixedIncome } = element;
        const { name: nomeInvestimento, bondType: tipoInvestimento, portfolioProductId: idInvestimento} = fixedIncome;

        
        console.log(fixedIncome)
    });
    return res.json(retorno_pesquisa)  
}

module.exports = { ordenarDados }