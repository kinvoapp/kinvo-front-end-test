import styled from "styled-components";
import { getTheme } from "../../styles/theme";

const Divider = styled.div`
  width: 100%;
  height: 0px;
  border-bottom: solid 2px
    ${(props) => getTheme(props).background.main};
  margin: 0.5rem 0;
`;

export { Divider };
