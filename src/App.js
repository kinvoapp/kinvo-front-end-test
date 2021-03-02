import Header from './components/header'
import Sidebar from './components/sidebar'
import Main from './components/main'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
  "header header"
  "sidebar main";
  grid-template-columns: 226px 1fr;
  overflow-x: hidden;
  @media(max-width: 990px) {
    grid-template-areas:
    "header"
    "main";
    grid-template-columns: 100%;
  }
`

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Main />
    </Wrapper>
  )
}