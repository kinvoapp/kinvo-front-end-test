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
  ${({ size, color, weight, transform, margin, letterSpacing, lineHeight, right }) =>
    getDinamicBasis(size, color, weight, transform, margin, letterSpacing, lineHeight)}
  text-align: ${(props) => (props.right ? 'right' : 'initial')};
`;

//*********** - SVG's - *************
export const SvgWrapper = styled.div`
  & > svg circle,
  ellipse {
    fill: var(--c-${(props) => props.color || 'violet'});
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

  & + &:not(:last-child) {
    margin-right: var(--m-10);
  }
`;

// *********** - HEADER CARD - *************
export const HeaderCard = styled.div`
  min-width: 16.5rem;
  max-height: 6rem;
  padding: 1rem;
  background-color: var(--c-white);
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  margin-bottom: var(--m-10);
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
  background-color: inherit;
  grid-template-columns: auto 3fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'header   .......'
    'content  content';
  & + &:not(:last-child) {
    width: 48rem;
    margin: 0 1rem;
  }

  & + &:last-child {
    min-width: 20rem;
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
  background-color: inherit;
  position: relative;
  bottom: -1px;

  & > svg {
    margin-left: var(--m-10);
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
  background-color: inherit;
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
    margin-right: var(--m-10);
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

//****** - FIXED INCOME TABLE HEADER - ******
export const FixedIncomeTableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7rem;
  padding: var(--p-20);
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-cyan-light);
  border-radius: 10px 10px 0 0;
`;

export const FixedIncomeTableHeaderFilterWrapper = styled.div`
  display: flex;
`;

//****** - FIXED INCOME TABLE FOOTER - ******
export const FixedIncomeTableFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  padding: var(--p-20);
  background-color: var(--c-white);
  border-radius: 0 0 10px 10px;
`;

export const FixedIncomeTableFooterLimiter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 2rem;

  & input {
    height: 3.5rem;
    width: 3.5rem;
    text-align: center;
    border: 1px solid var(--c-cyan);
    border-radius: 5px;
    font-size: var(--f-13);
    color: var(--c-silver);
    outline: none;

    &:focus {
      box-shadow: 0px 0px 0px 1px var(--c-violet);
    }
  }
`;

//********* - SEARCHBAR - ***********
export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & svg {
    position: absolute;
    left: 1rem;
  }
`;

export const SearchBar = styled.input`
  font-family: inherit;
  font-size: 1.2rem;
  width: 24rem;
  height: 3.2rem;
  border: 1px solid var(--c-cyan-dark);
  border-radius: 10px;
  outline: none;
  padding-left: 3.5rem;

  &:focus {
    box-shadow: 0px 0px 0px 1px var(--c-violet);
  }
`;

//********* - ORDER DROPDOWN - ***********
export const OrderDropdownWrapper = styled(SearchBarWrapper)`
  & svg {
    position: absolute;
    right: 3.3rem;
    left: initial;
    transform: rotate(90deg) scale(1.2);
    path {
      fill: var(--c-neutral-dark);
    }
  }
`;

export const OrderDropdown = styled(SearchBar)`
  width: 15.5rem;
  padding: 0 1rem;
  margin-right: 1.7rem;
  color: var(--c-neutral-light);
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  & option {
    width: inherit;
  }
`;

//******* - PAGINATION - **********
export const Pagination = styled.div`
  display: flex;
`;

export const PaginationNumbersWrapper = styled.div`
  max-width: 13.5rem;
  overflow-x: hidden;
  & div {
    transition: 0.3s ease-in-out;
    display: flex;
    transform: translateX(${(props) => `-${props.motion}` || 0}rem);
  }
`;

export const PaginationButton = styled.div`
  position: relative;

  & input[type='radio'] {
    visibility: hidden;
    position: absolute;
    pointer-events: none;
  }

  & input[type='radio']:checked + label {
    background-color: var(--c-cyan-dark);
    color: var(--c-white);
    font-weight: bold;
  }
`;

export const PaginationLabel = styled.label`
  cursor: pointer;
  width: 3.5rem;
  margin: 0 0.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--c-cyan-light);
  border-radius: 5px;
  font-size: var(--f-13);
  color: var(--c-silver);
  box-shadow: 0px 0px 10px var(--c-alpha-lighter);

  &:hover {
    background-color: var(--c-cyan-light);
  }
`;

export const PaginationArrow = styled(PaginationLabel)`
  & svg {
    transform: rotate(${(props) => props.rotate || '0'}deg);
    path {
      fill: var(--c-silver);
    }
  }
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

//********* - MENU - **********
export const KinvoPremiumSideMenu = styled.nav`
  grid-area: menu;
  width: 27rem;
  height: 100%;
  background-color: #fff;
`;
export const KinvoPremiumSideMenuItem = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c-${(props) => props.color || 'white'});
  height: 6.7rem;
  width: 100%;
  padding: 1.5rem 3rem;
  border-bottom: 1px solid var(--c-silver-light);
`;

export const KinvoPremiumSideMenuItemContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 80%;
`;

export const KinvoPremiumSideMenuItemWrapper = styled.div``;
export const KinvoPremiumSideMenuSubItemWrapper = styled.div``;

export const KinvoPremiumSideMenuSubItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  padding-left: 5rem;
  height: 4.7rem;
  width: 100%;
  background-color: var(--c-${(props) => (props.active ? 'ghostwhite' : 'white')});

  &::before {
    content: '';
    position: absolute;
    left: 3rem;
    height: 0.6rem;
    width: 0.6rem;
    border-radius: 50%;
    background-color: var(--c-violet);
  }
`;

//********* - HEADER - **********
export const KinvoPremiumHeader = styled.div`
  grid-area: header;
  padding: 0 var(--p-30);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 9rem;
  background-color: #fff;
  box-shadow: 0px 3px 20px var(--c-alpha-cyan);
  z-index: 1;
`;

export const KinvoPremiumHeaderInfo = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin: var(--m-28);
  }
`;
export const KinvoPremiumHeaderInfoItem = styled.div`
  display: flex;
  align-items: center;

  & div {
    margin-left: var(--m-10);
    display: flex;
    flex-direction: column;
  }
`;

//********* - KINVO PREMIUM - **********
export const KinvoPremiumWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'menu   content';
`;
