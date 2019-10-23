# Redux-Saga

[redux-saga](https://github.com/redux-saga/redux-saga) is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, which will download `redux-saga` package defined in `package.json`.

### Creating Sagas

Saga file is the main place where asynchronous calls and response handling events take place. It consists of [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), which simply can be defined as a function that can be paused and re-entered. Add the following handler to `saga.js` file:

```
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCTS } from './actions/actionTypes';
import { loadProductsSuccess, loadProductsError } from './actions/products'
import { LOAD_PRODUCTS_URL } from './path';

export function* loadProductsHandler() {
    try {
        const response = yield call(fetch, LOAD_PRODUCTS_URL);
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
    yield takeLatest(LOAD_PRODUCTS, loadProductsHandler)
}
```

Here are the brief explanations of saga helpers used:

`call` instructs the middleware to call the function with given arguments.

`put` instructs the middleware to dispatch an action to the store.

`takeLatest` helps getting the result of inly the latest request fired.

For a more organized structure, we place the URL in a fila called `path.js` located in `src` folder.

`export const LOAD_PRODUCTS_URL = "http://localhost:8080/products";`

As seen above, handlers inside saga can catch an action dispatched, make the related calls and then dispatch other actions to the store. So, here the saga takes `LOAD_PRODUCTS` actionType, and according to the response it dispatches either `LOAD_PRODUCTS_SUCCESS` or `LOAD_PRODUCTS_ERROR` actionType to the store.

`actionTypes` in `actions` folder contains the following constants.

```
export const LOAD_PRODUCTS = 'app/products/LOAD_PRODUCTS'
export const LOAD_PRODUCTS_SUCCESS = 'app/products/LOAD_PRODUCTS_SUCCESS'
export const LOAD_PRODUCTS_ERROR = 'app/products/LOAD_PRODUCTS_ERROR'
export const ADD_PRODUCT = 'app/products/ADD_PRODUCT'
export const DELETE_PRODUCT = 'app/products/DELETE_PRODUCT'
``` 

And following actions are added to the `products.js`

```
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
```

Correspondingly, following cases should be added to `products.js` reducer:

```
case LOAD_PRODUCTS_SUCCESS:
    return state.merge({
        loading: false,
        productList: action.productList
    });
case LOAD_PRODUCTS_ERROR:
    return state.merge({
        loading: false,
        error: action.error
    });
```

With this pattern, productList is only retrieved after a successful service call. Therefore, initial action should taka no parameters. In `Home/index.js` modify the loadProducts action as follows:

```
componentDidMount() {
    if (this.props.products.productList.length === 0) {
        this.props.loadProducts();
    }
}
```

### Integrating the Middleware

Saga middleware must be integrated with redux store so that it will catch actions that are dispatched. For this, add the following imports and lines to `index.js`

```
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaHandler from './saga';
...
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagaHandler);
```

