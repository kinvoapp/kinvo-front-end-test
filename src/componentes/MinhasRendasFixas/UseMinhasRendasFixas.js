import axios from "axios";
import { useState } from "react";

function UseMinhasRendasFixas() {
    const [arrRendasFixas, setArrRendasFixas] = useState([]);
    const [busca, setBusca] = useState("");
    const [ordenacao, setOrdenacao] = useState("");

    const changeOrdenacao = e => {
        const { value } = e.target;
        if (value) {
            const copy_rendasFixas = [...arrRendasFixas];
            if (value === 'name') {
                copy_rendasFixas.sort((renda1, renda2) => {
                    if (renda1.fixedIncome[value] > renda2.fixedIncome[value]) {
                        return 1;
                    }
                    if (renda1.fixedIncome[value] < renda2.fixedIncome[value]) {
                        return -1
                    }
                    return 0;
                })
            } else if (value === 'date') {
                copy_rendasFixas.sort((renda1, renda2) => {
                    let split_data1 = renda1.due[value].split("/");
                    let new_data1 = new Date(parseInt(split_data1[2]), parseInt(split_data1[1] - 1, parseInt(split_data1[0])))
                    let split_data2 = renda2.due[value].split("/");
                    let new_data2 = new Date(parseInt(split_data2[2]), parseInt(split_data2[1] - 1, parseInt(split_data2[0])))
                    if (new_data1 > new_data2) {
                        return 1;
                    }
                    if (new_data1 < new_data2) {
                        return -1
                    }
                    return 0;
                })
            }
            setArrRendasFixas(copy_rendasFixas)
        }
        setOrdenacao(value)
    }

    const changeBusca = async (e) => {
        const { value } = e.target;
        setBusca(value);
        const { data: { data: { snapshotByProduct } } } = await axios.get(parseInt(process.env.REACT_APP_PAGINATION));
        const filtro = snapshotByProduct.filter(snapshot => snapshot.fixedIncome.name.toUpperCase().includes(value.toUpperCase()))
        setArrRendasFixas(filtro.slice(0, parseInt(process.env.REACT_APP_PAGINATION))); //exibe somente os 5 iniciais
    }

    const scrollFunc = () => {
        const elTable = document.getElementById("data-table");
        /*significa que temos 0 elementos, temos os 6 elementos totais, ou recebemos da busca menos que 5 elementos.
        Como a busca é de 5 em 5, se tiver menos do que 5, significa dizer que não tem mais dados, se tiver mais que 5
        e esse número não é múltiplo de 5, então chegamos ao final dos dados e dessa forma não buscamos. Aqui ainda há
        falha, no caso de houver busca, e retornar os 5 elementos, o scroll ainda fará uma requisição no servidor*/
        const isMoreData = ((arrRendasFixas.length / parseInt(process.env.REACT_APP_PAGINATION)) * parseInt(process.env.REACT_APP_PAGINATION)) -
            arrRendasFixas.length === 0 && arrRendasFixas.length % parseInt(process.env.REACT_APP_PAGINATION) === 0;
        if (elTable.scrollTop === elTable.scrollTopMax && isMoreData) {
            getDados(arrRendasFixas.length);
        }
    }

    const getDados = async (num_total_dados) => {
        const { data: { data: { snapshotByProduct } } } = await axios.get(process.env.REACT_APP_URI);
        if (busca) { //se tem busca, o getDados só é chamado quando tem scroll ou quando a página é criada
            const filtro = snapshotByProduct.filter(snapshot => snapshot.fixedIncome.name.toUpperCase().includes(busca.toUpperCase()))
            const new_data = [...arrRendasFixas, ...filtro.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        } else {
            const new_data = [...arrRendasFixas, ...snapshotByProduct.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        }
    }

    return {
        scrollFunc, arrRendasFixas, getDados, ordenacao,
        changeBusca, changeOrdenacao, busca,
    }
}

export default UseMinhasRendasFixas;