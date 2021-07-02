import { useState } from 'react'
import arrowToLeft from '../../assets/images/arrowToLeft.svg'
import coberturaIcon from '../../assets/images/coberturaIcon.svg'
import meusProdutosIcon from '../../assets/images/meusProdutosIcon.svg'
import minhaCarteira from '../../assets/images/minhaCarteira.svg'
import projeçãoIcon from '../../assets/images/projeçãoIcon.svg'
import proventosIcon from '../../assets/images/proventosIcon.svg'
import rentabilidadeRealIcon from '../../assets/images/rentabilidadeRealIcon.svg'
import resumoIcon from '../../assets/images/resumoIcon.svg'
import riscoRetornoIcon from '../../assets/images/riscoRetornoIcon.svg'
import { Content } from "./style"


export function AsideTopics() {

    const[showDropdown, setShowDropdown] = useState(false);


    return(
        <Content>
            <article>
                <section>
                    <img src={resumoIcon} alt="Resumo da carteira"/>
                    <p>Resumo da carteira</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section>
                    <img src={meusProdutosIcon} alt="Meus produtos"/>
                    <p>Meus produtos</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section>
                    <img src={proventosIcon} alt="Classe de ativos"/>
                    <p>Meus Proventos</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section >

                <section>
                    <ul>
                        <li >
                        <button onClick={() => setShowDropdown(true)}>
                        <img src={minhaCarteira} alt="Resumo da carteira"/>
                        <p>Resumo da carteira</p>
                        
                        <img src={arrowToLeft} alt="Abrir painel"/>
                        </button>
                        {showDropdown === true && (
                            <div onClick={() => setShowDropdown(false)} className="dropdown-content">
                                <div  className="dropdown-item">Ação</div>
                                <div  className="dropdown-item">Fundo</div>
                                <div  className="dropdown-item">Fundo Imobiliário</div>
                                <div  className="dropdown-item">Fundo Renda Fixa</div>
                            </div>
                            )}
                        </li>
                    </ul>
                </section>
                    
                </section>

                <section>
                    <img src={rentabilidadeRealIcon} alt="Rentabilidade Real"/>
                    <p>Rentabilidade Real</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section>
                    <img src={projeçãoIcon} alt="Projeção da Carteira"/>
                    <p>Projeção da Carteira</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section>
                    <img src={riscoRetornoIcon} alt="Risco e Retorno"/>
                    <p>Risco x Retorno</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

                <section>
                    <img src={coberturaIcon} alt="Cobertura do FGC"/>
                    <p>Cobertura do FGC</p>
                    <img src={arrowToLeft} alt="Abrir painel"/>
                </section>

            </article>
        </Content>
    )
}