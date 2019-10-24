import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadProducts, deleteProduct, addProduct } from '../../actions/products';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import Form from '../../components/Form'
import * as data from '../../data.json';

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
		if (this.props.products.productList.length === 0) {
			this.props.loadProducts(data.productList);
		}
	}

	onDelete(index) {
		this.props.deleteProduct(index);
		// Implement onDelete with redux

	}

	onAdd(product) {
		this.props.addProduct(product);
		// Implement onAdd with redux
	}
	render() {
		return (
			<div className="home-container">
				<Heading title="Products" />
				<Table data={this.props.products.productList} onDelete={this.onDelete} />
				<Form onSubmit={this.onAdd} />
			</div>
		);
	}
}

const getProducts = createSelector(
	state => state.productReducer,
	(productReducer) => productReducer.toJS()
)

const mapStateToProps = (state) => ({
	products: getProducts(state),
})


const mapDispatchToProps = (dispatch) => {
	return {
		loadProducts: (productList) => {
			dispatch(loadProducts(productList))
		},
		deleteProduct: (index) => {
			dispatch(deleteProduct(index))
		},
		addProduct: (product) => {
			dispatch(addProduct(product))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);