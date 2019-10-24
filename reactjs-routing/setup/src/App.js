import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

class App extends React.Component {

	render() {
		return <BrowserRouter>
			<div className="menu">
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/about" replace>ABOUT</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/" component={Home} ></Route>
				<Route exact path="/about" component={About} ></Route>
				<Route exact path="/contact" component={Contact} ></Route>
				<Route path="*" component={NotFound} ></Route>
			</Switch>
		</BrowserRouter>;
	}
}

export default App;
