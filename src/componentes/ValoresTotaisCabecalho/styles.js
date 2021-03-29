import styled from "styled-components";

const SectionValoresTotais = styled.section`
    margin: 30px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const WrapperBlocoDado = styled.div`
    background-color: #FFF;
    min-height: 70px;
    min-width: 200px;
    max-height: 70px;
    max-width: 230px;
    border-radius: 15px;
    position: relative;

    display: flex;
    align-items: center;
`;

WrapperBlocoDado.TituloValor = styled.div`
    margin-left: 20px;
    display: inline;
`;

const LinhaVertical = styled.span`
    position: absolute;
    height: 70%;
    border-left: 1px solid;
    display: flex;
    align-items: center;
    margin-left: 8px;
`;

export {
    WrapperBlocoDado, SectionValoresTotais, LinhaVertical
}