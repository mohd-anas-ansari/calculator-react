import React from "react";

class Inputs extends React.Component {
	state = {
		num1: 0,
		num2: 0,
	};

	//Input-one value
	handleInputOne = ({ target }) => {
		this.setState({ num1: target.value });
	};

	//change the focus if entered on 1 or run sum function if entered on 2
	keyPressed = (event) => {
		if (event.keyCode === 13) {
			if (event.target.id === "input-one") {
				document.getElementById("input-two").focus();
      }
			if (event.target.id === 'input-two') {   
				console.log('%c Inside Input two', 'background: red');
				
      }
		}
	};

	//Input-two value
	handleInputTwo = ({ target }) => {
		this.setState({ num2: target.value });
	};


  
	render() {
		console.log(this.state.num1, "num1");
		console.log(this.state.num2, 'num2');
		
		return (
			<div className="inputs">
				<input
					className="input"
					id="input-one"
					type="text"
					required
					onChange={this.handleInputOne}
					onKeyDown={this.keyPressed}
				/>
				<input
					className="input"
					id="input-two"
					type="text"
					required
					onChange={this.handleInputTwo}
					onKeyDown={this.keyPressed}
				/>
			</div>
		);
	}
}

export default Inputs;
