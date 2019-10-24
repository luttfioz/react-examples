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
            const productList = state.get('productList')
            const deletedProductList = productList.filter((item, index) => {
                return index !== action.deleteIndex;
            })
            return state.merge({
                productList: deletedProductList
            })
        case ADD_PRODUCT:
            const updatedProductList = [...state.get('productList'), action.product]
            return state.merge({
                productList: updatedProductList
            })
        default:
            return state;
    }
}

export default productReducer;