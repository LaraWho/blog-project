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
const Title = styled.h1`
  /* font-family: 'Montserrat Alternates', sans-serif; */
  font-family: 'Amatic SC', sans-serif;
  color: #333;
  letter-spacing: 2px;
  font-size: 3em;
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Title>Neuro&shy;Fabrication</Title>
        <Input size="1em"/>
        <Input />
      </div>
    );
  }
}

export default App;
