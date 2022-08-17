import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";


export class App extends Component {
  state = {
    name: '',
  }

  handleNameSubmit = (name) => {
    this.setState({ name })
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <Searchbar onSubmit={this.handleNameSubmit} />
        <ImageGallery name={name} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }

};
