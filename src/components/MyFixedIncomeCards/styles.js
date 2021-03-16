import styled, { css } from "styled-components";

import InfoIcon from "../../assets/info.svg";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 4rem 0;
`;

export const Title = styled.div`
  display: flex;
  padding: 0.9rem;
  width: 37rem;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.grayMedium};
    border-radius: ${theme.border.radius};
  `}
`;

export const TitleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleInfo = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    background: url(${InfoIcon});
    background-size: cover;
    background-position: center;
    width: 1.3rem;
    height: 1.3rem;
    display: inline-block;
    margin-left: 1rem;
  }

  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.medium};
  `}
`;

export const SubTitleInfo = styled.span`
  font-size: 1.2rem;
  display: inline-block;
  width: min(90%, 20rem);
  margin-top: 1.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.medium};
  `}
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

export const ClassItemText = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.medium};
  `}
`;

export const ClassItemType = styled.span`
  font-size: 1.4rem;
  margin-top: 0.3rem;

  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-weight: ${theme.font.medium};
  `}
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  width: 45.9rem;
  padding: 0.9rem;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.grayMedium};
    border-radius: ${theme.border.radius};
  `}
`;

export const PositionTitle = styled(TitleInfo)``;

export const PositionNumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PositionNumbers = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PositionNumber = styled.span`
  font-size: 1.6rem;

  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.medium};
  `}
`;

export const PositionNumberTitle = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-top: 1.6rem;

  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.medium};
  `}
`;

export const DueDate = styled(Position)`
  width: 19.8rem;
`;

export const DueDateTitle = styled(PositionTitle)``;

export const DueDateNumbersContainer = styled(PositionNumbersContainer)``;

export const DueDateNumbers = styled(PositionNumbers)``;

export const DueDataTitle = styled(PositionNumberTitle)``;

export const DueDataNumber = styled(PositionNumber)`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
  `}
`;
