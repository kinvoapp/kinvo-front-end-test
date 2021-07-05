import {  useContext } from 'react';
import { AtivosContext} from '../../AtivosContext';
import { Container, Content } from './styles'

export function Sumary() {
    const ativos = useContext(AtivosContext);   

    return (
        <Container>
            <Content>
                {ativos &&
                <> 
                <div className="title">
                <h1> Renda Fixa </h1>
            </div>
            <div className="itens">
                <div className="item">
                    <div>
                        <p>SALDO BRUTO</p>
                        <strong>R$ {ativos.snapshotByPortfolio?.equity}</strong>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>VALOR APLICADO</p>
                        <strong>R$ {ativos.snapshotByPortfolio?.valueApplied}</strong>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>RESULTADO</p>
                        <strong>R$ {ativos.snapshotByPortfolio?.equityProfit}</strong>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>RENTABILIDADE</p>
                        <strong>{ativos.snapshotByPortfolio?.percentageProfit}%</strong>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>CDI</p>
                        <strong>{ativos.snapshotByPortfolio?.indexerValue}%</strong>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <p>% SOBRE CDI</p>
                        <strong>{ativos.snapshotByPortfolio?.percentageOverIndexer}%</strong>
                    </div>
                </div>

            </div>

                </>
            }
            </Content>
        </Container>
    )
}