import axios from "axios";
import { useEffect, useState } from "react";
import MinhasRendasFixas from "../../componentes/MinhasRendasFixas";
import { TituloPagina } from "../../componentes/utils/styles";
import ValoresTotaisCabecalho from "../../componentes/ValoresTotaisCabecalho";

function RendaFixa() {
    const [arrRendasFixas, setArrRendasFixas] = useState([]);
    const [busca, setBusca] = useState("");
    const [objValoresTotais, setObjValoresTotais] = useState(false)

    const getDados = async (num_total_dados) => {
        const { data: { data: { snapshotByProduct, snapshotByPortfolio } } } = await axios.get(process.env.REACT_APP_URI);
        if (busca) { //se tem busca, o getDados só é chamado quando tem scroll ou quando a página é criada
            const filtro = snapshotByProduct.filter(snapshot => snapshot.fixedIncome.name.toUpperCase().includes(busca.toUpperCase()))
            const new_data = [...arrRendasFixas, ...filtro.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        } else {
            const new_data = [...arrRendasFixas, ...snapshotByProduct.slice(num_total_dados, num_total_dados + parseInt(process.env.REACT_APP_PAGINATION))];
            setArrRendasFixas(new_data);
        }

        if(!objValoresTotais){
            setObjValoresTotais(snapshotByPortfolio);
        }
    }

    useEffect(() => {
        getDados(0);
    }, [])

    return (
        <div>
            <TituloPagina>Renda Fixa</TituloPagina>
            <ValoresTotaisCabecalho objValoresTotais={objValoresTotais}/>
            <MinhasRendasFixas 
            getDados={getDados}
            arrRendasFixas={arrRendasFixas}
            setArrRendasFixas={setArrRendasFixas}
            setBusca={setBusca}
            busca={busca}
            />
        </div>
    )
}

export default RendaFixa;