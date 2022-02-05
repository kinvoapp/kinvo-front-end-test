import styled from "styled-components";

export const MyFixedIncomeContainer = styled.section`
    background: #fff;
    padding: 15px;
    margin: 25px 0;
    border-radius: 10px;
`; 

export const TitleWRapper = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const Title = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: #627179;
`;

export const Select = styled.select`
    width: 155px;
    height: 32px;
    color: #707B81;
    font-size: 12px;
    padding: 5px 10px;
    margin-right: 17px;

    option {
        font-size: 16px;
    }
`;

export const Input = styled.input`
    width: 240px;
    height: 32px;
`;

export const DisplayItems = styled.div`
    margin: 25px 0;

    .containerPagination {
        display: flex;

        li {
            border: 1px solid #EDEEF0;
            width: 35px;
            height: 35px;
            box-shadow: 0px 0px 10px #00000008;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 5px;
            cursor: pointer;
            color: #C2C5CC;
            font-weight: 400;
            

            &:hover, &.selected {
                background: #DCE0E3;
                color: #fff;
            }

            &.disabled {
                background: #fff;
                color: #C2C5CC;
                cursor: default;
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
        }

        
    }
`;