let renda_fixa = [
    {
        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)',
            classe: 'Tesouro Direto'

        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    },{

        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)',
            classe: 'Tesouro Direto'
        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    },{

        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)',
            classe: 'Tesouro Direto'
        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    }, {

        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)',
            classe: 'Tesouro Direto'
        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    }, {

        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)ZZ',
            classe: 'Tesouro Direto'
        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    }, {

        titulo :{
            descricao:'tesouro IPCA + com Juros semestrais 2020(ntnb)',
            classe: 'Tesouro Direto'
        },
        minha_posicao:{
            valor_inves: '1003.00' ,
            saldo_bruto: '1124.00',
            rent:'48.55',
            cart: '55.33',
            cdi: '1.24',
            sobre_cdi: '118',
         },
        vencimento : {
            data_cdi: '15.052.019',
            data_venc: '5762',
        },
    }
]

function filtrar(txt){
    console.log(txt);

    if( txt === '' || txt == null){
        return renda_fixa;
    }
    
    let resultado = renda_fixa.filter( (e) => {
         // console.log(e.titulo.descricao);
         return e.titulo.descricao.includes(txt);

    })
    return resultado;
}


// console.log(filtrar(''));

