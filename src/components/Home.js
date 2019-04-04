import React, { Component } from 'react';
import styled from 'styled-components';
import brain from '../newbrainsmaller.jpg'
import ArticleList from './ArticleList';

const HomeWrapper = styled.div`
  width: 80vw;
  margin: auto;
`
const Brain = styled.img`
  width: 50vw;
  margin-top: 1em;
  @media (min-width: 450px) {
    margin-top: 2em;
  }
  @media (min-width: 600px) {
    width: 40vw;   
  }
  @media (min-width: 1100px) {
    width: 25vw;
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
  transition: all .5s ease;
  :hover {
    opacity: 0.6;
  }
`
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Brain src={brain} alt="brain"/>
        <Title>Neuro&shy;Fabrication</Title>
        <SubTitle color="#4e4b4b" margin="0 auto">Neuroscience - Biofabrication</SubTitle>
        <SubTitle size="1.5em">Personal Website of Geoffrey Potjewyd</SubTitle>

        <ArticleList history={this.props.history}/>

        <LoginBtn onClick={() => this.props.history.push('/login')}>If you're Geoffrey, click here!</LoginBtn>
      </HomeWrapper>
    );
  }
}

export default Home;