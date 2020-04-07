import React from "react";

import Inputs from "./Inputs";
import Equals from "./Equals";


class Add extends React.Component {
	state = {};
	render() {
		return (
			<>
				<h1>Welcome to Add Page</h1>
        <Inputs />
        <Equals />
			</>
		);
	}
}

export default Add;
