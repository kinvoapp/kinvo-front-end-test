import { PChart } from "./style";

export const PizzaChart = ({title,graphic,tps})=>{
    const titletypes = ['CDB','Tesouro Real','CDI','LCI','Ações','Bitcoin']
    return (
        <PChart>
            <div className="titlePizzaChart">{title}</div>
            <img className="pizzachart" src="" alt=""/>
            <ul className="pizzachartfooter">{titletypes.map((e,i)=><li key={i}>
                                                                        <div></div>
                                                                        <p>{e}</p>
                                                                    </li>)}
                
            </ul>            
        </PChart>
    )
};
