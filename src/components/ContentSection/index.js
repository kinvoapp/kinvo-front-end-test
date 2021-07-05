import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Header, Title } from './styles';

export const ContentSection = ({ title, children, filter }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        {filter && filter}
      </Header>
      {children}
    </Wrapper>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  filter: PropTypes.element,
};

ContentSection.defaultProps = {
  filter: null,
};
