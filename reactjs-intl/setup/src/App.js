import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="menu">
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/about">ABOUT</Link>
							</li>
							<li>
								<Link to="/contact">CONTACT</Link>
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
