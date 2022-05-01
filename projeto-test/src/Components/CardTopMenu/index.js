import { CardTopMenuStyle } from "./style";

export const CardTopMenu = ({values})=> {

    console.log(values)
    return (
        <CardTopMenuStyle>
            <div className="IconCard">
                <img src={values.icon} alt=""></img>
            </div>
            <div className="dataCard">
                <div className="titulo" style={{color:`${values.title==='Carteira' && "#88898C"}`}}>{values.title}</div>
                <div className="valueCard">{values.value}</div>
            </div>
        </CardTopMenuStyle>
    )
};