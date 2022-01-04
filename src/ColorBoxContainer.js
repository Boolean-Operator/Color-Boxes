import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxContainer.css'

class ColorBoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    color:["red", "blue", "aqua", "burlywood", "chartreuse", "darkgoldenrod", "darkgreen", "darkorange", "coral", "gold", "cornflowerblue", "indianred", "lime", "firebrick", "royalblue", "plum", "olive", "orange", "yellow", "teal"]
  }

  render() {
    const boxes = Array.from({ length: this.props.numBoxes}).map(() => <ColorBox />);
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