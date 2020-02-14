import styled from 'styled-components';

export const KinvoPremium = styled.div `
    width: ${props =>`${props.width}px`};
    padding: 31px 0px 30.47px 28px;
    background-color: #FFFFFF ;
    border-color: #707070;
`;

export const Line = styled.div `
    display:inline-flex;
`;

export const LeftSide = styled.div `
    width:225.71px;
    height:528px;
    background-color: #DAE0E3;
    border-color:#D6D9DD;
     margin-right: 22px;
     box-shadow: #000000;
`;

export const IconBoxes = styled.div `
    margin-bottom:3px;
    margin-top: 21px;
    margin-left: 23px;
    width: 190px;
    height: 75px;
    text-align: center;
    background-color: #FFFFFF;
`;
export const SummaryIcon = styled.div `
    margin-top:${props => `${props.top}px`};
    color: #707B81;
    font-size: ${props => `${props.fontSize}px`};
    margin-left: ${props => `${props.left}px`};
    margin-right: ${props => `${props.right}px`};
`;

export const SearchLine = styled.div `
    display:inline-flex;
}
`;
export const SearchBar = styled.input `
    border-radius: 17px;
    width: 250.18px;
    height: 20px;
    border-style: none;
    outline-style: none;
    background-color: #EEF2F4;
`;
export const TextButton = styled.div `
    width: ${props =>`${props.width}px`};
    height: ${props => `${props.height}px`};
    line-height: 16px;
    font-style: Helvetica Neue;
    color: #707B81;
    font-size: 14px;
    text-align:left;
    margin-top: 15px;
`;

export const Arrow = styled.div `
    width: 9.01px;
    height: 5.36px;
    margin-top: ${props => `${props.top}px`};
    margin-left: ${props => `${props.left}px`};
`;

export const TextSubtitle = styled.div `
    font-style: Helvetica Neue;
    font-size: 20px;
    color: #707B81;
    margin-top: 28px;
    margin-bottom: 23px;
    margin-left: 4px;
`;

export const TelaLista = styled.div `
    width: 1090px;
    background-color: #F8FAFB;
    display: ${props=> `${props.display}`};
`;

export const ProductInfos = styled.div `
    display: inline-flex;
`;

export const ListLine = styled.div `
`;
