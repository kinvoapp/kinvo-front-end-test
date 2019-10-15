import React, { Component } from 'react';

import api from '../../../../services/api';
import Presentational from './presentational';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filteredProducts: [],
      productIsLoading: true,
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get();
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
    const { filteredProducts, productIsLoading } = this.state;
    const { updateSearch } = this;
    return React.createElement(
      Presentational, {
        productIsLoading,
        filteredProducts,
        searchProductInputHandleChange: updateSearch,
      },
    );
  }
}
