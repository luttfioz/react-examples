import { fromJS } from 'immutable';

import {
    LOAD_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT
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
        case DELETE_PRODUCT:
            const productList = state.get('productList');
            const deletedProductList = productList.filter((item, index) => {
                return index !== action.deletedIndex
            });
            return state.merge({ productList: deletedProductList });
        case ADD_PRODUCT:
            const currentProductList = state.get('productList');
            const newProductList = [...currentProductList, action.product];
            return state.merge({ productList: newProductList });
        default:
            return state;
    }
}

export default productReducer;