import React, {useState}  from 'react';
import { useGlobalContext } from '../context'
import { BiChevronRight} from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";


const LateralTopics = () => {
    const {siteTopic, setSiteTopic, siteSubTopic, setSiteSubTopic} = useGlobalContext()
    const lateralTopics = [
        {
            title: 'Resumo Da Carteira',
            icon:'/imgs/lateral/icon - resumo carteira.svg',
            iconSelected:'/imgs/lateral/icon - resumo carteira - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Meus Produtos',
            icon:'/imgs/lateral/icon - meus produtos.svg',
            iconSelected:'/imgs/lateral/icon - meus produtos - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Meus Proventos',
            icon:'/imgs/lateral/icon - meus proventos.svg',
            iconSelected:'/imgs/lateral/icon - meus proventos - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Classe de Ativos',
            icon:'/imgs/lateral/icon - classe de ativos.svg',
            iconSelected:'/imgs/lateral/icon - classe de ativos - selecionado.svg',
            subTopics: ['Ação','Fundo','Fundo Imobiliário','Fundo Renda Fixa']
        },
        {
            title: 'Rentabilidade Real',
            icon:'/imgs/lateral/icon - rentabilidade real.svg',
            iconSelected:'/imgs/lateral/icon - rentabilidade real - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Projeção da Carteira',
            icon:'/imgs/lateral/icon - projecao de carteira.svg',
            iconSelected:'/imgs/lateral/icon - projecao de carteira - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Risco X Retorno',
            icon:'/imgs/lateral/icon - risco X retorno.svg',
            iconSelected:'/imgs/lateral/icon - risco X retorno - selecionado.svg',
            subTopics: null
        },
        {
            title: 'Cobertura do FGC',
            icon:'/imgs/lateral/icon - cobertura do fgc.svg',
            iconSelected:'/imgs/lateral/icon - cobertura do fgc - selecionado.svg',
            subTopics: null
        },
    ]
    

  return (
    <article className='lateral-container'>
        {lateralTopics.map((topic, index)=>{
            const {title, icon, iconSelected, subTopics} = topic

            return (
                title === siteTopic 
                ?
                <div key={index}>
                <section className='lateral-topic-box-Selected'>
                    <div className='lateral-topic-info'>
                        <img src={iconSelected} alt={title} className='lateral-topic-icon'/>
                        <h1 className='lateral-topic-h1'>{title}</h1>
                    </div>
                    <BiChevronRight className='lateral-topic-seta'/>
                </section>
                {subTopics && 
                subTopics.map((sub, sIndex)=>{
                    return(
                    sub === siteSubTopic
                    ?
                    <section className='lateral-topic-box-Selected' key={sIndex}>
                        <div className='lateral-topic-info'>
                            <GoPrimitiveDot className='lateral-subtopic-dot'/>
                            <h1 className='lateral-subtopic-h1'>{sub}</h1>
                        </div>
                        <BiChevronRight className='lateral-topic-seta'/>
                    </section>
                    :
                    <section className='lateral-topic-box' onClick={()=> setSiteSubTopic(sub)} key={sIndex}>
                        <div className='lateral-topic-info'>
                            <GoPrimitiveDot className='lateral-subtopic-dot'/>
                            <h1 className='lateral-subtopic-h1'>{sub}</h1>
                        </div>
                        <BiChevronRight className='lateral-topic-seta'/>
                    </section>
                    )
                })}
                </div>  
                :
                <section className='lateral-topic-box' onClick={()=> setSiteTopic(title)} key={index}>
                    <div className='lateral-topic-info'>
                        <img src={icon} alt={title} className='lateral-topic-icon'/>
                        <h1 className='lateral-topic-h1'>{title}</h1>
                    </div>
                    <BiChevronRight className='lateral-topic-seta'/>
                </section>
            )
        })}
    </article>
  )
}

export default LateralTopics
