import { Container, Card, Title } from './styles';

export default function RendaFixa() {
  return (
    <div>
      <Title>Renda Fixa</Title>
      <Container>
        <Card>
          <p className='titulo-card'>SALDO BRUTO</p>
          <p className='valor-card'>R$207.653,10</p>
        </Card>
        <Card>
          <p className='titulo-card'>VALOR APLICADO</p>
          <p className='valor-card'>R$170.025,10</p>
        </Card>
        <Card>
          <p className='titulo-card'>RESULTADO</p>
          <p className='valor-card'>R$37.638,10</p>
        </Card>
        <Card>
          <p className='titulo-card'>RENTABILIDADE</p>
          <p className='valor-card'>25,08%</p>
        </Card>
        <Card>
          <p className='titulo-card'>CDI</p>
          <p className='valor-card'>23,68%</p>
        </Card>
        <Card>
          <p className='titulo-card'>% Sobre CDI</p>
          <p className='valor-card'>320%</p>
        </Card>
      </Container>
    </div>
  )
}