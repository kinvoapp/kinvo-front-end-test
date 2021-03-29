import styled, { css } from 'styled-components';

const MyButtonIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    ${({ colorBackground }) => css`
        background-color: ${colorBackground};
    `}
`

const HorizontalLine = styled.hr`
    color: #CCCFD1;
    font-size: 0.5px;
`

const TituloPagina = styled.h2`
    color: #4C309B;
    font-stretch: condensed;
`;

const TituloDeDados = styled.small`
    color: #4C309B;
    background-color: #fff;
`;

const DadosColoridos = styled.p`
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
`;

export {
    MyButtonIcon, HorizontalLine, TituloPagina,
    TituloDeDados, DadosColoridos
}