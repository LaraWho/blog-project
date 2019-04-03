import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import CV from './components/CV';
import Login from './components/Login';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

const GlobalScope = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #333;
    background-color: #F2F2F2;
  }
  h1, h2 {
    letter-spacing: 2px;
    font-family: 'Amatic SC', sans-serif;
  }
`

const AppWrapper = styled.div`
  text-align: center;
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
          </Switch>
      </AppWrapper>
    );
  }
}

export default withRouter(App);
