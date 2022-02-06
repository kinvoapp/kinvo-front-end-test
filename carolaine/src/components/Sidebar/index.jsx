import React from "react";
import {
  Aside,
  List,
  SubList,
  Item,
  ItemList,
  ItemSubList,
  Text,
  Link,
  Title,
} from "./style";
import { FaChevronRight as ChevronRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Aside>
      <List>
        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_resumo_carteira.png")} />
            </figure>
            <Text>
              <Title>Resumo da Carteira</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_meus_produtos.png")} />
            </figure>
            <Text>
              <Title>Meus Produtos</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_meus_proventos.png")} />
            </figure>
            <Text>
              <Title>Meus Proventos</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <ItemList>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_classe_ativos.png")} />
            </figure>
            <Text>
              <Title>Classe de Ativos</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>

          <SubList>
            <ItemSubList>
              <a href="">
                <Title>Ação</Title>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubList>

            <ItemSubList>
              <a href="">
                <Title>Fundo</Title>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubList>

            <ItemSubList>
              <a href="">
                <Title>Fundo Imobiliário</Title>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubList>

            <ItemSubList selected>
              <a href="">
                <Title>Fundo Renda Fixa</Title>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubList>
          </SubList>
        </ItemList>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_rentabilidade_real.png")} />
            </figure>
            <Text>
              <Title>Rentabilidade Real</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_projecao_carteira.png")} />
            </figure>
            <Text>
              <Title>Projeção de Carteira</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_risco_retorno.png")} />
            </figure>
            <Text>
              <Title>Risco x Retorno</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_cobertura_fgc.png")} />
            </figure>
            <Text>
              <Title>Cobertura do FGC</Title>
              <Link>
                <ChevronRight />
              </Link>
            </Text>
          </a>
        </Item>
      </List>
    </Aside>
  );
};

export default Sidebar;
