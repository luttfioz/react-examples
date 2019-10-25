import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS } from './actions/actionTypes';
import { API_PRODUCTS } from './path';

function* loadProductsHandler() {
    const response = yield call(fetch, API_PRODUCTS)
    const responseJSON = yield call(r => r.json(), response)
    console.log(responseJSON)
}

export default function* sagaHandler() {
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler);
}