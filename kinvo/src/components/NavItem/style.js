import styled from "styled-components";

export const NavItemContainer = styled.li`
    min-height: 67px;
    padding: 15px;
    border-bottom: 0.5px solid #CCCFD1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    color: #707B81;

    &:hover, &.active {
        background: #F8FAFB;
    }

    div {
        display: flex;
        align-items: center;

        p {
            width: 90px;
            margin-left: 15px;
        }
    }

    +ul {
        height: 0px;
        transition: ease 0.3s;
        overflow: hidden;
    }

    &.show + ul {
        height: fit-content;
    }
`;