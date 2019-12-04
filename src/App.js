import React, { Component } from "react";
import Slider from "./components/carousel/Slider.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    let url =
      "https://api.thecatapi.com/v1/images/search?category_ids=1&limit=10";
    fetch(url, {
      headers: { "x-api-key": "8df6bc49-4101-4e0c-9388-9af54b52314b" }
    })
      .then(res => res.json())
      .then(res => {
        console.dir(res);
        this.setState({ images: res });
      });
  }

  render() {
    return (
      <div className="App">
        <h2>Cats in Hats Carousel!</h2>
        <Slider images={this.state.images}></Slider>
      </div>
    );
  }
}

export default App;
