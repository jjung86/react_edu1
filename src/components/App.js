import React, { Component } from 'react';
import Nav from './Nav';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Container/>
      </div>
    );
  };
};

export default App;
