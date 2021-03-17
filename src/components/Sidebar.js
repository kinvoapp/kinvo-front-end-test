import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const Container = styled.div`
  width: 220px;
  background: var(--background-card);

  display: flex;
  flex-direction: column;

  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  
  font-size: 0.78rem;
  font-weight: 500;
  /* padding-bottom: 40px; */
`;


const MenuItem = styled.div`
  background: ${props => props.selected ? "#F8FAFB" : "white"};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border-card);
  position: relative;
  cursor: pointer;

  &:hover{
    background: #F8FAFB;
  }
`;

const SubMenu = styled.div` 
  display: ${props => props.selected ? "block" : "none"};
  visibility: ${props => props.selected ? "visible" : "hidden"};
  /* visibilty:  */
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--text-items);
  width: 120px;
`;

export const ArrowIcon = styled.span`
  color: var(--border-card);
  right: 12px;
  position: absolute;
  margin-left: 12px;
`;


const Mark = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-color);
  margin: 0 10px;
`;

 function Sidebar(){
  return(
    <Container>  
      <MenuItem>
        <Icon><span className="material-icons">account_balance_wallet</span></Icon>
        <Label>Resumo da Carteira</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>        
      <MenuItem>
        <Icon><span className="material-icons">pie_chart_outline</span></Icon>
        <Label>Meus Produtos</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>  
      <MenuItem>
        <Icon><span className="material-icons">attach_money</span></Icon>
        <Label>Meus proventos</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>
      <MenuItem selected>
            <Icon selected ><span className="material-icons">view_in_ar</span></Icon>
            <Label>Classe de Ativos</Label>
            <ArrowIcon className="material-icons">
              keyboard_arrow_right
            </ArrowIcon>
          </MenuItem>
        <SubMenu selected>
          <MenuItem>
            <Mark />
            <Label>Ação</Label>
            <ArrowIcon className="material-icons">
              keyboard_arrow_right
            </ArrowIcon>
          </MenuItem>
          <MenuItem>
            <Mark />
            <Label>Fundo</Label>
            <ArrowIcon className="material-icons">
              keyboard_arrow_right
            </ArrowIcon>
          </MenuItem>
          <MenuItem>
            <Mark />
            <Label>Fundo Imobiliário</Label>
            <ArrowIcon className="material-icons">
              keyboard_arrow_right
            </ArrowIcon>
          </MenuItem>
          <MenuItem selected >
              <Mark />
              <Label>Fundo Renda Fixa</Label>
              <ArrowIcon className="material-icons">
                keyboard_arrow_right
              </ArrowIcon>
            </MenuItem>
        </SubMenu>
      <MenuItem>
        <Icon><span className="material-icons">trending_up</span></Icon>
        <Label>Rentabilidade Real</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>
      <MenuItem>
        <Icon><span className="material-icons">show_chart</span></Icon>
        <Label>Projeção da Carteira</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>
      <MenuItem>
        <Icon><span className="material-icons">all_out</span></Icon>
        <Label>Risco X Retorno</Label>
        <ArrowIcon className="material-icons">
          keyboard_arrow_right
        </ArrowIcon>
      </MenuItem>
      <MenuItem>
            <Icon><span className="material-icons">lock</span></Icon>
            <Label>Cobertura do FGC</Label>
            <ArrowIcon className="material-icons">
              keyboard_arrow_right
            </ArrowIcon>
          </MenuItem>
    </Container>
  );
}

export default Sidebar;