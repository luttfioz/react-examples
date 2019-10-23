import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import './App.css';

export class App extends Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="menu">
						<ul>
							<li>
								<Link to="/"><FormattedMessage id="myApp.App.Home"/></Link>
							</li>
							<li>
								<Link to="/about"><FormattedMessage id="myApp.App.About"/></Link>
							</li>
							<li>
								<Link to="/contact"><FormattedMessage id="myApp.App.Contact"/></Link>
							</li>
						</ul>
					</div>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
