import React, { Component } from "react"; //ES6
// var React = require('react');//ES5

import Display from "./Display";

class App extends Component {
  state = {
    name: "alina",
    age: 20,
    designation: "developer",
  };

  handleClick = () => {
    this.setState({
      name: "alex",
    });
  };

  render() {
    return (
      <>
        {this.state.name}
        <Display data={this.state} />
        <button onClick={this.handleClick}>Update</button>
      </>
    );
  }
}

export default App;

// React.createElement(App,
// Display (state) {

// })

// Babel
