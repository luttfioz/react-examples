import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_tr from 'react-intl/locale-data/tr'
import createSagaMiddleware from 'redux-saga'
import sagaHandler from './saga';
import createReducer from './reducer'
import App from './App';
import * as serviceWorker from './serviceWorker';
import en from './translations/en.json'
import tr from './translations/tr.json'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	createReducer,
	applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagaHandler);

addLocaleData([...locale_en, ...locale_tr]);

const messages = { en, tr }

ReactDOM.render(
	<Provider store={store}>
			<IntlProvider locale={'tr'} messages={messages['tr']}>
			<App />
		</IntlProvider>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
