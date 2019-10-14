import React, { Component } from 'react';
import './styles.css';
import api from '../../../../services/api';
import SearchFilter from './components/SearchFilter';
import SearchList from './components/SearchList';

export default class ProductList extends Component {
  state = {
    products: [],
    filteredProducts: [],
    filterText: [],
    productIsLoading: true,
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();
    console.log(response);
    const { data: { data: { products } } } = response;
    this.setState({ products, filteredProducts: products, productIsLoading: false });
  }

  updateSearch = (event) => {
    const { target: { value } } = event;
    const parsedSearchTerm = value.substr(0, 20);
    this.filterProducts(parsedSearchTerm);
  }

  filterProducts = (searchTerm) => {
    const { products } = this.state;
    const filteredProducts = products.filter(
      (product) => product.productName.indexOf(searchTerm) !== -1,
    );

    this.setState({ filteredProducts });
  }

  render() {
    // return React.createElement(
    //   Presentational, {
    //     productIsLoading,
    //     filteredProducts,
    //     searchInputHandleChange: this.updateSearch,
    //   }
    // );
    const { filteredProducts, productIsLoading } = this.state;
    if (productIsLoading) {
      return (
        <div className="textBoxLoading">Carregando...</div>
      );
    }
    return (
      <div className="funds">
        <SearchFilter searchProductInputHandleChange={this.updateSearch} />
        <SearchList filteredProducts={filteredProducts} />
      </div>
    );
  }
}
