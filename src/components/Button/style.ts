import styled from 'styled-components'

export const Content = styled.div`
        display: flex;
        align-items: center;

        padding: 25px;
    button{
        background: var(--white-800);
        border: 0px;
        border-radius: 16px;
        font-family: "Montserrat", sans-serif;
        width: 170px;
        .form{
            align-items: center;
            justify-content: center;
            border-left: 2px solid var(--grey-800);
            height: 9px;
        }
        div{
           
            border-left: 2px solid var(--grey-500);
            color: var(--grey-300);
            height: 60px;
            padding: 8px 12px;
            text-align: left;

        
            
        span{
            font-weight: 500;
        }
        p{
            color: var(--purple-800);
            font-size: 20px;
            font-weight: 700;
        }
}
    }
    
`