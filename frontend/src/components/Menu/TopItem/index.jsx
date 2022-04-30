import { 
    Circle,
    Information1,
    Information2,
    Informations,
    Item,
} from './styles'

export  function TopItem({
    imgSource,
    title,
    value,
    circleBackground
}){

    return(

        <Item>
            <Circle style={{background: circleBackground}}>
                <img src={imgSource} alt={title} />
            </Circle>
            <Informations>
                <Information1>{title}</Information1>
                <Information2>{value}</Information2>
            </Informations>
        </Item>
    )
}