import { useEffect } from "react";
import MinhasRendasFixas from "../../componentes/MinhasRendasFixas";
import { TituloPagina } from "../../componentes/utils/styles";
import ValoresTotaisCabecalho from "../../componentes/ValoresTotaisCabecalho";
import UseRendaFixa from "./UseRendaFixa";

function RendaFixa() {
    const {
        getDados,
        objValoresTotais,
        arrRendasFixas,
        setArrRendasFixas,
        setBusca,
        busca
     } = UseRendaFixa();

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