import React from "react";
import {
  Aside,
  Lista,
  SubLista,
  Item,
  ItemLista,
  ItemSubLista,
  Texto,
  Link,
  Titulo,
} from "./style";
import { FaChevronRight as ChevronRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Aside>
      <Lista>
        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_resumo_carteira.png")} />
            </figure>
            <Texto>
              <Titulo>Resumo da Carteira</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_meus_produtos.png")} />
            </figure>
            <Texto>
              <Titulo>Meus Produtos</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_meus_proventos.png")} />
            </figure>
            <Texto>
              <Titulo>Meus Proventos</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <ItemLista>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_classe_ativos.png")} />
            </figure>
            <Texto>
              <Titulo>Classe de Ativos</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>

          <SubLista>
            <ItemSubLista>
              <a href="">
                <Titulo>Ação</Titulo>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubLista>

            <ItemSubLista>
              <a href="">
                <Titulo>Fundo</Titulo>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubLista>

            <ItemSubLista>
              <a href="">
                <Titulo>Fundo Imobiliário</Titulo>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubLista>

            <ItemSubLista selected>
              <a href="">
                <Titulo>Fundo Renda Fixa</Titulo>
                <Link>
                  <ChevronRight />
                </Link>
              </a>
            </ItemSubLista>
          </SubLista>
        </ItemLista>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_rentabilidade_real.png")} />
            </figure>
            <Texto>
              <Titulo>Rentabilidade Real</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_projecao_carteira.png")} />
            </figure>
            <Texto>
              <Titulo>Projeção de Carteira</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_risco_retorno.png")} />
            </figure>
            <Texto>
              <Titulo>Risco x Retorno</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>

        <Item>
          <a href="">
            <figure>
              <img src={require("../../assets/icone_cobertura_fgc.png")} />
            </figure>
            <Texto>
              <Titulo>Cobertura do FGC</Titulo>
              <Link>
                <ChevronRight />
              </Link>
            </Texto>
          </a>
        </Item>
      </Lista>
    </Aside>
  );
};

export default Sidebar;
