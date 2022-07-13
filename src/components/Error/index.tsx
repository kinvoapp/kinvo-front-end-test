import { Container } from "./styles";

import bugIcon from '../../assets/bug.svg';

export function Error() {
  return (
    <Container>
      <img src={bugIcon} alt="Bug icon" />
      <h1>Tivemos alguns problemas...</h1>
      <p>Já estamos correndo pra resolver!</p>
    </Container>
  );
}
