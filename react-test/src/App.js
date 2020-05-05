import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './containers/Header/Header';
// import AppHook from './AppHook';


class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app"> to be used in case of any sub directory deployment
			<BrowserRouter>
			<React.Fragment>
				<Header />
			</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
