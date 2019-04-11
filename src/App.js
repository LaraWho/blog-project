import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { withState } from "./MyState";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import sweetie from "sweetalert2";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import CV from "./components/CV";
import Login from "./components/Login";
import SingleArticle from "./components/SingleArticle";
import ArticleHub from "./components/ArticleHub";
import AddArticle from "./components/AddArticle";
import Publications from "./components/Publications";

const GlobalScope = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: #4e4b4b;    
    background-color: #F2F2F2;
    overflow-x: hidden;
  }
  h1, h2 {
    font-family: 'Muli', sans-serif;
  }
  h1 {
    color: #4e4b4b;
  }
  h2 {
    color: #6d6c6c;
  }
  p {
    line-height: 1.25em;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: underline;
    color: #6d6c6c;
    font-family: 'Muli', sans-serif;
    font-weight: 600;
    text-align: left;
    width: 80vw;
    margin: 10px auto;
    transition: all .5s ease;
    :hover {
      opacity: 0.5;
    }
  }
  .fa-caret-square-up {
    transition: all .5s ease;
  font-size: 2em;
  }
  .fa-caret-square-up:hover {
    opacity: 0.5;
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
`;
const AppWrapper = styled.div`
  text-align: center;
`;
const Footer = styled.h2`
  text-decoration: none;
  color: #aba7a7;
  font-size: 1em;
  cursor: pointer;
  width: auto;
  padding-left: 3.5em;
  padding-bottom: 10px;
  @media (min-width: 600px) {
    font-size: 1.25em;
  }
`;
const ScrollUp = styled(Footer)`
  padding-right: 2em;
  padding-left: 0em;
`;

const FooterWrapper = styled(AppWrapper)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
class App extends Component {
  scrollUp = () => {
    window.scrollTo(0, 0);
  };

  deleteOne = id => {
    sweetie
      .fire({
        title: "Are you sure?! Are you sure?!",
        text:
          "Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?!",
        showCancelButton: true,
        confirmButtonColor: "#610707",
        cancelButtonColor: "rgba(109,108,108,0.9)",
        cancelButtonText: "NO!",
        confirmButtonText: "DELETE!",
        padding: "2.5rem"
      })
      .then(result => {
        if (result.value) {
          axios.delete(`/api/articles/${id}`).then(res => {
            this.props.history.push("/articles");
          });
        }
      });
  };

  render() {
    return (
      <AppWrapper>
        <GlobalScope />
        <Nav history={this.props.history} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cv" component={CV} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddArticle} />
          <Route path="/publications" component={Publications} />
          <Route path="/articles" render={props => <ArticleHub {...props} />} />
          <Route
            path="/:id"
            render={props => (
              <SingleArticle {...props} deleteOne={this.deleteOne} />
            )}
          />
        </Switch>
        <FooterWrapper>
          <Footer as="a" href="http://lara-potjewyd.surge.sh/" target="_blank">
            {this.props.token !== ""
              ? "Website created by the best sister ever!"
              : "Website created by Lara Potjewyd"}
          </Footer>
          <ScrollUp onClick={this.scrollUp}>
            <i className="far fa-caret-square-up" />
          </ScrollUp>
        </FooterWrapper>
      </AppWrapper>
    );
  }
}

export default withState(withRouter(App));
