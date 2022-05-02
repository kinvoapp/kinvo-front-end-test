import styled from 'styled-components';

export const Container = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border-bottom: 1px solid var(--border-Menu);
  padding: 2rem 1rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyleValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & + div {
    margin-left: 1rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.color ? props.color : 'var(--img1)')};
    border-radius: 50%;
    margin-right: 0.8rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: medium;
    color: var(--text-menu);
    margin: 0;
    padding: 0;

    &:before {
      content: '${(props) => props.title}';
      display: block;
      font-size: 8px;
      text-transform: uppercase;
      color: var(--text-menu);;
      
    }
  }
`;
