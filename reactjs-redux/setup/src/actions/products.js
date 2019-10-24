import {
    LOAD_PRODUCTS,
    DELETE_PRODUCT,
    ADD_PRODUCT
} from './actionTypes'

export function loadProducts(productList) {
    return {
        type: LOAD_PRODUCTS,
        productList
    }
}

export function deleteProduct(deletedIndex) {
    return {
        type: DELETE_PRODUCT,
        deletedIndex
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}