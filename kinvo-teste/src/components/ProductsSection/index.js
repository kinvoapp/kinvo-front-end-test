import React, { Component } from 'react';

import { sortedUpperProducts } from '../FunctionsLibrary';
import ProductsSectionPresentational from './presentational';

class ProductsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const products = sortedUpperProducts();
    this.setState({ products, filteredProducts: products });
  }

  // Searchs for the products which contains the search term
  itemSearch = (searchTerm) => {
    const { products } = this.state;
    let filteredProducts = [];

    for (let index = 0; index < products.size(); index++) {
      if (products[index].productName.includes(searchTerm)) { filteredProducts += products[index]; }
    }

    this.setState({ products, filteredProducts });
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
