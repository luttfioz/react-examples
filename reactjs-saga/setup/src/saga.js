import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PRODUCTS } from './actions/actionTypes';
import { API_PRODUCTS } from './path';
import { loadProductsSuccess, loadProductsError } from './actions/products';

function* loadProductsHandler(action) {

    try {
        const response = yield call(fetch, API_PRODUCTS);
        if (response.status !== 200) {
            yield put(loadProductsError('An error occurred'))
        } else {
            let responseJSON = yield call((r) => r.json(), response);
            yield put(loadProductsSuccess(responseJSON));
        }
    } catch (e) {
        yield put(loadProductsError('An error occurred'))
    }

}

export default function* sagaHandler() {
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler);
}