import styled from 'styled-components';

//*********** - TYPROGRAPH - *************
function getDinamicBasis(size, color, weight, transform, margin, letterSpacing, lineHeight) {
  return `font-size: var(--f-${size || '16'});
  color: var(--c-${color || 'neutral-light'});
  font-weight: ${weight || 'normal'};
  text-transform: ${transform || 'initial'};
  letter-spacing: ${letterSpacing ? `${letterSpacing}px` : 'normal'};
  line-height: ${lineHeight || 'initial'};
  margin: ${margin || 0};
  `;
}

export const Title = styled.h1`
  ${({ size, color, weight, transform, margin, letterSpacing, lineHeight }) =>
    getDinamicBasis(size, color, weight, transform, margin, letterSpacing, lineHeight)}
`;

export const Text = styled.p`
  ${({ size, color, weight, transform, margin, letterSpacing, lineHeight }) =>
    getDinamicBasis(size, color, weight, transform, margin, letterSpacing, lineHeight)}
`;

//*********** - SVG's - *************
export const SvgWrapper = styled.div`
  & > svg circle {
    fill: var(--c-${(props) => props.color});
  }
`;

//********* - HEADER - ***********
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderCardWrapper = styled.div`
  display: flex;
  margin: var(--m-28) 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// *********** - HEADER CARD - *************
export const HeaderCard = styled.div`
  min-width: 16.5rem;
  max-height: 6rem;
  padding: 1rem;
  background-color: var(--c-white);
  border-radius: 10px;
  margin-right: var(--m-10);
  margin-bottom: var(--m-10);
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 2px solid var(--c-cyan);
  padding: 0.2rem 0.7rem;
`;

//***** - FIXED INCOME CARD - *****
export const FixedIncomeCard = styled.div`
  display: grid;
  grid-template-columns: auto 3fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'header   .......'
    'content  content';
  & + &:not(:last-child) {
    width: 48rem;
    margin: 0 1rem;
  }
`;

export const FixedIncomeCardHeader = styled.header`
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  border: 1px solid var(--c-cyan-dark);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  background-color: var(--c-white);
  z-index: 2;
  position: relative;
  bottom: -0.1rem;

  & > svg {
    margin-left: 1rem;
  }
`;

export const FixedIncomeCardContent = styled.div`
  grid-area: content;
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--c-cyan-dark);
  border-radius: 0 10px 10px 10px;
  background-color: var(--c-white);
`;
export const FixedIncomeCardText = styled.div`
  width: 20rem;
`;

export const FixedIncomeCardCell = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 15rem;

  &,
  & + &:not(:last-child) {
    margin-right: 1rem;
  }
`;

//****** - FIXED INCOME ROW *******
export const FixedIncomeRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--c-white);
  padding: var(--p-20);
  border-bottom: 1px solid var(--c-cyan-light);

  &:nth-of-type(even) {
    background-color: var(--c-ghostwhite);
  }
`;

//****** - FIXED INCOME TABLE ******
export const FixedIncomeTable = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: var(--box-shadow);
`;

export const FixedIncomeTableHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: var(--p-20);
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-cyan-light);
  border-radius: 10px 10px 0 0;
`;

export const FixedIncomeTableFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: var(--p-20);
  background-color: var(--c-white);
  border-radius: 0 0 10px 10px;
`;

//********* - LOADING - ***********
export const Loading = styled.div`
  justify-self: center;
  align-self: center;
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;

  & div {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--c-violet-light);
    border-radius: 50%;
    animation: loading 1.2s linear infinite;
  }

  & div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }

  & div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }
  & div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }
  & div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }
  & div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }
  & div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }
  & div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
  }
  & div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }
  & div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  }
  & div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
  }
  & div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
  }
  & div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
  }
  @keyframes loading {
    0%,
    20%,
    80%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
`;
