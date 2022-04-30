import { ResumeItem } from "../ResumeItem";

export function Resume({
    rendaFixa
}){
    return(
        <>
            <ResumeItem
                title='Saldo Bruto'
                value={'R$ ' + rendaFixa.equity}
            />
            <ResumeItem 
                title='Valor Aplicado'
                value={'R$ ' + rendaFixa.valueApplied}
            />
            <ResumeItem 
                title='Resultado'
                value={'R$ ' + rendaFixa.equityProfit}
            />
            <ResumeItem 
                title='Rentabilidade'
                value={rendaFixa.percentageProfit + '%'}
            />
            <ResumeItem 
                title='cdi'
                value={rendaFixa.indexerValue + '%'}
            />
            <ResumeItem 
                title='% sobre cdi'
                value={rendaFixa.percentageOverIndexer + '%'}
            />
        </>
    )
}