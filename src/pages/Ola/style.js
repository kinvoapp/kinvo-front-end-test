import styled from 'styled-components'

export const Container = styled.div`

  display: grid;
  grid-template-areas: "head head"
                       "nav  main";
  grid-template-rows: 90px 1fr;
  grid-template-columns: 225px 1fr;
  height: 100%;
  `