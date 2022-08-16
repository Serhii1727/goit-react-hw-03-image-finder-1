import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer autoClose={3000} />
      </div>
    );
  }

};
