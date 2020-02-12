import styled from 'styled-components';

export const SearchContainer = styled.div`
    background-color: #EEF2F4;
    width: 250px;
    height: 33px;
    border-radius: 15px;
    padding: 0 6px;
    display: flex;
    flex-direction: row;

    input {
        color: #707B81;
        background-color: transparent;
        border: none;
        outline: 0;
        width: 250px;
        padding: 0 8px;
    }

    img {
        object-fit: contain;
    }
`;
