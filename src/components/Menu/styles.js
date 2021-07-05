import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #fff;
  width: 227px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 17px 14px;
  background-color: #fefefe;
  position: relative;
  border-bottom: 1px solid #cccfd0;
  cursor: pointer;

  &.active {
    background-color: #f9fafb;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    background-color: ${(props) => (props.active ? '#4C309B' : '#dae0e3')};
    margin-right: 14px;
  }

  h1 {
    font-size: 13px;
    font-weight: 500;
    flex: 1;
    color: #707b81;
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
  background-color: white;
  border-bottom: 1px solid #cccfd0;
  color: #707b81;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &.active {
    background-color: #f9fafb;
  }

  > svg {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    content: '●';
    color: #4c309b;
    display: inline-block;
    margin-right: 10px;
  }
`;
