import React from 'react';

import { Container } from './styles';


function SidebarButton(props) {
  const { active, imgSrc, name } = props;
  return (
    <Container getState={active}>
      <img src={imgSrc} alt="Sidebar Logo" width={40} height={40} />
      <p>{name}</p>
    </Container>
  );
}

export default SidebarButton;
