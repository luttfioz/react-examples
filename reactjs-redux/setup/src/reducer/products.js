import { fromJS } from 'immutable';

import {
    LOAD_PRODUCTS
} from '../actions/actionTypes'

const initialState = fromJS({
    productList: [],
});

function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                loading: true,
                productList: action.productList
            });
        default:
            return state;
    }
}

export default productReducer;