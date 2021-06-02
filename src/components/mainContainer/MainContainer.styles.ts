import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: block;
  margin: 20px 20px 0 20px;
`;

export const ChildrenStyles = styled(Container)`
  width: 100%;
  box-sizing: border-box;
`;

export const ChildrenMain = styled(ChildrenStyles)``;
