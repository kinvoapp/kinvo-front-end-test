import styled from 'styled-components'

export const StyledPagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px 0;
    z-index: 1;

    button{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 30px;
        height: 30px;
        box-shadow: 0px 8px 16px 0px rgba(154,173,194,0.16);
        border-radius: 8px;
        margin: 1%;
        border: none;
        outline: none;

        &:hover{
            box-shadow: 0px 0px 16px 0px rgba(154,173,194,0.16);
            -webkit-filter: brightness(95%);
            -webkit-transition: all 0.6s ease;
            -moz-transition: all 0.6s ease;
            -o-transition: all 0.6s ease;
            -ms-transition: all 0.6s ease;
            cursor: pointer;
        }
    
        &:active {
            box-shadow: 0px 0px 4px 0px rgba(154,173,194,0.16);
            -webkit-filter: brightness(90%);
            -webkit-transition: all 0.4s ease;
            -moz-transition: all 0.4s ease;
            -o-transition: all 0.4s ease;
            -ms-transition: all 0.4s ease;
            cursor: pointer;
        }
    }

    .pageNumber {
        background-color: white;
    }

    .pageNumberActive {
        background-color: var(--color-primary-dark);
        color: white;
    }

    .arrow{
        background-color: #BE1144;
        color: white;
    }

`
