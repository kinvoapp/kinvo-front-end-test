import arrow from '../../../assets/icones/arrow.svg'

import { Container, Icon, ImgContainer, MenuInformations, SobMenuContainer, SobMenuList, SobMenuListItem } from './styles'

export function LeftItem({ src, alt, children, sobMenu }) {
    
    return (
        <>
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
            {sobMenu != '' ? 
                <SobMenuContainer>
                    <SobMenuList>
                        <SobMenuListItem>
                            Ação
                            <ImgContainer><img src={arrow} alt="Arrow Image" /></ImgContainer>
                        </SobMenuListItem>
                        
                        <SobMenuListItem>
                            Fundo
                            <ImgContainer><img src={arrow} alt="Arrow Image" /></ImgContainer>
                        </SobMenuListItem>
                        
                        <SobMenuListItem>
                            Fundo Imobiliário
                            <ImgContainer><img src={arrow} alt="Arrow Image" /></ImgContainer>
                        </SobMenuListItem>
                        
                        <SobMenuListItem>
                            Fundo Renda Fixa
                            <ImgContainer><img src={arrow} alt="Arrow Image" /></ImgContainer>
                        </SobMenuListItem>
                    </SobMenuList>
                </SobMenuContainer>
            : ''}
        </>
    )
}