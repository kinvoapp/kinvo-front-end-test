import React from 'react';

import alertIcon from '../../assets/alert_icon.svg';
import { Container, Content, Info } from './styles';

interface CardProps {
  info: string;
  infoIcon?: string | boolean;
}

export const Card: React.FC<CardProps> = ({
  info,
  infoIcon = true,
  children
}) => {
  function getIcon() {
    if (typeof infoIcon === 'string') return infoIcon;

    return alertIcon;
  }

  return (
    <Container>
      <Info>
        <h5>{info}</h5>
        <>{infoIcon && <img src={getIcon()} alt="info icon" />}</>
      </Info>

      <Content>{children}</Content>
    </Container>
  );
};
