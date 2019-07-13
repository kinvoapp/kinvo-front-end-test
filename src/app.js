import React, { Component, Fragment } from 'react'

const URL = 'https://bd3caa0a-e3e1-4c3c-a2fa-494ed9bed72a.mock.pstmn.io/getPortfolios'

export default class App extends Component {
	constructor() {
		super()
		
		this.state = {
			wallets: []
		}
	}

	render() {
		return (
			<>
				<header>
					<h1> Conta </h1>
				</header>

				<section className="section">

					<section className="section-left">
						Menus Laterais esquerda
					</section>

					<section className="section-right">
						<h2> Carteiras </h2>

						<section className="section-right-box_input">
							<form>
								<input type="text" placeholder="Nome da carteira" 
									value=""
								/>
                <span>
								  <input type="radio" id="radio" />
								  <label for="radio"> Carteira principal</label>
                </span>

								<span>
									<button> Salvar </button>
								</span>

							</form>
						</section>{/* Fecha section Carteiras Right */}

						<section className="section-right-box_output">
              <table>
                <tr>
                  <td>Nome</td>
                  <td>Último acesso</td>
                  <td>Saldo</td>
                </tr>
                <tr>
                  <td>Nome da Carteira</td>
                  <td>18.03.19</td>
                  <td>R$ 1.230.394,00</td>
                </tr>
              </table>

							<span>
              	<button> Excluir </button>
              	<button> Editar </button>
							</span>
							
						</section>

					</section>

				</section>
			</>
		)
	}
}
