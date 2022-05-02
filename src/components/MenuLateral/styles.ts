import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--white);
  width: 14rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 1rem 1rem 1rem;
  background-color: var(--back-menu);
  position: relative;
  border-bottom: 1px solid var(--border-Menu);
  cursor: pointer;

  &.active {
    background-color: var(--back-menu-active) ;
  }
  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.color ? props.color : 'var(--img1)')};
    border-radius: 50%;
    margin-right: 10px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background-color: #4C309B : #dae0e3;
    margin-right: 14px;
  }

  h1 {
    font-size: 0.8rem;
    font-weight: 500;
    flex: 1;
    color: var(--text-menu);
  }

  > svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SubItem = styled.li`
  position: relative;
  padding: 16px 14px 15px 22px;
  background-color: var(--white);
  border-bottom: 1px solid #cccfd0;
  color: var(--text-menu);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &.active {
    background-color: var(--back-menu-active);
  }

  > svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: '●';
    color: var(--roxo-escuro);
    display: inline-block;
    margin-right: 10px;
  }
`;
