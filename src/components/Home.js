import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h1>Calculator</h1>
				<div className="buttons-container">
					<NavLink to="/add" className="button" activeClassName="active-button">
						Add
					</NavLink>
					<NavLink to="/sub" className="button" activeClassName="active-button">
						Sub
					</NavLink>
					<NavLink to="/div" className="button" activeClassName="active-button">
						Div
					</NavLink>
					<NavLink to="/mul" className="button" activeClassName="active-button">
						Mul
					</NavLink>
				</div>
			</>
		);
	}
}

export default Home;
