import React from 'react';

import { Container, arrowIconImg, ButtonInfo } from './styles';
import arrowIcon from '../../images/arrow-icon-1.png';


function SidebarButton(props) {
  const { active, imgSrc, name } = props;
  return (
    <Container getState={active}>
      <ButtonInfo>
        <img src={imgSrc} alt="Sidebar Logo" width={40} height={40} />
        <p>{name}</p>
      </ButtonInfo>
      <img src={arrowIcon} alt="Arrow Icon" />
    </Container>
  );
}

export default SidebarButton;
