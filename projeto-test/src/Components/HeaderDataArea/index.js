import { HeadDataArea } from "./style";
import { useFixed } from "../../Provider/FixedIncome";
import { useEffect } from "react";

export const HeaderDataArea = ()=> {

    const {getFixeds, snapshotByPortfolio} = useFixed()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>getFixeds(),[]);

    const resp = [
        {title:"saldo bruto",value:snapshotByPortfolio.equity},
        {title:"valor aplicado",value:snapshotByPortfolio.valueApplied},
        {title:"resultado",value:snapshotByPortfolio.equityProfit},
        {title:"rentabilidade",value:`${snapshotByPortfolio.percentageProfit}%`},
        {title:"cdi",value:`${snapshotByPortfolio.indexerValue}%`},
        {title:"% sobre cdi",value:`${snapshotByPortfolio.percentageOverIndexer}%`}
    ]
    console.log(resp);
    return (
        <HeadDataArea>
            <h2>Renda Fixa</h2>
            <ul>
                {resp.map((e,i)=><li key={i}>
                                    <div className="cardValues">
                                        <h4>{e.title}</h4>
                                        <h3>{e.value}</h3>
                                    </div>
                                </li>
                        )}                
            </ul>
        </HeadDataArea>
    )
};
