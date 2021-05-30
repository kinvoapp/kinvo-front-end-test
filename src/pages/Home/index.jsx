import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
}
