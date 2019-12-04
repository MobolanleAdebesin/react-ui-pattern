import React, { Component } from "react";
import "./Slide.css";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      backgroundImage: `url(${this.props.image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "auto"
    };
  }
  render() {
    return <div className="slide" style={this.styles}></div>;
  }
}

export default Slide;
