import { Container, 
         Header, 
         Title, 
         SearchContainer, 
         Section } from './style'

import SearchIcon from '../../../../assets/search-icon.svg'

const MinhasRendasFixas = () => {

    return (

        <Container>
            <Header>
                <Title>Minhas Rendas Fixas</Title>
                <SearchContainer search={SearchIcon}>
                    <select name="select">
                        <option value="valor1">Valor 1</option>
                        <option value="valor2" selected>Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>
                    <div>
                        <input type='text' />
                    </div>
                </SearchContainer>
            </Header>
            <Section>
                
            </Section>
        </Container>
    )
}

export default MinhasRendasFixas