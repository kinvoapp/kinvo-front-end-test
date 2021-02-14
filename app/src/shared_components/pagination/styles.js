import styled from 'styled-components'

export const StyledPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    z-index: 1;
    

    ion-icon {
        color: var(--color-icon-background);
        font-size: 16px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 35px;
        height: 35px;
        box-shadow: var(--box-shadow-medium);
        border-radius: 6px;
        margin: 1%;
        border: none;
        outline: none;
        background: var(--color-light);
        font-family: var(--font-family-primary);
        &:hover{
            box-shadow: 0px 0px 10px 0px var(--color-secondary);
            -webkit-transition: all 0.6s ease;
            -moz-transition: all 0.6s ease;
            -o-transition: all 0.6s ease;
            -ms-transition: all 0.6s ease;
            cursor: pointer;
        }
    
        &:active {
            box-shadow: 0px 0px 4px 0px var(--color-secondary);
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            -ms-transition: all 0.4s ease;
            cursor: pointer;
        }
    }

    .pageNumber {
        background-color: white;
        color: var(--color-icon-background);
        border: 2px solid var(--color-secondary);
    }

    .pageNumberActive {
        background-color: var(--color-icon-background);
        color: white;
        font-weight: 600;
    }


`
