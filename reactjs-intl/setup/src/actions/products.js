import {
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
    ADD_PRODUCT,
    DELETE_PRODUCT
} from './actionTypes'

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS
    }
}

export function loadProductsSuccess(productList) {
    return {
        type: LOAD_PRODUCTS_SUCCESS,
        productList
    }
}

export function loadProductsError(error) {
    return {
        type: LOAD_PRODUCTS_ERROR,
        error
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
