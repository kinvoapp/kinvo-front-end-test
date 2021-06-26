import './App.css';
import Header from './comp/Header';
import FixedIncomes from './comp/FixedIncomes';
import SortBar from './comp/SortBar';
import React from "react";
import snapshotByProduct from './services/services';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "valueApplied",
      sort: "ASC",
      searchText: '',
      snapshotByProduct: [],
      snapshotByProduct2: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleChangeRadio= this.handleChangeRadio.bind(this);
    this.filterIncomes = this.filterIncomes.bind(this);
  }
  componentDidMount = async () => {
    const result = await snapshotByProduct();
    this.setState({ snapshotByProduct: result, snapshotByProduct2: result });
  }
  
  filterIncomes() {
    const { searchText, snapshotByProduct } = this.state;
    console.log(snapshotByProduct);
    let incomesToRender = snapshotByProduct
      .filter(
        (income) => 
        income.fixedIncome.bondType.toLowerCase().includes(searchText) ||
        income.fixedIncome.name.toLowerCase().includes(searchText)
      );
    this.setState({ snapshotByProduct2: incomesToRender })
  }

  handleChange( event ) {
    this.setState(() => ({ searchText: event.target.value }), () => this.filterIncomes() );
  }

  handleSort() {
    const { snapshotByProduct2, sortBy , sort } = this.state;
    
    const MENOS_UM = -1;
    const inOrder = snapshotByProduct2.sort((a, b) => {
      const fieldA = Number(a.position[sortBy])
        ? Number(a.position[sortBy])
        : a.position[sortBy];
      const fieldB = Number(b.position[sortBy])
        ? Number(b.position[sortBy])
        : b.position[sortBy];
      if (
        (fieldA > fieldB && sort === "ASC") ||
        (fieldA < fieldB && sort === "DESC")
      ) return MENOS_UM;
      if (fieldA < fieldB && sort === "ASC") return 1;
      if (fieldA > fieldB && sort === "DESC") return 1;
      return 0;
    });
    this.setState({ snapshotByProduct2: inOrder });
    console.log(inOrder)
  }

  handleChangeRadio({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
  const { searchText, snapshotByProduct2 } = this.state;
  return (
    <div className="App">
      <Header />
      <SortBar handleChange={this.handleChangeRadio} handleSort={this.handleSort} />
      <FixedIncomes 
      filterIncomes={this.filterIncomes}
      handleChange={this.handleChange} 
      sortBy={searchText}
      snapshotByProduct2={snapshotByProduct2} />
    </div>
  );
}
}

export default App;
