import { Item, Text } from './style'

const SubMenu = ( props ) => {

    return (

        <Item arrow={props.arrow}>
            <div></div>
            <Text>{props.text}</Text>
        </Item>
    )
}

export default SubMenu