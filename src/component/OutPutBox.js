
import React, { Component } from 'react';
import '../css/outputbox.css';

class OutPutBox extends Component {
	 render() {
    return (
     
       <input type="text" className="inputbox" value={this.props.newInput}/>
 
    );
  }
}

export default OutPutBox;