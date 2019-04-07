import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { withState } from './MyState';
import { Switch, Route, withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import CV from './components/CV';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import ArticleHub from './components/ArticleHub';
import AddArticle from './components/AddArticle';
import Publications from './components/Publications';

const GlobalScope = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: #333;
    background-color: #F2F2F2;
    overflow-x: hidden;
  }
  h1, h2 {
    letter-spacing: 2px;
    font-family: 'Amatic SC', sans-serif;
  }
  p {
    line-height: 1.25em;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
    color: #333;
    letter-spacing: 2px;
    font-family: 'Amatic SC', sans-serif;
    text-align: left;
    width: 80vw;
    margin: 10px auto;
    transition: all .5s ease;
    :hover {
      opacity: 0.5;
    }
  }
  input {
    font-family: 'Open Sans', sans-serif;
    padding: 0.75em;
    margin: 1em;
    width: 80vw;
    font-size: 1em;
    border: 2px solid #d8d8d8;
    transition: border .5s ease;
    :focus {
      border: 2px solid #aba7a7;
      outline: none;
    }
    @media (min-width: 600px) {
      width: 60vw;
    }
  }
`
const AppWrapper = styled.div`
  text-align: center;
`
const Footer = styled.h2`
  color: #aba7a7;
  cursor: pointer;
  font-size: 1.5em;
  width: 100vw;
  padding-bottom: 10px;
`
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <GlobalScope />
        <Nav history={this.props.history}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/cv" component={CV} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddArticle} />
            <Route path="/publications" component={Publications} />
            <Route path="/articles" render={(props) => (
              <ArticleHub {...props} />
            )} />
            <Route path="/:id" component={SingleArticle} />
          </Switch>
        <Footer as="a" href="http://lara-potjewyd.surge.sh/" target="_blank">{this.props.token !== ''? 'Website created by the best sister ever!' : 'Website created by Lara Potjewyd'}</Footer>
      </AppWrapper>
    );
  }
}

export default withState(withRouter(App));
