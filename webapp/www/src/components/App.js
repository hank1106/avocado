import React, {Component} from "react";
import Header from "./Header.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Music from "./Music";
import Album from "./Album";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Search from "./Search";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<main>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/Music" component={Music} />
						<Route path="/Album/:id" component={Album} />
						<Route path="/Search" component={Search} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</main>
			</BrowserRouter>
		);
	}
}

export default App;
