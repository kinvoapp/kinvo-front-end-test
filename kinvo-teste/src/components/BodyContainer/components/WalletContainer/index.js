import React, { Component } from 'react';

import WalletContainerPresentational from './presentational';
import api from '../../../../shared/api';

class WalletContainer extends Component {
  constructor(props) {
    super(props);
    console.log('construindo');
    this.state = {
      apiData: {
        summary: {},
      },
    };
  }

  // async componentDidMount() {
  //   console.log('sadjasdiuagwduw');
  //   const apiData = await this.loadDataFromApi();
  //   const { data } = apiData;
  //   console.log('dsdas', data);
  //   this.setState({ apiData: data });
  // };

  componentDidMount() {
    console.log('did mount');
  }

  loadDataFromApi = async () => {
    const response = await api.get();

    return response.data;
  }

  render() {
    const { apiData } = this.state;

    console.log('apiData', apiData);
    return React.createElement(
      WalletContainerPresentational, {
        apiData,
      },
    );
    // return <div />;
  }
}

export default WalletContainer;
