import { fromJS } from 'immutable';

import {
    LOAD_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    LOAD_PRODUCTS_ERROR,
    LOAD_PRODUCTS_SUCCESS
} from '../actions/actionTypes'

const initialState = fromJS({
    productList: []
});

function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                loading: true
            });
        case ADD_PRODUCT:
            let productList = [...state.get('productList'), action.product];
            return state.merge({
                productList
            });
        case DELETE_PRODUCT:
            return state.merge({
                productList: state.get('productList').filter((item, index) => {
                    return index !== action.index
                })
            });
        case LOAD_PRODUCTS_SUCCESS:
            return state.merge({
                loading: false,
                productList: action.productList
            });
        case LOAD_PRODUCTS_ERROR:
            return state.merge({
                loading: false,
                error: action.error
            });
        default:
            return state;
    }
}

export default productReducer;