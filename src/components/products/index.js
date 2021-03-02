import React, { Component } from 'react'

import formatMoney from '../../assets/scripts/format-money'

import styled from 'styled-components'

import InfomationIcon from '../../assets/images/infomation-icon.png'
import SearchIcon from '../../assets/images/search-icon.png'
import PaginationPreviousIcon from '../../assets/images/pagination-previous-icon.png'
import PaginationNextIcon from '../../assets/images/pagination-next-icon.png'

const Wrapper = styled.section`
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .04);
  margin-bottom: 6px;
  padding: 16px 0px;
`

const TopBar = styled.div`
  border-bottom: 1px solid #EEF2F4;
  display: grid;
  grid-column-gap: 17px;
  grid-template-columns: 1fr auto auto;
  padding: 0 20px 20px;
`

const Title = styled.h3`
  font-size: 18px;
  place-self: center flex-start;
`

const Filter = styled.select`
  border: 1px solid #D6D9DD;
  border-radius: 10px;
  cursor: pointer;
  outline: 0;
  padding: 9px 10px;
  min-width: 155px;
`

const Search = styled.div`
  position: relative;
  i {
    background-image: url(${SearchIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    height: 15.15px;
    left: 8.5px;
    position: absolute;
    top: 11.5px;
    width: 15.15px;
  }
  input {
    border: 1px solid #D6D9DD;
    border-radius: 10px;
    min-height: 19px;
    outline: 0;
    padding: 8.5px 8.5px 8.5px 28.65px;
    width: 240px;
  }
`
const Item = styled.div`
  background-color: #FFF;
  border-bottom: 1px solid #EEF2F4;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto 1fr auto;
  padding: 20px;
  :nth-child(odd) {
    background-color: #F8FAFB;
  }
  @media(min-width: 1540px) {
    grid-template-columns: 1fr 1fr 250px;
  }
`

const ItemEmpty = styled.div`
  padding: 35px 0;
`

const BoxHeader = styled.div`
  display: grid;
  margin-bottom: 18px;
  grid-column-gap: 11px;
  grid-template-columns: auto 1fr;
`

const BoxTitle = styled.h4`
  font-size: 9px;
  place-self: center flex-start;
  text-transform: uppercase;
`

const BoxIcon = styled.div`
  cursor: pointer;
  display: flex;
  place-self: center flex-start;
`

const BoxContent = styled.div`
  display: grid;
`

const Content = styled.div`
  display: grid;
  grid-row-gap: 3px;
`

const ContentLabel = styled.div`
  font-size: 9px;
  text-transform: uppercase;
`

const ContentValue = styled.div`
  font-size: 14px;
`

const ItemBox = styled.div`
  border: 1px solid #DAE0E3;
  border-radius: 10px;
  font-size: 12px;
  padding: 10px;
  * {
    color: #4E5B61;
  }
  &:nth-child(1) {
    ${BoxContent} {
      grid-template-columns: 180px auto;
      grid-column-gap: 20px;
    }
    ${Content} {
      place-self: center flex-end;
    }
    ${ContentValue} {
      color: #8A51BA;
    }
  }
  &:nth-child(2) {
    ${BoxContent} {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    ${ContentValue} {
      color: #38BFA0;
    }
  }
  &:nth-child(3) {
    ${BoxContent} {
      display: inline-flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    ${ContentValue} {
      color: #008DCB;
    }
  }
`

const Pagination = styled.div`
  display:flex;
  gap: 9px;
	justify-content: center;
  padding: 15px 20px;
`

const PaginationItem = styled.div`
  align-items: center;
  background-color: #FFF;
  border: 1px solid #EDEEF0;
  border-radius: 4px;
  color: #C2C5CC;
  cursor: pointer;
  display: flex;
  font-family: Montserrat Regular, sans-serif;
  font-size: 13px;
  height: 35px;
  justify-content: center;
  transition: .3s ease-out;
  width: 35px;
  ${({ selected }) => selected && `
    background-color: #DCE0E3;
    border-color: #E8E9EC;
    color: #FFF;
  `}
`

export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      arrayProducts: [],
      currentPage: 1,
      productsPerPage: 5,
      searchValue: '',
      filterValue: '',
      itemEmptyText: 'Carregando os seus títulos..'
    };

    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const response = await fetch(`https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData`)
    const json = await response.json()
    this.setState({
      arrayProducts: json.data.snapshotByProduct,
      itemEmptyText: 'Nenhum título encontrado.'
    })
  }

  onChangeHandler(e){
    this.setState({
      searchValue: e.target.value,
    })
  }

  onChangeFilter(e) {
    this.setState({
      filterValue: e.target.value,
    })
  }

  handleClick(number) {
    this.setState({
      currentPage: number
    })
  }

  render() {
    const { arrayProducts, currentPage, productsPerPage, searchValue, filterValue } = this.state

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const filteredArrayProducts = arrayProducts.filter(
      p => searchValue === '' ||
      p.fixedIncome.name.toLowerCase().indexOf(searchValue) > -1 ||
      p.fixedIncome.portfolioProductId.toString().indexOf(searchValue) > -1
    ).sort(function(a, b) {
      switch (filterValue) {
        case 'title':
          if (a.fixedIncome.name.toLowerCase() < b.fixedIncome.name.toLowerCase()) return -1
          if (a.fixedIncome.name.toLowerCase() > b.fixedIncome.name.toLowerCase()) return 1
          return 0
        case 'class':
          if (a.fixedIncome.bondType.toLowerCase() < b.fixedIncome.bondType.toLowerCase()) return -1
          if (a.fixedIncome.bondType.toLowerCase() > b.fixedIncome.bondType.toLowerCase()) return 1
          return 0
        case 'highest-value':
          if (a.position.valueApplied < b.position.valueApplied) return 1
          if (a.position.valueApplied > b.position.valueApplied) return -1
          return 0
        case 'lower-value':
          if (a.position.valueApplied < b.position.valueApplied) return -1
          if (a.position.valueApplied > b.position.valueApplied) return 1
          return 0
        case 'date':
            if (a.due.daysUntilExpiration < b.due.daysUntilExpiration) return -1
            if (a.due.daysUntilExpiration > b.due.daysUntilExpiration) return 1
            return 0
        default:
          return 0
      }
    })

    const currentProducts = filteredArrayProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(filteredArrayProducts.length / productsPerPage); i++) {
      pageNumbers.push(i)
    }

    return(
      <Wrapper>
        <TopBar>
          <Title>Minhas Rendas Fixas</Title>
          <Filter onChange={this.onChangeFilter.bind(this)} value={this.state.value}>
            <option defaultValue hidden>Ordenar por</option>
            <option value="title">Título</option>
            <option value="class">Classe</option>
            <option value="highest-value">Maior Valor Investido</option>
            <option value="lower-value">Menor Valor Investido</option>
            <option value="date">Mais próximo a vencer</option>
          </Filter>
          <Search>
            <i />
            <input
              value={this.state.input}
              type="text"
              onChange={this.onChangeHandler.bind(this)}
            />
          </Search>
        </TopBar>
        {currentProducts.map((p, index) => (
          <Item key={index}>
            <ItemBox>
              <BoxHeader>
                <BoxTitle>Título</BoxTitle>
                <BoxIcon onClick={() => {console.log('Show information!')}}>
                  <img src={InfomationIcon} alt="Information" />
                </BoxIcon>
              </BoxHeader>
              <BoxContent>
                <div>{p.fixedIncome.name}</div>
                <Content>
                  <ContentLabel>Classe</ContentLabel>
                  <ContentValue>{p.fixedIncome.bondType}</ContentValue>
                </Content>
              </BoxContent>
            </ItemBox>
            <ItemBox>
              <BoxHeader>
                <BoxTitle>Minha posição</BoxTitle>
                <BoxIcon onClick={() => {console.log('Show information!')}}>
                  <img src={InfomationIcon} alt="Information" />
                </BoxIcon>
              </BoxHeader>
              <BoxContent>
                <Content>
                  <ContentLabel>Valor inves.</ContentLabel>
                  <ContentValue>{formatMoney(p.position.valueApplied)}</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>Saldo bruto</ContentLabel>
                  <ContentValue>{formatMoney(p.position.equity)}</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>Rent.</ContentLabel>
                  <ContentValue>{formatMoney(p.position.profitability)}%</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>% da cart.</ContentLabel>
                  <ContentValue>{formatMoney(p.position.portfolioPercentage)}%</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>CDI</ContentLabel>
                  <ContentValue>{formatMoney(p.position.indexerValue)}</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>Sobre CDI</ContentLabel>
                  <ContentValue>{formatMoney(p.position.percentageOverIndexer)}</ContentValue>
                </Content>
              </BoxContent>
            </ItemBox>
            <ItemBox>
              <BoxHeader>
                <BoxTitle>Vencimento</BoxTitle>
                <BoxIcon onClick={() => {console.log('Show information!')}}>
                  <img src={InfomationIcon} alt="Information" />
                </BoxIcon>
              </BoxHeader>
              <BoxContent>
                <Content>
                  <ContentLabel>Data venc.</ContentLabel>
                  <ContentValue>{p.due.date.toString().replaceAll('/', '.')}</ContentValue>
                </Content>
                <Content>
                  <ContentLabel>Dias até venc.</ContentLabel>
                  <ContentValue>{p.due.daysUntilExpiration}</ContentValue>
                </Content>
              </BoxContent>
            </ItemBox>
          </Item>   
        ))}
        {currentProducts.length <= 0 &&
          <Item>
            <ItemEmpty>{this.state.itemEmptyText}</ItemEmpty>
          </Item>
        }
        <Pagination>
          <PaginationItem onClick={() => (currentPage > 1) && this.handleClick(currentPage - 1)}>
            <img src={PaginationPreviousIcon} alt="Pagination Previous Icon" />
          </PaginationItem>
          {pageNumbers.map((number, index) => (
            <PaginationItem
              key={index}
              selected={(number === currentPage) && 'selected'}
              onClick={() => this.handleClick(number)}
            >{number}</PaginationItem>
          ))}
          {currentProducts.length <= 0 && 
            <PaginationItem selected='selected'>1</PaginationItem>
          }
          <PaginationItem onClick={() => (pageNumbers.length > currentPage) && this.handleClick(currentPage + 1)}>
            <img src={PaginationNextIcon} alt="Pagination Next Icon" />
          </PaginationItem>
        </Pagination>
      </Wrapper>
    )
  }
}