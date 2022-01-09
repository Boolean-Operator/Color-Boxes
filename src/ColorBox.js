import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css'

class ColorBox extends Component {
  
  constructor(props){
    super(props);
    this.state = {color:  choice(this.props.colors)};
    this.handleClick = this.handleClick.bind(this);
  }
  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    this.setState({color: newColor});
  }
  handleClick() {
    this.setColor()
  }
  render(props){
    return(
      <div className="ColorBox" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >
      </div>
    )
  }
}

export default ColorBox;

