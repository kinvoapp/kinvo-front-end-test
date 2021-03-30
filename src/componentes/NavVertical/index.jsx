import { Activity, BarChart2, ChevronRight, DollarSign, LifeBuoy, Lock, PieChart, Target, Zap } from "react-feather"
import { HorizontalLine, MyButtonIcon } from "../utils/styles"
import { Menu } from "./styles"

// {
//     titulo: '',
//     sub_navegacao: [],
//     icon: ,
//     colorBackground: '#DAE0E3',
// },

function NavVertical() {
    const dados_navegacao = [
        {
            titulo: 'Resumo da Carteira',
            sub_navegacao: [],
            IconItem: Target,
            colorBackground: '#DAE0E3'
        },
        {
            titulo: 'Meus Produtos',
            sub_navegacao: [],
            IconItem: PieChart,
            colorBackground: '#DAE0E3',
        },
        {
            titulo: 'Meus Proventos',
            sub_navegacao: [],
            IconItem: DollarSign,
            colorBackground: '#DAE0E3',
        },
        {
            titulo: 'Classe de Ativos',
            sub_navegacao: [
                {
                    titulo: 'Ação',
                },
                {
                    titulo: 'Fundo',
                },
                {
                    titulo: 'Fundo Imobiliário',
                },
                {
                    titulo: 'Fundo Renda Fixa'
                },
            ],
            colorBackground: '#DAE0E3',
            IconItem: BarChart2
        },
        {
            titulo: 'Rentabilidade Real',
            sub_navegacao: [],
            IconItem: Zap,
            colorBackground: '#DAE0E3',
        },
        {
            titulo: 'Projeção da carteira',
            sub_navegacao: [],
            IconItem: Activity,
            colorBackground: '#DAE0E3',
        },
        {
            titulo: 'Risco x Retorno',
            sub_navegacao: [],
            IconItem: LifeBuoy,
            colorBackground: '#DAE0E3',
        },
        {
            titulo: 'Cobertura do FGC',
            sub_navegacao: [],
            IconItem: Lock,
            colorBackground: '#DAE0E3',
        },
    ]

    return (
        <Menu noListStyle>
            {dados_navegacao.map((item, index) => (
                <>
                    <Menu.Li key={index}>
                        <Menu.WrapperIconTitle>
                            <MyButtonIcon colorBackground={item.colorBackground}>
                                <item.IconItem color="#fff"/>
                            </MyButtonIcon>
                            {item.titulo}
                            <Menu.Li.Expand>
                                <ChevronRight />
                            </Menu.Li.Expand>
                        </Menu.WrapperIconTitle>
                        <HorizontalLine />
                        {item.sub_navegacao.length > 0 && (
                            <Menu noDisplay>
                                {item.sub_navegacao.map((sub_nav, index_sub_nav) => (
                                    <>
                                        <Menu.Li key={index_sub_nav}>
                                            <p>{sub_nav.titulo}
                                                <Menu.Li.Expand>
                                                    <ChevronRight />
                                            </Menu.Li.Expand>
                                            </p>

                                        </Menu.Li>
                                        <HorizontalLine />
                                    </>
                                ))}
                            </Menu>
                        )}
                    </Menu.Li>
                </>
            ))}
        </Menu>
    )
}

export default NavVertical