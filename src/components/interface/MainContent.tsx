import styled from "styled-components";
import { getTheme } from "../../styles/theme";

const MainWrapper = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start
  align-items: stretch;
  background: ${(props) => getTheme(props).background.main};
  padding: 1rem;
`;

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <>
      <MainWrapper>{children}</MainWrapper>
    </>
  );
}
