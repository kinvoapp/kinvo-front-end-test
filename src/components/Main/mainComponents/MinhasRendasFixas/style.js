import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px;
`

export const Header = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h4`
    
    font-weight: 500;
    color: var(--text-color-title-main-2);
`

export const SearchContainer = styled.div`

    display: flex;
    gap: 17px;

    select{

        padding-left: 10px;
        border: solid 1px #D6D9DD;
        width: 155px;
        height: 32px;
        border-radius: 10px;
    }

    
    div{

        position: relative;

        input{
            padding-left: 35px;
            border: solid 1px #D6D9DD;
            width: 240px;
            height: 32px;
            border-radius: 10px;
        }
        
        &::after{
    
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            top: 20%;
            left: 8px;
            background-size: 100%;
            background-position: center center;
            background-repeat: no-repeat;
            background-image: url(${props => props.search})
        }
        
    }

`

export const Section = styled.section`

    width: 100%;
`