import React from "react";

import Equals from "./Equals";
import Inputs from "./Inputs";

class Mul extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h1>Welcome to Multiply Page</h1>
        <Inputs />
        <Equals />
			</>
		);
	}
}

export default Mul;
