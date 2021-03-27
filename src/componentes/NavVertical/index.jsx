import { HorizontalLine, MyButtonIcon } from "../utils/styles"
import { Menu } from "./styles"

function NavVertical() {
    const dados_navegacao = [
        {
            titulo: 'Resumo da Carteira',
            sub_navegacao: [],
            icon: 0,
            colorBackground: '#DAE0E3'
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
            icon: 1
        }
    ]

    return (
        <Menu noListStyle>
            {dados_navegacao.map((item, index) => (
                <>
                    <Menu.Li key={index}>
                        <Menu.WrapperIconTitle>
                            <MyButtonIcon colorBackground={item.colorBackground}>
                                {item.icon}
                            </MyButtonIcon>
                            {item.titulo}
                            <Menu.Li.Expand>
                                >
                            </Menu.Li.Expand>
                        </Menu.WrapperIconTitle>
                        <HorizontalLine />
                        {item.sub_navegacao.length > 0 && (
                            <Menu>
                                {item.sub_navegacao.map((sub_nav, index_sub_nav) => (
                                    <>
                                        <Menu.Li key={index_sub_nav}>{sub_nav.titulo}</Menu.Li>
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