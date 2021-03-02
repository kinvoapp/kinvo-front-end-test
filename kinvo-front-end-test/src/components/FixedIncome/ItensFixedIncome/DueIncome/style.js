import styled from 'styled-components'

export const Container = styled.div`
    width: 198px;
`;

export const ContainerTitle = styled.div`
    width: 60%;
    height: 24px;
    border-top: 1px solid #CCCFD1;
    border-left: 1px solid #CCCFD1;
    border-right: 1px solid #CCCFD1;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #FFFFFF;
    background: #FFFFFF;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const Title = styled.label`
    color: #4E5B61;
    font-size: 9px;    
`;

export const ContainerBody = styled.div`
    width: 100%;
    border: 1px solid #CCCFD1;
    border-radius: 0px 10px 10px 10px;
    position: relative;
    z-index: 1;
    margin-top: -1px;
    padding: 16px;
    display: flex;
    justify-content:space-between;
`;


export const TitleBody = styled.label`
    color: #4E5B61;
    font-size: 14px;    
`;

export const ClassBody = styled.label`
    color: #008DCB;
    font-size: 16px;    
`;


export const Separator = styled.div`
    width: 70%;
    display:flex;
    justify-content:center;
    align-items: center;
    margin-right: 16%; 
`;

export const SeparatorClass = styled.div`
    width: 74px;
    height: 34px;
    display:flex;
    justify-content:center;
    flex-direction: column;
`;