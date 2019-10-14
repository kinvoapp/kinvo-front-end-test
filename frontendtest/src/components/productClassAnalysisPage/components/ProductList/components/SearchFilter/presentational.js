import React from 'react';
import {
  Container, SearchTool, SearchIcon, SearchProductInput,
} from './styles';

function Presentational(props) {
  const { searchProductInputHandleChange } = props;

  return (
    <Container>

      <h4>Fundos</h4>

      <SearchTool>
        <a href="#">
          <SearchIcon />
        </a>
        <SearchProductInput
          onChange={searchProductInputHandleChange}
        />
      </SearchTool>

    </Container>
  );
}

export default Presentational;
