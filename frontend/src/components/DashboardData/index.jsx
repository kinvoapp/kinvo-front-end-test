import {
    Container,
    DataContainer,
    DataInformations,
    DataTopActions,
    DataTopInformations,
    DataTopOrder,
    DataTopSearch,
    DataTopTitle,
    PieChartsContainer,
    ResumeContainer,
    Title,
} from "./styles";

import { Resume } from "../Resume";
import { DashboardDataCard } from "../DashboardDataCard";

import { Select } from "../Select";
import { InputSearch } from "../InputSearch";

import ReactPaginate from "react-paginate"
import { ProfitabilityChart } from "../ProfitabilityChart";
import { TypeChart } from "../PieChart/TypeChart";
import { TitleChart } from "../PieChart/TitleChart";

export function DashboardData({
    rendaFixa,
    minhasRendasFixas,
    setOrderType,
    setSearchText,
    chartData
}){
    
    const resultsMinhasRendasFixas = minhasRendasFixas.map((data, index) => {
        return <DashboardDataCard data={data} key={index}/>
    })

    const quantityOfPges = Math.ceil(resultsMinhasRendasFixas.length / 5)
    const cardsPerPage = resultsMinhasRendasFixas.slice(0,5)
    
    // let cardsPerPageLength = resultsMinhasRendasFixas.slice(0,5).length

    // const [dataPerPage, setDataPerPage] = useState([])
    const handlePageClick = (data) =>{
        console.log(data.selected)
        // let newDataPerPage = resultsMinhasRendasFixas.slice(5,10)
        
        // setDataPerPage(oldState => [...oldState, newDataPerPage])
    }

    return(
        <Container>
            <Title>Renda Fixa</Title>

            <ResumeContainer>
                <Resume
                    rendaFixa={rendaFixa}
                />
            </ResumeContainer>
            
            <ProfitabilityChart
                title='Rentabilidade dos Títulos'
                graphicData={chartData}
            />

            <DataContainer>
                <DataTopInformations>
                    <DataTopTitle>Minhas Rendas Fixas</DataTopTitle>

                    <DataTopActions>
                        <DataTopActions>
                            <DataTopOrder>
                                <Select
                                    name=''
                                    defaulTitle='Ordenar por'
                                    onChange={(e) => setOrderType(e.target.value)}
                                />
                            </DataTopOrder>

                            <DataTopSearch>
                                <InputSearch
                                    onChange={(e) => {
                                        setSearchText(e.target.value);
                                    }}
                                />
                            </DataTopSearch>
                        </DataTopActions>
                    </DataTopActions>
                </DataTopInformations>

                <DataInformations>
                    {/* {resultsMinhasRendasFixas} */}


                    {cardsPerPage}
                    {/* {dataPerPage} */}
                </DataInformations>

                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={quantityOfPges}
                    marginPagesDisplayed={2}
                    onClick={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </DataContainer>

            <PieChartsContainer>
                <TypeChart
                    title='Divisão de Carteira por Tipos'
                    typeChartData={chartData}
                />

                <TitleChart
                    title='Divisão de Carteira por Título'
                    typeChartData={chartData}
                />
            </PieChartsContainer>
        </Container>

    )
}