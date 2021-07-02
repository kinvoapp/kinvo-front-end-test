import styled from 'styled-components'


export const Content =styled.article`
    background: var(--white-800);
    max-width: 230px;

    article {
        display: flex;
        align-items: flex-start;
        justify-content:center;
        flex-flow: column;
        
        
        >section {
            display: flex;
            align-items: center;
            flex-flow: row;
            
            border-bottom: 1px solid var(--grey-200);
            gap: 16px;
            height:87px;
            padding: 8px;
        }

        p{
            color: var(--grey-800);
            font-family:'Montserrat', sans-serif;
            font-weight: 500;
            padding: 8px;
        }

        button{
            display: flex;
            align-items: center;
            background: var(--white-800);
            border:none;
            font-size: 16px;
        }

        
        .dropdown-content{
            background: var(--grey-500);
        }
        .dropdown-item{
            font-family:'Montserrat', sans-serif;
            padding: 8px;

        }
        
    }

`