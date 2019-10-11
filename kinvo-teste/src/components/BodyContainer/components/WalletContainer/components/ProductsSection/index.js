import React, { Component } from 'react';

import { sortedUpperProducts } from '../../../../../../shared/FunctionsLibrary';
import ProductsSectionPresentational from './presentational';
import api from '../../../../../../shared/api';

class ProductsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const products = this.loadProducts();
    const parsedProducts = sortedUpperProducts(products);
    this.setState({ products: parsedProducts, filteredProducts: products });
  }

  loadProducts = () => {
    const response = api.get();

    return response.products;
  }

  // Searchs for the products which contains the search term
  itemSearch = (searchTerm) => {
    const { products } = this.state;
    const filteredProducts = products.filter((produto) => {
      const { productName } = produto;
      const parsedProductName = productName.toUpperCase();
      const parsedSearchTerm = searchTerm.toUpperCase();

      return parsedProductName.includes(parsedSearchTerm);
    });

    this.setState({ filteredProducts });
  }

  handleSearchInput = (event) => {
    const { target: { value: searchTerm } } = event;
    this.itemSearch(searchTerm);
  };

  render() {
    const { filteredProducts } = this.state;
    return (
      React.createElement(ProductsSectionPresentational, {
        handleSearchInput: this.handleSearchInput,
        filteredProducts,
      })
    );
  }
}

export default ProductsSection;
