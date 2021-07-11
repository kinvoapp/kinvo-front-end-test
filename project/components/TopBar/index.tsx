import React from "react";
import Box from "../Box";
import { Container } from "./styles";
import Image from "next/image";
import Typo from "../Typo";

import logoImg from "../../assets/logo.svg";
import saldoBrutoIcon from "../../assets/icons/saldo-bruto.svg";
import valorAplicadoIcon from "../../assets/icons/valor-aplicado.svg";
import rentabilidadeIcon from "../../assets/icons/rentabilidade.svg";
import minhaCarteiraIcon from "../../assets/icons/minha-carteira.svg";
import menuIcon from "../../assets/icons/menu.svg";

export default function TopBar() {
  return (
    <Container>
      <Box
        padding="0 28px"
        alignItems="center"
        height="90px"
        width="100%"
        justifyContent="space-between"
      >
        <Image src={logoImg} />
        <Box>
          <Box>
            <Image src={saldoBrutoIcon} width={30} />
            <Box margin="0 8px" flexDirection="column">
              <Typo.Text textTransform="uppercase" margin="0" fontSize={8}>
                Saldo Bruto
              </Typo.Text>
              <Typo.Text margin="0" fontWeight="bold" fontSize={16}>
                130.521.230,02
              </Typo.Text>
            </Box>
          </Box>
          <Box margin="0 15px">
            <Image src={valorAplicadoIcon} width={30} />
            <Box margin="0 8px" flexDirection="column">
              <Typo.Text textTransform="uppercase" margin="0" fontSize={8}>
                Valor Aplicado
              </Typo.Text>
              <Typo.Text margin="0" fontWeight="bold" fontSize={16}>
                521.230,02
              </Typo.Text>
            </Box>
          </Box>
          <Box margin="0 15px">
            <Image src={rentabilidadeIcon} width={30} />
            <Box margin="0 8px" flexDirection="column">
              <Typo.Text textTransform="uppercase" margin="0" fontSize={8}>
                Rentabilidade
              </Typo.Text>
              <Typo.Text margin="0" fontWeight="bold" fontSize={16}>
                2,34%
              </Typo.Text>
            </Box>
          </Box>
          <Box margin="0 15px">
            <Image src={minhaCarteiraIcon} width={30} />
            <Box margin="0 8px" flexDirection="column">
              <Typo.Text textTransform="uppercase" margin="0" fontSize={8}>
                Carteira
              </Typo.Text>
              <Typo.Text margin="0" fontWeight="bold" fontSize={16}>
                Minha Carteira
              </Typo.Text>
            </Box>
          </Box>
          <Box>
            <Image src={menuIcon} width={30} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
