import React, { Component } from 'react';

import WalletContainerPresentational from './presentational';
import api from '../../../../shared/api';

// portfolio
class WalletContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {
      },
      loading: true,
    };
  }

  async componentDidMount() {
    const apiData = await this.loadDataFromApi();
    const { data } = apiData;
    this.setState({ apiData: data, loading: false });
  }

  loadDataFromApi = async () => {
    const response = await api.get();

    return response.data;
  }

  render() {
    const { apiData, loading } = this.state;

    if (loading) {
      return (
        <div>
          LOADING...
        </div>
      );
    }

    return React.createElement(
      WalletContainerPresentational, {
        apiData,
      },
    );
  }
}
export default WalletContainer;
