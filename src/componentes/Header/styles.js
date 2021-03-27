import styled, { css } from 'styled-components';

const WrapperHeader = styled.div`
    background-color: #FFF;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    min-height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    z-index: 1;
    width: 100%;
`

const NomeEmpresa = styled.div`
    display: inherit;
    margin-left: 40px;
`;

NomeEmpresa.H1Kinvo = styled.h1`
    font-weight: bold;
    color: #4C309B;
`

const DadosHeader = styled.div`
    margin-right: 40px;
    display: flex;
`;

DadosHeader.WrapperIconDados = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    @media(max-width: 800px){
        ${({menuLogado}) => !menuLogado ? css`display: none;` : false}
    }
`;

DadosHeader.Dados = styled.div`
`;

DadosHeader.Dados.Titulo = styled.small``;

DadosHeader.Dados.Valor = styled.h3`
color: #4E5B61;
    font-weight: 800;
`;


export {
    WrapperHeader,
    NomeEmpresa,
    DadosHeader
}