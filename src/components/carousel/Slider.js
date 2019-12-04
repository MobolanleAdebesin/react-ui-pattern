import React, { Component } from "react";
import Slide from "./Slide.js";
import LeftArrow from "./LeftArrow.js";
import RightArrow from "./RightArrow.js";
import "./Slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      translateValue: 0
    };
  }

  prevSlide = () => {
    if (this.state.currentIndex === 0) {
      return;
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }));
    }
  };

  nextSlide = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: `transform ease-out 0.45s`
          }}
        >
          {this.props.images.map((image, i) => (
            <Slide key={i} image={image.url} />
          ))}
        </div>
        <div className="slider-arrow-container">
          <LeftArrow prevSlide={this.prevSlide}></LeftArrow>
          <RightArrow nextSlide={this.nextSlide}></RightArrow>
        </div>
      </div>
    );
  }
}
export default Slider;
