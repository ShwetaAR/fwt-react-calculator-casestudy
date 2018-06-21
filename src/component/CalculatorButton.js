	import React, { Component } from 'react';

	class CalculatorButton extends Component {

			 render() {
	    		return (
	    			 <button className="calculator-button" onClick={this.props.newInput} >{this.props.value}</button>

	    			);
			}
	}
	export default CalculatorButton;