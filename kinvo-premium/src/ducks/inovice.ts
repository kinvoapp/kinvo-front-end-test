import { hen, Hen } from '../utility/createRedux';
import { createSelector } from 'reselect';
import { RootState } from './state';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import moment from 'moment';
import { url } from '../utility/urls';

export type SnapshotPortfolio = {
  equity: number;
  valueApplied: number;
  equityProfit: number;
  percentageProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
};

export type ChartData = {
  correctedQuota: number;
  dailyReferenceDate: number;
  movementTypeId: number;
  portfolioProductId: number;
  productName: string;
  value: number;
};

export type SnapshotProduct = {
  due: {
    date: string;
    daysUntilExpiration: number;
  };
  fixedIncome: {
    bondType: string;
    name: string;
    portfolioProductId: number;
  };
  hasBalance: number;
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
  productHasQuotation: number;
};

export interface InoviceState {
  portfolio: SnapshotPortfolio;
  chartData: Array<ChartData>;
  listProducts: Array<SnapshotProduct>;
  intactProducts: Array<SnapshotProduct>;
  loading: boolean;
  error: string | null;
}

export type InitialState = InoviceState;

const initialState: InitialState = {
  portfolio: {
    equity: 0,
    valueApplied: 0,
    equityProfit: 0,
    percentageProfit: 0,
    indexerValue: 0,
    percentageOverIndexer: 0,
  },
  chartData: [],
  intactProducts: [],
  listProducts: [],
  loading: false,
  error: null,
};

const mainSelector = (state: RootState) => state.inovice;

export const getPortfolio = createSelector(mainSelector, (state) => {
  return {
    loading: state.loading,
    portfolio: state.portfolio,
    listProducts: state.listProducts,
    intactProducts: state.intactProducts,
    chartData: state.chartData,
    error: state.error
  };
});

class EditorReactions extends Hen<InitialState> {
  setLoading(a: boolean) {
    this.state.loading = a;
  }

  orderProductByData(productData: Array<SnapshotProduct>) {
    this.state.listProducts = productData
      .map((item) => {
        return {
          ...item,
          due: {
            date: moment(item.due.date, 'DD/MM/YYYY').toDate(),
            daysUntilExpiration: item.due.daysUntilExpiration,
          },
        };
      })
      .sort((a, b) => (a.due.date as any) - (b.due.date as any))
      .map((item) => {
        return {
          ...item,
          due: {
            date: moment(item.due.date).format('DD/MM/YYYY'),
            daysUntilExpiration: item.due.daysUntilExpiration,
          },
        };
      });
  }

  orderProductByHighestInvestment(productData: Array<SnapshotProduct>) {
    this.state.listProducts = productData
      .map((item) => {
        return {
          ...item,
        };
      })
      .sort((a, b) => {
        return b.position.valueApplied - a.position.valueApplied;
      });
  }

  orderProductByHighestProfitability(productData: Array<SnapshotProduct>) {
    this.state.listProducts = productData
      .map((item) => {
        return {
          ...item,
        };
      })
      .sort((a, b) => {
        return b.position.profitability - a.position.profitability;
      });
  }

  searchProductsByTitle(productData: Array<SnapshotProduct>, text: string) {
    const products = productData.filter((item) => {
      return item.fixedIncome.name.toLowerCase().search(text.toLowerCase()) >= 0 ? true : false;
    }); 
    console.log(products.length)
    if(products.length == 0){
      this.setError(`Nunhum produto encontrado para a busca: "${text}"`)
    } 
    this.state.listProducts = products;
    
  }

  listProducts(products: Array<SnapshotProduct>) {
    this.state.listProducts = products;
    this.state.intactProducts = products;
  }

  setPortfolio(portfolio: SnapshotPortfolio) {
    this.state.portfolio = portfolio;
  }

  listChartData(chartData: Array<ChartData>) {
    this.state.chartData = chartData;
  }

  setError(message?: string){
    this.state.error = message ?? null;
  }
}

//Reducers
export const [menuReducer, actions] = hen(new EditorReactions(initialState));
export default menuReducer;

export function fetchPortfolio(): ThunkAction<
  Promise<void>,
  RootState,
  any,
  any
> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    return axios
      .get(url)
      .then((result: any) => {
        dispatch(actions.setPortfolio(result.data.data.snapshotByPortfolio));
        dispatch(actions.listProducts(result.data.data.snapshotByProduct));
        dispatch(
          actions.listChartData(
            result.data.data.dailyEquityByPortfolioChartData
          )
        );
        dispatch(actions.setLoading(false));
      })
      .catch((e) => {
        dispatch(actions.setLoading(false));
        dispatch(actions.setError(e.message));
      });
  };
}

export function orderProductByDate(
  products: SnapshotProduct[]
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.orderProductByData(products));
    dispatch(actions.setLoading(false));
    dispatch(actions.setError());
  };
}

export function orderProductByHighestInvestment(
  products: SnapshotProduct[]
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.orderProductByHighestInvestment(products));
    dispatch(actions.setLoading(false));
    dispatch(actions.setError());
  };
}

export function orderProductByHighestProfitability(
  products: SnapshotProduct[]
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.orderProductByHighestProfitability(products));
    dispatch(actions.setLoading(false));
    dispatch(actions.setError());
  };
}

export function searchProductByTitle(
  products: SnapshotProduct[], name: string
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.searchProductsByTitle(products, name));
    dispatch(actions.setLoading(false));
  };
}

export function cleanProducts(
  products: SnapshotProduct[]
): ThunkAction<Promise<void>, RootState, any, any> {
  return async (dispatch, _getState) => {
    dispatch(actions.setLoading(true));
    dispatch(actions.listProducts(products));
    dispatch(actions.setLoading(false));
    dispatch(actions.setError());
  };
}