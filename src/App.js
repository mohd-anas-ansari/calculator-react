import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Add from './components/Add'

function App() {
	return (
		<div className="App">
			<Home />

			<Route path="/add" component={Add} />
		</div>
	);
}

export default App;
