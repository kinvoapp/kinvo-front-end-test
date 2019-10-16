import React, { Component } from 'react';
import BodyContainerPresentational from './presentational';

import api from '../../shared/api';
import loadingGif from './images/loading.gif';
import { LoadingContainer } from './styles';

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
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
        <LoadingContainer>
          <img src={loadingGif} alt="Loading gif" />
        </LoadingContainer>
      );
    }

    return React.createElement(
      BodyContainerPresentational, {
        apiData,
      },
    );
  }
}
export default BodyContainer;
