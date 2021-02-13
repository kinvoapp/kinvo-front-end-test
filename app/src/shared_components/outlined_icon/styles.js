import styled from 'styled-components'

export const Container = styled.div`
    border: none;
    background: none;
    user-select: none;
    outline: none;
    display: flex;
    align-items: center;

    p {
        max-width: 80px;
        text-align: left;
        margin-left: 10px;
        color: var(--color-primary);
    }

    .outlined_icon {
        border-radius: 50%;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        font-size: 10px;
        padding: 4px;
        position: relative;
        transition: 0.1s;
        background: var(--color-icon-background);
        
    }

    .active_outlined_icon{
        border-radius: 50%;
        border: none;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 34x;
        height: 34px;
        padding: 4px;
        font-size: 10px;
        position: relative;
        color: var(--color-light);
        transition: 0.1s;
        background: var(--color-primary);
    }
 

    img {
        height: 18px;
    }

    &:hover {
        cursor: pointer;
        transition: 0.3s ease;
        opacity: 0.8;
    }
    &:active {
        user-select: none;
        transition: 0.3s ease;
        opacity: 0.6;
    }
`