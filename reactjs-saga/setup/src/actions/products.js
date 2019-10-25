import {
    LOAD_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    LOAD_PRODUCTS_ERROR,
    LOAD_PRODUCTS_SUCCESS
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
