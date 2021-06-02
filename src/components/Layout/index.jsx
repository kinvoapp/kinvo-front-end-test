import { SideBar } from "../SideBar";
import { Header } from "../Header";
import { Container, Content } from "./styles";

export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <div className="division">
        <SideBar />
        <Content>{children}</Content>
      </div>
    </Container>
  );
}
