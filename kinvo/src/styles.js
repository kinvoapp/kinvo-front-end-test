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
    background-color: #DAE0E3;
    border-color:#D6D9DD;
     margin-right: 22px;
     box-shadow: #000000;
`;

export const IconBoxes = styled.div `
    margin-bottom:10px;
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
    margin-top: 23px;
}
`;
export const SearchBar = styled.input `
    border-top-right-radius: 17px;
    border-bottom-right-radius:17px;
    width: 250.18px;
    height: 31px;
    border-style: none;
    outline-style: none;
    background-color: #EEF2F4;
    padding-right: 60px;
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
export const TelaProducts = styled.div `
    background-color : #FFFFFF;
    width: 1053px;
    margin-left: 19px;
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
    width: ${props => `${props.width}px`};
    display: ${props => `${props.display}px`};
    font-style: Helvetica Neue;
    font-size: ${props => `${props.fontSize}px`};
    color: #4C309B;
    margin-top: ${props => `${props.top}px`};
    margin-left: ${props => `${props.left}px`};
    margin-right: ${props => `${props.right}px`};
    text-align: ${props => `${props.align}`}
`;

export const Border = styled.div `
    width: 0px;
    height: 32.58px;
    border-left-style: solid;
    border-left-width: 2.5px;
    border-right-width: 2.5px;
    border-right-style: solid;
    border-left-color: #4C309B;
    border-right-color: #4C309B;
    border-radius: 3px;
`;

export const BoxLine = styled.div `
    border-bottom-color: #CCCFD1;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    height: 33.61px;
    width: 993px;
    padding-bottom: 10px;
    padding-top: 20px;
    display: inline-flex;
`;