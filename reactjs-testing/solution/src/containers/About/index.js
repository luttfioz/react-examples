import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class About extends React.Component {
    render() {
		return <h1>{`You have ${this.props.products.productList.length} products in total`}</h1>;
	}
}

const getProducts = createSelector(
	state => state.productReducer,
	(productReducer) => productReducer.toJS()
)

const mapStateToProps = (state) => ({
	products: getProducts(state)
})

export default connect(
	mapStateToProps
)(About);