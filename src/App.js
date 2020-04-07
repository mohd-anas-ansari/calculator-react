import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import MainSection from "./components/MainSection";
import Add from "./components/Add";
import Sub from "./components/Sub";
import Div from "./components/Div";
import Mul from "./components/Mul";

class App extends React.Component {
  
	state = {
		backgroundColor: "#e67e22",
	};

	handleBackground = (color) => {
    this.setState({
      backgroundColor: color
    });
	};

	render() {

		return (
			<div className="App" style={{backgroundColor: this.state.backgroundColor}}>
				<Home handleBackground={this.handleBackground} />

        <Route exact path="/" component={MainSection} />
        
				<Route path="/add" component={Add} />
				<Route path="/sub" component={Sub} />
				<Route path="/div" component={Div} />
				<Route path="/mul" component={Mul} />
			</div>
		);
	}
}

export default App;
