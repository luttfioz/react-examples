import {
    LOAD_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from './actionTypes'

export function loadProducts(productList) {
    return {
        type: LOAD_PRODUCTS,
        productList
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export function deleteProduct(index) {
    return {
        type: DELETE_PRODUCT,
        index
    }
}
