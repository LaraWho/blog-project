import React, { Component } from 'react';
import styled from 'styled-components';
import brain from '../newbrainsmaller.jpg'
import ArticleList from './ArticleList';

const Brain = styled.img`
  width: 50vw;
  margin-top: 1em;
  @media (min-width: 450px) {
    margin-top: 2em;
  }
  @media (min-width: 600px) {
    width: 40vw;   
  }
`
const Title = styled.h1`
  color: #333;
  font-size: 2.75em;
  margin: 0 auto;
  @media (min-width: 450px) {
    font-size: 5em;
    }
`
const SubTitle = styled.h2.attrs(({size, color, margin}) => ({
  fontSize: size || '1.75em',
  color: color || '#6d6c6c',
  margin: margin || '0.25em auto'
}))`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  @media (min-width: 380px) {
      font-size: 2.5em;
    }
`

const LoginBtn = styled.h2`
  cursor: pointer;
  bottom: 5px;
  width: 100vw;
  transition: all .5s ease;
  :hover {
    opacity: 0.6;
  }
`
class Home extends Component {
  render() {
    return (
      <div>
        <Brain src={brain} alt="brain"/>
        <Title>Neuro&shy;Fabrication</Title>
        <SubTitle color="#4e4b4b" margin="0 auto">Neuroscience - Biofabrication</SubTitle>
        <SubTitle size="1.5em">Personal Website of Geoffrey Potjewyd</SubTitle>

        <ArticleList />

        <LoginBtn onClick={() => this.props.history.push('/login')}>If you're Geoffrey, click here!</LoginBtn>
      </div>
    );
  }
}

export default Home;