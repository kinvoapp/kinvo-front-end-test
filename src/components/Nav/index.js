import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { LateralMenu, SubMenuContainer } from './style'

import SubMenu from './ItemNav/SubMenu'

import abstract from '../../assets/abstract-icon.svg'
import rightArrow from '../../assets/right-arrow-icon.svg'

import ItemNav from './ItemNav'

const Nav = () => {

  const [renderClasseAtivos, setRenderClasseAtivos] = useState(false)

  const showMenuClasseAtivos = () => {

    if(!renderClasseAtivos){

      setRenderClasseAtivos(true)
    }else{

      setRenderClasseAtivos(false)
    }
  }

  return(

    <LateralMenu>
      <Link to='/'>
        <ItemNav icon={abstract}
                  arrow={rightArrow}
                  text1="Resumo "
                  text2="da Carteira"
        />
      </Link>
      <Link to='/ola'>
        <ItemNav  icon={abstract}
                  arrow={rightArrow}
                  text1="Meus "
                  text2="Produtos"
        />
      </Link>
      <ItemNav icon={abstract}
                arrow={rightArrow}
                text1="Meus"
                text2="Proventos"
      />
      <div onClick={() => showMenuClasseAtivos()}>
        <ItemNav icon={abstract}
                  arrow={rightArrow}
                  text1="Classe"
                  text2="de Ativos"
        />
        <SubMenuContainer render={renderClasseAtivos}>
          <SubMenu arrow={rightArrow} text='Ação' />
          <SubMenu arrow={rightArrow} text='Fundo' />
          <SubMenu arrow={rightArrow} text='Fundo Imobiliário' />
          <Link to='/classe-ativos/fundo-renda-fixa'>
            <SubMenu arrow={rightArrow} text='Fundo Renda Fixa' />
          </Link>
        </SubMenuContainer>
      </div>
      <ItemNav icon={abstract}
                arrow={rightArrow}
                text1="Rentabilidade"
                text2="Real"
      />
      <ItemNav icon={abstract}
                arrow={rightArrow}
                text1="Projeção"
                text2="Da Carteira"
      />
      <ItemNav icon={abstract}
                arrow={rightArrow}
                text1="Risco x"
                text2="Retorno"
      />
      <ItemNav icon={abstract}
                arrow={rightArrow}
                text1="Cobertura"
                text2="do FGC"
      />
    </LateralMenu>
  )
}

export default Nav