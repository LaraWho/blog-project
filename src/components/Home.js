import React, { Component } from "react";
import styled from "styled-components";
import brain from "../brain3.svg";
import ArticleList from "./ArticleList";
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
    width: 30vw;
  }
  @media (min-width: 1000px) {
    width: 20vw;
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
const NextButton = styled.h2`
  cursor: pointer;
  bottom: 5px;
  transition: all 0.5s ease;
  :hover {
    opacity: 0.6;
  }
`;
class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getSomeArticles();
    this.props.getAllArticles();
  }

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

        <ArticleList history={this.props.history} homeDisplay={true} />
        <NextButton onClick={() => this.props.history.push("/articles")}>
          See More Articles
        </NextButton>
      </HomeWrapper>
    );
  }
}

export default withState(Home);
