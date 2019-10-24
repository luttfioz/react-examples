import React, { Component } from 'react';
import Heading from './components/Heading'
import Table from './components/Table'
import * as data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      counter: 0
    }
  }
  handleClick() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  render() {
    return (
      <div className="App">
        {/* method called via arrow functions */}
        <button onClick={() => { this.handleClick(); }}> {this.state.counter} </button>
        <Heading title="Products" />
        <Table data={data.productList} />
      </div>
    );
  }
}

export default App;
