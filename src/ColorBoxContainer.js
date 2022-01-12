import React, { Component } from 'react';
import ColorBox from './ColorBox';
// import { choice } from './helpers';
import './ColorBoxContainer.css'

class ColorBoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors:["red", "blue", "aqua", "burlywood", "chartreuse", "darkgoldenrod", "darkgreen", "darkorange", "coral", "gold", "cornflowerblue", "indianred", "lime", "firebrick", "royalblue", "plum", "olive", "orange", "yellow", "teal"]
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { color: choice(this.props.allColors) };
  //   // this.setColor = this.setColor.bind(this);
  // }
  // setColor(oldColor) {
  //   let newColor;
  //   do {
  //     newColor = choice(this.props.allColors);
  //   } while (newColor === oldColor);
  //   this.setState({ color: newColor });
  // }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes}).map((_elem, index) => 
      <ColorBox key={index} colors={this.props.allColors}  />);
      console.log(boxes)
    return (

      <section className="ColorBoxContainer">
        <h1>Color Boxes</h1>
        <div className="ColorBoxContainer-Board">
          {boxes}
        </div>
      </section>


    )
  }
}

export default ColorBoxContainer;