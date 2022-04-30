import React from 'react'
import { Link } from "react-router-dom"

import { LateralMenu } from './style'

import abstract from '../../assets/abstract-icon.svg'
import rightArrow from '../../assets/right-arrow-icon.svg'

import ItemNav from './ItemNav'

const Nav = () => {

  return(

    <LateralMenu>
        <ItemNav icon={abstract}
                 arrow={rightArrow}
                 text1="Resumo "
                 text2="da Carteira"
        />
        <ItemNav icon={abstract}
                 arrow={rightArrow}
                 text1="Meus "
                 text2="Produtos"
        />
        <ItemNav icon={abstract}
                 arrow={rightArrow}
                 text1="Meus"
                 text2="Proventos"
        />
        <ItemNav icon={abstract}
                 arrow={rightArrow}
                 text1="Classe"
                 text2="de Ativos"
        />
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