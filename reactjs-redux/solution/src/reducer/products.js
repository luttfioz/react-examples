import { fromJS } from 'immutable';

import {
    LOAD_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from '../actions/actionTypes'

const initialState = fromJS({
    productList: []
});

function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                loading: true,
                productList: action.productList
            });
        case ADD_PRODUCT:
            let productList = state.get('productList').slice();
            productList.push(action.product);
            return state.merge({
                productList
            });
        case DELETE_PRODUCT:
            return state.merge({
                productList: state.get('productList').filter((item, index) => {
                    return index !== action.index
                })
            });
        default:
            return state;
    }
}

export default productReducer;