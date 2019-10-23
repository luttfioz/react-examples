import React from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Heading from '../../components/Heading'

class About extends React.Component {
	render() {
		return <div>
			<Heading title="About" />
		</div>;
	}
}

const getProducts = createSelector(
	state => state.productReducer,
	(productReducer) => productReducer.toJS()
)

const mapStateToProps = (state) => {
	return {
		products: getProducts(state)
	}
}

export default connect(
	mapStateToProps
)(About);

