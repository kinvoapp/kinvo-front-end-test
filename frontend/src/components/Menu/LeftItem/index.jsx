import arrow from '../../../assets/icones/arrow.svg'

import { Container, Icon, MenuInformations } from './styles'

export function LeftItem({ src, alt, children }) {
    return (
        <Container>
            <Icon>
                <img src={src} alt={alt} />
            </Icon>
            <MenuInformations>
                {children}
            </MenuInformations>
            <div className="flecha">
                <img src={arrow} alt="Arrow Image" />
            </div>
        </Container>
    )
}