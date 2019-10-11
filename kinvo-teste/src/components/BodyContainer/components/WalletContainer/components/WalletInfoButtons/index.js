import React, { Component } from 'react';

import InfoSetOfButtonsPresentational from './presentational';
import api from '../../../../../../shared/api';

class InfoSetOfButtons extends Component {
  constructor() {
    super();
    this.state = {
      infoItems: [],
    };
  }

  componentDidMount() {
    const infoItems = this.loadProducts();
    this.setState({ infoItems });
  }

  loadProducts = async () => {
    const response = api.get();

    return response.data.summary;
  }

  render() {
    const { infoItems } = this.state;
    return (
      React.createElement(InfoSetOfButtonsPresentational, { infoItems })
    );
  }
}

export default InfoSetOfButtons;
