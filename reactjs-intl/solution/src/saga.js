import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS } from './actions/actionTypes';
import { loadProductsSuccess, loadProductsError } from './actions/products'
import { LOAD_PRODUCTS_URL } from './path';

export function* loadProductsHandler() {
    const response = yield call(fetch, LOAD_PRODUCTS_URL);
    let responseJSON =  yield call((r) => r.json(), response); 
    if(responseJSON.error) {
        yield put(loadProductsError(responseJSON.error))
    } else {
        yield put(loadProductsSuccess(responseJSON));
    }
}

export default function* sagaHandler() {
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler)
}