import React from 'react';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import Form from '../../components/Form'
import * as data from '../../data.json';

export default class Home extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			productList: data.productList
		}
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onDelete(index) {
		let productList = this.state.productList;
		productList.splice(index, 1);
		this.setState({ productList });
	}

	onAdd(product) {
		let productList = this.state.productList;
		productList.push(product);
		this.setState({ productList });
    }
    render() {
		return (
			<div className="home-container">
				<Heading title="Products" />
				<Table data={this.state.productList} onDelete={this.onDelete} />
				<Form onSubmit={this.onAdd}/>
			</div>
		);
	}
}