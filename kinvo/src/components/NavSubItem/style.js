import styled from "styled-components";

export const NavSubItemContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    padding: 15px;
    border-bottom: 0.5px solid #CCCFD1; 
    cursor: pointer;

    &:hover, &.active {
        background: #F8FAFB;
    }

    p {
        color: #707B81;
        font-size: 13px;
        font-weight: 500;
    }
    
    p::before {
        content: "\\2022";
        font-size: 24px;
        color: #4C309B;
        font-weight: bold;
        display: inline-block;
        width: 1em;
    }
`;