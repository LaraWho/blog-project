import React, { Component } from 'react';
import styled from 'styled-components';
import brain from '../newbrainsmaller.jpg'

const Brain = styled.img`
  width: 30vw;
  margin-top: 2em;
`

const Title = styled.h1`
  color: #333;
  font-size: 5em;
  margin: 0 auto;
`
const SubTitle = styled.h2.attrs(({size, color, margin}) => ({
  fontSize: size || '2.5em',
  color: color || '#6d6c6c',
  margin: margin || '0.25em auto'
}))`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
`
class Home extends Component {
  render() {
    return (
      <div>
        <Brain src={brain} alt="brain"/>
        <Title>Neuro&shy;Fabrication</Title>
        <SubTitle color="#4e4b4b" margin="0 auto">Neuroscience - Biofabrication</SubTitle>
        <SubTitle size="2em">Personal Website of Geoffrey Potjewyd</SubTitle>
      </div>
    );
  }
}

export default Home;