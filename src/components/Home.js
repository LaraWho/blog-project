import React, { Component } from "react";
import styled from "styled-components";
import brain from "../brain3.svg";
import ArticleList from "./ArticleList";
import axios from "axios";
import sweetie from "sweetalert2";
import { withState } from "../MyState";

const HomeWrapper = styled.div`
  width: 80vw;
  margin: auto;
`;
const Brain = styled.img`
  width: 50vw;
  margin: 1em;
  margin-top: 2.5em;
  @media (min-width: 450px) {
    margin: 2.5em;
    margin-top: 4em;
  }
  @media (min-width: 600px) {
    width: 35vw;
  }
  @media (min-width: 980px) {
    width: 30vw;
  }
`;
const Title = styled.h1`
  font-size: 2.75em;
  margin: 0 auto;
  @media (min-width: 450px) {
    font-size: 4em;
  }
`;
const SubTitle = styled.h2.attrs(({ size, color, margin }) => ({
  fontSize: size || "1.75em",
  color: color || "#6d6c6c",
  margin: margin || "0.25em auto"
}))`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  /* @media (min-width: 380px) {
      font-size: 2.5em;
    } */
`;
const LoginBtn = styled.h2`
  cursor: pointer;
  bottom: 5px;
  transition: all 0.5s ease;
  :hover {
    opacity: 0.6;
  }
`;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeArticles: []
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
    this.articlesForHomePage();
    this.props.getAllArticles();
  }

  deleteArticle = id => {
    const toKeep = this.state.homeArticles.filter(article => {
      return article._id !== id;
    });
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
            this.setState(
              {
                homeArticles: toKeep
              },
              () => {
                this.articlesForHomePage();
              }
            );
          });
        }
      });
  };

  articlesForHomePage = () => {
    axios.get("/api/articles/some").then(res => {
      this.setState({
        homeArticles: res.data
      });
    });
  };

  render() {
    return (
      <HomeWrapper>
        <Brain src={brain} alt="brain" />
        <Title>Geoffrey Potjewyd</Title>
        <SubTitle color="#4e4b4b" margin="1em auto">
          {" "}
          Neuroscience - Tissue Engineering
        </SubTitle>
        <SubTitle size="1.5em">
          Regenerative Medicine PhD - Neuroscientist - Tissue Engineer - Science
          Writer
        </SubTitle>

        <ArticleList
          history={this.props.history}
          homeDisplay={true}
          homeArticles={this.state.homeArticles}
          deleteArticle={this.deleteArticle}
        />

        <LoginBtn onClick={() => this.props.history.push("/login")}>
          If you're Geoffrey, click here!
        </LoginBtn>
      </HomeWrapper>
    );
  }
}

export default withState(Home);
