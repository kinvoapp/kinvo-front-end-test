import React, { Component, Fragment } from 'react'

import './wallets.scss'
import Button from '../Button/button.jsx'

import axios from 'axios'

export default class Wallets extends Component {

    constructor() {
        super()

        this.state = {
            wallets: [],
            api: []
        }

        
        this.saveWallet = this.saveWallet.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.deleteWallet = this.deleteWallet.bind(this)
        this.editWallet = this.editWallet.bind(this)
    }

    handleChange(e) {
        this.setState({
            wallets: e.target.value
        })
    }

    saveWallet(e) {
        e.preventDefault()
        var wallet = this.state.wallets

        if (localStorage.getItem('wallets') === null) {
            var wallets = []
            wallets.push(wallet)
            localStorage.setItem('wallets', JSON.stringify(wallets))
        } else {
            var wallets = JSON.parse(localStorage.getItem('wallets'))
            wallets.push(wallet)
            localStorage.setItem('wallets', JSON.stringify(wallets))
        }
    }

    deleteWallet(e) {
        var index = e.target.getAttribute('data-key')
        var deleteWallet = JSON.parse(localStorage.getItem('wallets'))
        deleteWallet.splice(index, 1)
        this.setState({
            wallets: deleteWallet
        })
        localStorage.setItem('wallets', JSON.stringify(deleteWallet))
    }

    editWallet() {}

    componentWillMount() {
            fetch('https://bd3caa0a-e3e1-4c3c-a2fa-494ed9bed72a.mock.pstmn.io/getPortfolios')
            .then(res => res.json())
            .then(datas => {
                this.setState({
                    api: datas
                })
            })
    }

    render() {
        const { wallets, api } = this.state
        return (
            <>
                <section className="wallets">
                    <h2> Carteiras </h2>

                    <section className="wallets-box_input">
                        <form>

                            <input type="text" placeholder="Nome da carteira" 
                                value={this.state.wallets} onChange={this.handleChange} />

                            <span>
                                <input type="radio" id="radio" />
                                <label for="radio"> Carteira principal</label>
                            </span>

                            <button onClick={this.saveWallet}> Salvar </button>
                        
                        </form>
                    </section>

                    <section className="wallets-box_output">
                        <table>
                            <tr>
                            <td>Nome</td>
                            <td>Último acesso</td>
                            <td>Saldo</td>
                            </tr>
                            <tr>
                            <td> Nome da carteira </td>
                            <td>18.03.19</td>
                            <td>R$ 1.230.394,00</td>
                            </tr>
                        </table>

                        <button> Excluir </button>

                        <button> Editar </button>

                    </section>
                    
                    {
                        wallets.map( function (wallet, index) {
                            return (
                                <section className="wallets-box_output">
                                    <table>
                                        <tr>
                                        <td>Nome</td>
                                        <td>Último acesso</td>
                                        <td>Saldo</td>
                                        </tr>
                                        <tr>
                                        <td key={index}> {wallet} </td>
                                        <td>18.03.19</td>
                                        <td>R$ 1.230.394,00</td>
                                        </tr>
                                    </table>

                                    <input type="button" value="Excluir" 
                                           onClick={this.deleteWallet} 
                                           data-key={index}
                                    />

                                    <input type="button" value="Editar" 
                                           onClick={this.editWallet} 
                                    />

                                </section>
                            )
                        })
                    }

                </section>
            </>
        )
    }
} 