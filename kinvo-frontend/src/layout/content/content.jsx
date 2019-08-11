import React from "react";

import { FormBox, ContentBox, CardBox } from "./styles";

import TabBar from "../../components/tabbar/tabbar";
import TabBarItem from "../../components/tabbar/tabbaritem";

import api from "../../services/index";
import ListBox from "../../components/listbox/listbox";

import { FaSearch } from "react-icons/fa";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      products: [],
      summary: []
    };
  }

  componentDidMount() {
    api.get(`getStockConsolidation`).then(res => {
      res = res.data.data;
      this.setState({
        products: res.products,
        summary: res.summary
      });
    });
  }

  handleAddRepository = async e => {
    e.preventDefault();

    api.get(`getStockConsolidation`).then(res => {
      res = res.data.data;
      this.setState({
        nameInput: "",
        products: res.products
      });
    });
  };

  render() {
    return (
      <ContentBox>
        <h1>análise por classe de ativos</h1>
        <TabBar>
          <TabBarItem label="Ações">
            <CardBox>
              <ul>
                <li>
                  <span>saldo bruto</span>
                  <p>R$ {this.state.summary.grossBalance}</p>
                </li>
                <li>
                  <span>valor aplicado</span>
                  <p>R$ {this.state.summary.appliedValue}</p>
                </li>
                <li>
                  <span>ganho de capital</span>
                  <p>R$ {this.state.summary.capitalGains}</p>
                </li>
                <li>
                  <span>total distribuidos</span>
                  <p>R$ {this.state.summary.earnings}</p>
                </li>
                <li>
                  <span>yield</span>
                  <p>R$ {this.state.summary.yield}</p>
                </li>
              </ul>
            </CardBox>
            <section>
              <FormBox>
                <h1>Fundos</h1>
                <form onSubmit={this.handleAddRepository}>
                  <button type="submit">
                    <FaSearch />
                  </button>
                  <input
                    type="text"
                    placeholder=""
                    value={this.state.nameInput}
                    onChange={e => this.setState({ nameInput: e.target.value })}
                  />
                </form>
              </FormBox>
              <article>
                <ListBox dado={this.state.products} />
              </article>
            </section>
          </TabBarItem>
          <TabBarItem label="Nome da Classe 1" />
          <TabBarItem label="Nome da Classe 2" />
          <TabBarItem label="Nome da Classe 3" />
        </TabBar>
      </ContentBox>
    );
  }
}
