import React, { Component } from 'react';
import { choice } from './helpers';
import './ColorBox.css'

class ColorBox extends Component {
  static defaultProps = {
    allColors: ["red", "blue", "aqua", "burlywood", "chartreuse", "darkgoldenrod", "darkgreen", "darkorange", "coral", "gold", "cornflowerblue", "indianred", "lime", "firebrick", "royalblue", "plum", "olive", "orange", "yellow", "teal"]
  }
  constructor(props){
    super(props);
    this.state = {color:  choice(this.props.allColors)};
    this.handleClick = this.handleClick.bind(this);
  }
  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
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

