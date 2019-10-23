# Redux

[redux](https://github.com/reduxjs/redux) is an open source JavaScript library for managing tha application state. It's used for keeping the store at the top-level of the application and notifying the components whenever state changes.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, which will download the following packages defined in `package.json`.

`redux:` Redux is the central state management library

`react-redux:` React-redux contains integration of Redux with React

### Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. Create the following files within the `src` folder.

```
actions
├── actionTypes.js
└── products.js
```
Add the following constant to `actionTypes.js`:

`export const LOAD_PRODUCTS = 'app/products/LOAD_PRODUCTS'`

Add the following action to `products.js`:

```
export function loadProducts(productList) {
    return {
        type: LOAD_PRODUCTS,
        productList
    }
}
```

### Reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes. Create the following files within the `src` folder.

```
reducer
├── index.js
└── products.js
```
A reducer is simply a function that returns the state.
We'll start by specifying the initial state. Redux will call our reducer with an undefined state for the first time. This is our chance to return the initial state of our app:

```
import { fromJS } from 'immutable';

const initialState = fromJS({
    productList: []
});
```

Now let's handle `LOAD_PRODUCTS`. All it needs to do is to set the productList:

```
function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                productList: action.productList
            });
        default:
            return state;
    }
}
```

When the app is larger, we can split the reducers into separate files and keep them completely independent and managing different data domains. Finally, Redux provides a utility called `combineReducers()`. Add the following content to `index.js`, which combines different reducers of the entire app into one combined reducer:

```
import { combineReducers } from 'redux'
import productReducer from './products'

const createReducer = combineReducers({productReducer});

export default createReducer;
```


### Store

In the previous section, we used `combineReducers()` to combine several reducers into one. We will now import it, and pass it to `createStore()`. Add the following lines to `index.js`

```
import { createStore } from 'redux'
import createReducer from './reducer'
const store = createStore(createReducer)
```

### Passing the Store

All container components need access to the Redux store so they can subscribe to it. The option recommended is to use a special React Redux component called `<Provider>` to magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component. Import Provider, wrap the root component and pass the store as follows:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import createReducer from './reducer'
import './index.css';
import App from './App';
const store = createStore(createReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### Handling more actions

* Add more action types for adding and deleting products. Final content of `actionTypes.js` should look like following:

```
export const LOAD_PRODUCTS = 'app/products/LOAD_PRODUCTS'
export const ADD_PRODUCT = 'app/products/ADD_PRODUCT'
export const DELETE_PRODUCT = 'app/products/DELETE_PRODUCT'
```

* Add the corresponding actions to `products.js` in `actions` folder:

```
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
```

* Add the reducer cases for the actions. Final content of the reducer function of `products.js` in `reducer` folder should look like following:

```
function productReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return state.merge({
                loading: true,
                productList: action.productList
            });
        case ADD_PRODUCT:
            let productList = state.get('productList').slice();
            productList.push(action.product);
            return state.merge({
                productList
            });
        case DELETE_PRODUCT:
            return state.merge({
                productList: state.get('productList').filter((item, index) => {
                    return index !== action.index
                })
            });
        default:
            return state;
    }
}
``` 

### Integrating with React containers

Now that all the reducer and actions are ready and we need to call these functions from containers. Home container is tha main place to be connected to the Redux store. Use the `connect()` function provided by react-redux as follows:

```
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
```

To use `connect()`, we need to define a special function called `mapStateToProps` that describes how to transform the current Redux store state into the props of our container.

```
const mapStateToProps = (state) => ({
	products: getProducts(state)
})
```

`getProducts` is a selector function that selects productsReducer domain from the application store.

```
import { createSelector } from 'reselect';
...
const getProducts = createSelector(
	state => state.productReducer,
	(productReducer) => productReducer.toJS()
)
```

At the end of theses steps, we'll be able to react the store by `this.props.producs`

In addition to reading the state, container components can dispatch actions. In a similar fashion, we can define a function called `mapDispatchToProps()` that receives the `dispatch()` method and returns callback props that we want to inject into the container. For example, we want `loadProducts`, and other actions to be passed as a prop to Home container:

```
import { loadProducts, addProduct, deleteProduct } from '../../actions/products';
...
const mapDispatchToProps = (dispatch) => {
	return {
		loadProducts: (productList) => {
			dispatch(loadProducts(productList))
		},
		addProduct: (product) => {
			dispatch(addProduct(product))
		},
		deleteProduct: (index) => {
			dispatch(deleteProduct(index))
		}
	}
}
```

After this step, we can call actions `this.props.loadProducts()` within the Home component.

After connecting the container to Redux store, Home component should look like following:

```
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentDidMount() {
		if (this.props.products.productList.length === 0) {
			this.props.loadProducts(data.productList);
		}
	}

	onDelete(index) {
		this.props.deleteProduct(index);
	}

	onAdd(product) {
		this.props.addProduct(product);
	}
	render() {
		return (
			<div className="home-container">
				<Heading title="Products" />
				<Table data={this.props.products.productList} onDelete={this.onDelete} />
				<Form onSubmit={this.onAdd} />
			</div>
		);
	}
}
```
