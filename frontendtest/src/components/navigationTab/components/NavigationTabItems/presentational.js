import React from 'react';
import arrowIcon from '../../images/arrow.svg';
import '../../styles.css';
import { Container, NavigationTabText } from './styles';

function NavigationTabItems(props) {
  const { isActive, iconSource, label } = props;

  return (
    <a href="#">
      <Container isActive={isActive}>
        <NavigationTabText>
          <img alt="Logo - Resumo da carteira" src={iconSource} />
          <h5>
            { label }
          </h5>
        </NavigationTabText>
        <a href="#"><img alt="Ícone da seta" src={arrowIcon} /></a>
      </Container>
    </a>
  );
}

export default NavigationTabItems;
