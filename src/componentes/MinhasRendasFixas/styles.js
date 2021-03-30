import styled, { css } from "styled-components";

const WrapperRendasFixas = styled.div`
    background-color: #fff;
    margin-bottom: 10px;
`;

WrapperRendasFixas.Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 20px;
`;

const WrapperFiltroBusca = styled.div`
    display: flex;
    justify-content: space-between;
`

WrapperFiltroBusca.Input = styled.input`
    margin-right: 20px;
    padding: 10px;
    border-radius: 10px;
`;

WrapperFiltroBusca.Select = styled.select`
    margin-right: 20px;
    border-radius: 10px;
`;

const ColunaTabela = styled.section`
    margin: 30px;
`;

const DadosTabela = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
    border: 1px solid;
    border-radius: 8px;
    padding: 5px;
`;

DadosTabela.SubTitulo = styled.div`
    ${({ minhaPosicao }) => minhaPosicao ? css` margin-right: 15px;` : false}
`;

DadosTabela.SubTitulo.Span = styled.span`
    font-size: 10pt;
`;

DadosTabela.SubTitulo.P = styled.p`
    font-weight: bold;
    ${({ color }) => {
        if (!color && color !== false) {
            return css` color: #008DCB;`; //azul
        }

        if (color === 'roxo') {
            return css` color: #8A51BA;`;
        }

        if (color === 'verde') {
            return css` color: #38BFA0; `;
        }
    }}
    ${({ width }) => width ? css` width: 70%;` : false}
`;

const WrapperTitulo = styled.div`
`;

WrapperTitulo.Titulo = styled.small`
    color: #4E5B61;
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-radius: 8px 8px 8px 0px;
    padding: 5px;
    position: relative;
    z-index: 1;
    background-color: #fff;
`;

const Tabela = styled.table`
    display: flex;
    max-height: 500px;
    overflow: auto;
`;

const MsgNenhumDado = styled.h1`
    text-align: center;
    margin-left: 100px;
`;
export {
    WrapperRendasFixas, WrapperFiltroBusca, DadosTabela,
    ColunaTabela, WrapperTitulo, Tabela, MsgNenhumDado
}