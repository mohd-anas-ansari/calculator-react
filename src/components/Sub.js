import React from "react";

import Inputs from "./Inputs";
import Equals from "./Equals";


class Sub extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h1>Welcome to Subtract Page</h1>
        <Inputs />
        <Equals />
			</>
		);
	}
}

export default Sub;
