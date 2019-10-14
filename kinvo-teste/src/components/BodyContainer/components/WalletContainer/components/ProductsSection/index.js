import React, { Component } from 'react';

import ProductsSectionPresentational from './presentational';
import { sortedUpperProducts } from '../../../../../../shared/FunctionsLibrary';

class ProductsSection extends Component {
  constructor(props) {
    super(props);
    const { apiData } = props;
    this.state = {
      apiData,
      products: [],
      filteredProducts: [],
    };
  }

  componentDidMount() {
    const { apiData: { products } } = this.props;
    const parsedProducts = sortedUpperProducts(products);
    this.setState({ products: parsedProducts, filteredProducts: products });
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
