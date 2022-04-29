import { HeaderMenuComponent, HeaderMenuValue} from "../styles"

export function HeaderMenuInfo({name, value, Icon}) {

    return (
        <HeaderMenuComponent>
            <Icon />
            <HeaderMenuValue>
                <p>{name}</p>
                <h3>{value}</h3>
            </HeaderMenuValue>
        </HeaderMenuComponent>
    )
}