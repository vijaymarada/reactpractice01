import logo from './Images/tree.jpg';
import './App.css';
import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="img"></img>
    );
  }
}

export default Image;
