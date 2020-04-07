import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import MainSection from './components/MainSection';
import Add from './components/Add';
import Sub from './components/Sub';
import Div from './components/Div';
import Mul from './components/Mul';


function App() {
	return (
		<div className="App">
      <Home />
      <Route exact path="/" component={MainSection} />
      <Route path="/add" component={Add} />
      <Route path="/sub" component={Sub} />
      <Route path="/div" component={Div} />
      <Route path="/mul" component={Mul} />
      
		</div>
	);
}

export default App;
