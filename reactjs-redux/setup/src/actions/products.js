import {
    LOAD_PRODUCTS
} from './actionTypes'

export function loadProducts(productList) {
    return {
        type: LOAD_PRODUCTS,
        productList
    }
}