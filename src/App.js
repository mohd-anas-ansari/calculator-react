import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Add from './components/Add'
import Sub from './components/Sub'

function App() {
	return (
		<div className="App">
			<Home />

      <Route path="/add" component={Add} />
      <Route path="/sub" component={Sub} />
      
		</div>
	);
}

export default App;
