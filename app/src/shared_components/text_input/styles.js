import styled from 'styled-components'

export const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-main);
    margin: 5px 0;
    
    h5 {
        font-weight: var(--font-weight-medium);
        font-size: 16px;
        color: var(--color-dark);
        margin: 10px;
    }

    .text_input_container {
        border: 1.5px solid var(--color-secondary);
        border-radius: var(--border-radius-large);
        padding: 0 8px;
        height: 32px;
        background: white;
        display: flex;
        align-items: center;
        overflow: hidden;
        
        img {
            max-height: 20px;
            margin-right: 10px;
        }
    
        input  {
            font-family: var(--font-family-main);
            font-weight: var(--font-weight-small);
            font-size: 16px;
            color: var(--color-dark);
            width: 100%;
            outline: none;
            background: none;
            border: none;
        }
    
        input::placeholder {
            color: var(--color-darkgray);
        }
    }
 



`