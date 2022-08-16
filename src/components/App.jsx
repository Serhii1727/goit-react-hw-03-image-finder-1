import React, { Component } from "react";
import Searchbar from "./Searchbar";


export class App extends Component {
  state = {
    name: '',
  }

  handleNameSubmit = (name) => {
    this.setState({ name })
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleNameSubmit} />
      </div>
    );
  }

};
