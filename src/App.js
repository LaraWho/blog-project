import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import styled from 'styled-components';

const Input = styled.input.attrs(({size}) => ({
  type: "text",
  fontSize: size || "2em"
}))`
font-size: ${props => props.fontSize};
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Neuro&shy;Fabrication</h1>
        <Input size="1em"/>
        <Input />
      </div>
    );
  }
}

export default App;
