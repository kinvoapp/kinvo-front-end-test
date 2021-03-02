import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
`;

export const Page = styled.div`
    padding: 0 10px;
    margin: 5px auto;
`;

export const Titulo = styled.h1`
    font: 700 1.6rem Montserrat;
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin-top: ${props => props.margin};
    margin-bottom: ${props => props.margin};
    margin-left: ${props => props.marginLeft};
`;

export const Subtitulo = styled.span`
    font: 700 1.6rem Montserrat;
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin-top: 2px;
    margin-bottom: 2px;
`;

export const Texto = styled.span`
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin-top: 2px;
    margin-bottom: 2px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 180px;
    margin-right: ${props => props.margin};
    padding: 15px;
    border-radius: 10px;
    background: #FFFFFF;
    align-items: start;
    justify-content: center;
`;

export const Session = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 10px;
    background: #FFFFFF;
    align-items: start;
    justify-content: center;
`;

export const Div = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
`;

export const Select = styled.select`
    width: 100%;
    height: 35px;
    color: #707b81;
    border: 1px solid #dae0e3;
    border-radius: 10px;
    padding: 0 10px;
    margin-right: 10px;

    option {
        color: #707b81;
        background: white;
        display: flex;
        white-space: pre;
        border: 1px solid #dae0e3;
        min-height: 20px;
        padding: 0px 5px 3px;
    }
`;

export const Search = styled.div`
    padding: .5rem;
    position: relative;
    display: flex;  
    align-items: center;
    width: 100%;
`

export const Input = styled.input`
    max-width: 300px;
    height: 35px;
    color: #333333;
    border: 1px solid #dae0e3;
    border-radius: 10px;
    padding: 1rem 1rem 1rem 3.5rem;
    margin-right: 10px;
`;

export const Divider = styled.hr`
    width: 100%;
    border: 0.5px solid #dae0e3;
`;

export const Line = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Renda = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #dae0e3;
    background: #FFFFFF;
    align-items: start;
    justify-content: start;
    text-align: start;
`;

export const RendaMeio = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #dae0e3;
    background: #FFFFFF;
    align-items: start;
    justify-content: start;
    text-align: start;
`;

export const RendaLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-end;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Button = styled.button`
    display: grid;
    height: 35px;
    width: 35px;
    border-radius: 4px;
    border: 1px solid #dae0e3;
    background: transparent;
    padding: 20px;
    margin: 10px;
    align-content: center;
    justify-content: center;
    font-size: 16px;
    color: #707b81;
    cursor: pointer;
`;
