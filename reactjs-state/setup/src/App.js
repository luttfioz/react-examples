import React, { Component } from 'react';
import Heading from './components/Heading'
import Table from './components/Table'
import Form from './components/Form'
import * as data from './data.json';
import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      counter: 0,
      productList: data.productList
    }
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  addProduct(product) {
    const { productList } = this.state;
    // or productList.push(item);
    this.setState({
      productList: [...productList, product]
    })
  }

  deleteProduct(deletedIndex) {
    const { productList } = this.state;
    this.setState({
      productList: productList.filter((item, index) => {
        return index !== deletedIndex;
      })
    })
  }

  render() {
    return (
      <div className="App">
        {/* method called via arrow functions */}
        <button onClick={this.handleClick}> {this.state.counter} </button>
        <Heading title="Products" />
        <Form onSubmit= { this.addProduct } />
        <Table data={this.state.productList} onDelete={this.deleteProduct} />
      </div>
    );
  }
}

export default App;
