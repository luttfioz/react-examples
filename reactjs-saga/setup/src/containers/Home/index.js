import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { loadProducts, addProduct, deleteProduct } from '../../actions/products';
import Heading from '../../components/Heading'
import Table from '../../components/Table'
import Form from '../../components/Form'
import Error from '../../components/Error'

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
		if (this.props.products.productList.length === 0) {
			this.props.loadProducts();
		}
	}

	onDelete(index) {
		// Implement onDelete with redux
		this.props.deleteProduct(index);
	}

	onAdd(product) {
		// Implement onAdd with redux
		this.props.addProduct(product);
	}
	render() {
		const { loading, error, productList } = this.props.products;
		if (loading) {
			return <h1>Loading products, please wait...</h1>
		} else if (error) {
			return <Error message={error}></Error>
		}

		return (
			<div className="home-container">
				<Heading title="Products" />
				<Table data={productList} onDelete={this.onDelete} />
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
	products: getProducts(state)
})


const mapDispatchToProps = (dispatch) => {
	return {
		loadProducts: () => {
			dispatch(loadProducts())
		},
		addProduct: (product) => {
			dispatch(addProduct(product))
		},
		deleteProduct: (index) => {
			dispatch(deleteProduct(index))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);