import { CardTwo } from "./style";

export const CardTwoSideMenu = ({values,iconArrow})=>{
    return (
        <CardTwo>
            <div className="dot"></div>
            <div className="text"><p>{values.text}</p></div>
            <div className="iconArrow"><img src={iconArrow} alt=''/></div>
        </CardTwo>
    )
};
