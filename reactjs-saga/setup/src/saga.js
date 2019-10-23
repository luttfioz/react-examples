import { takeLatest} from 'redux-saga/effects'
import { LOAD_PRODUCTS } from './actions/actionTypes';

function* loadProductsHandler() {

}

export default function* sagaHandler() {
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler);
}