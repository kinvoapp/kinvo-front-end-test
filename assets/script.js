let list = [
    {
        c1: 'Titulo',
        c2: 'tesouro IPCA + com Juros semestrais 2020(ntnb)',
        c3: 'Classe',
        c4: 'Tesouro Direto',
        c5: '',
        c6: '',
        c7: '',
        c8: '',
        c9: '',
        c10: '',
        c11: '',
        c12: '',
        c13: '',
    },
    {
        c1: 'Minha Posição',
        c2: 'valor_inves',
        c3: '1003.00',
        c4: 'saldo_bruto',
        c5: '1124.00',
        c6: 'rent',
        c7: '48.55',
        c8: 'cart',
        c9: '55.33',
        c10: 'cdi',
        c11: '1.24',
        c12: 'sobre_cdi',
        c13: '118',
    },
    {
        c1: 'Vencimento',
        c2: 'data_cdi',
        c3: '15.052.019',
        c4: 'data_venc',
        c5: '5762',
        c6: '',
        c7: '',
        c8: '',
        c9: '',
        c10: '',
        c11: '',
        c12: '',
        c13: '',
    },
    {
        c1: 'Resultado',
        c2: 'valor_inves',
        c3: '1003.00',
        c4: 'saldo_bruto',
        c5: '1124.00',
        c6: 'rent',
        c7: '48.55',
        c8: 'cart',
        c9: '55.33',
        c10: 'cdi',
        c11: '1.24',
        c12: 'sobre_cdi',
        c13: '118',
    },
];

function filter(text){
    console.log(text);
    if (text === '' || text == null){
        return list;
    }
    let result = list.filter( (e) => {
        let data = e.c1.toUpperCase();
        let textUpper = text.toUpperCase();

        return data.includes(textUpper);
    });

    return result;
}

function update(){
    let texto = document.getElementById('search').value;
    let table = document.getElementById('my_table');
    let result_filter = filter(texto);

    let table_length = table.rows.length;

    for(i = 0; i < table_length; i++){
        table.deleteRow(0);
    }

    for (const index in result_filter) {
        let row = table.insertRow(index);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);
        let cell7 = row.insertCell(7);
        cell0.innerHTML = result_filter[index].c1;
        cell1.innerHTML = result_filter[index].c2;
        cell2.innerHTML = result_filter[index].c3;
        cell3.innerHTML = result_filter[index].c4;
        cell4.innerHTML = result_filter[index].c5;
        cell5.innerHTML = result_filter[index].c6;
        cell6.innerHTML = result_filter[index].c7;
        cell7.innerHTML = result_filter[index].c8;
        
    }

    console.log('result filter: ', result_filter);
}
update();





