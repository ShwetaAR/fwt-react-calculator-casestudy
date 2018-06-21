
import React, { Component } from 'react';
import OutPutBox from './OutPutBox';
import InputBox from './InputBox';
import '../css/calculator.css';

class Calculator extends Component {
	 render() {
    return (
    		<div>
    		<h1>Calculator</h1>
	    	<div className="calculator">
	     	
	     	<InputBox/>
	     	</div>
	     	</div>
    );
  }
}

export default Calculator;

 //<button className={`calculator-key ${className}`} {...props}/>