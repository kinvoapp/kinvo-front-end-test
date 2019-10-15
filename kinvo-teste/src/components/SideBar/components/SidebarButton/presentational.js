import React from 'react';

import { Container, ButtonLogo, ButtonInfo } from './styles';
import arrowIcon from '../../images/arrow-icon-1.png';


function SidebarButton(props) {
  const { active, imgSrc, name } = props;
  return (
    <Container getState={active}>
      <ButtonInfo>
        <ButtonLogo getState={active}>
          <img src={imgSrc} alt="Sidebar Logo" width={40} height={40} />
        </ButtonLogo>
        <p dangerouslySetInnerHTML={{ __html: name }} />
      </ButtonInfo>
      <img src={arrowIcon} alt="Arrow Icon" />
    </Container>
  );
}

export default SidebarButton;
