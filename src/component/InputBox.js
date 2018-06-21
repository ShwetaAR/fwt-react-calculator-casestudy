
	import React, { Component } from 'react';
	import CalculatorButton from './CalculatorButton';
	import '../css/inputbox.css';
	import OutPutBox from './OutPutBox';

	class InputBox extends Component {

			constructor(props){
				super(props);
				this.state={
					newInput:''
				};
			}
			setInputs(id){
				if (this.state.newInput === '') {
					this.setState({
				        newInput: this.state.newInput + id
				    });
				    return;
				}

				let _lastChar = this.state.newInput[this.state.newInput.length - 1];
				if (!parseInt(_lastChar) && !parseInt(id) && !isNaN(parseInt(_lastChar)) ) {
					let _newInput = this.state.newInput.slice(0, -1);
					this.setState({
				        newInput: _newInput + id
				    });
				    return; 
				}
				this.setState({
				    newInput: this.state.newInput + id
				});
	        }
	        calculate(){
	        		 let _lastChar = this.state.newInput[this.state.newInput.length - 1];
	          		 if(!isNaN(parseInt(_lastChar))){
	           		this.setState({
			            newInput: eval(this.state.newInput).toString()
			        });
	           }
	        	 
	        }
		clearScreen(){
			 this.setState({
			            newInput: ''
			        });
		}


		 render() {
	    return (
	    	
	    	<div>
	    	<OutPutBox newInput={this.state.newInput}  />
	    	
	    	 <section className="button-set">
	    	 <div className="button-set-1">
	    	<CalculatorButton value={1} newInput={(data) => { this.setInputs('1'); }} />
	       	<CalculatorButton value={2} newInput={(data) => { this.setInputs('2'); }} />
	       	<CalculatorButton value={3} newInput={(data) => { this.setInputs('3'); }} />
	        <CalculatorButton value={'+'} newInput={(data) => { this.setInputs('+'); }} />
	    
	        </div>
	         <div className="button-set-2">
	        <CalculatorButton value={4} newInput={(data) => { this.setInputs('4'); }} />
	        <CalculatorButton value={5} newInput={(data) => { this.setInputs('5'); }} />
	        <CalculatorButton value={6} newInput={(data) => { this.setInputs('6'); }} />
	        <CalculatorButton value={'-'} newInput={(data) => { this.setInputs('-'); }} />
	        </div>
	         <div className="button-set-3">
	        <CalculatorButton value={7} newInput={(data) => { this.setInputs('7'); }} />
	        <CalculatorButton value={8} newInput={(data) => { this.setInputs('8'); }} />
	        <CalculatorButton value={9} newInput={(data) => { this.setInputs('9'); }} />
	        <CalculatorButton value={'*'} newInput={(data) => { this.setInputs('*'); }} />
	        </div>
	        <div className="button-set-4">
	       <CalculatorButton value={0} newInput={(data) => { this.setInputs('0'); }} />
	       <CalculatorButton value={'/'} newInput={(data) => { this.setInputs('/'); }} />
	        <CalculatorButton value={'='} newInput={(data) => { this.calculate(); }} />
	         <CalculatorButton value={'AC'} newInput={(data) => { this.clearScreen(); }} />
	   
	        </div>
	      </section>
	      </div>
	    );
	  }
	}

	export default InputBox;