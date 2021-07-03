/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo-xd.svg';
import { Wrapper } from './styles';

export const Header = () => {
  return (
    <Wrapper>
      <div>
        <Logo />
      </div>
    </Wrapper>
  );
};
