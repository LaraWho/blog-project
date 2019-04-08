import React, { Component } from "react";
import { withState } from "../MyState";
import styled from "styled-components";
import parse from "html-react-parser";
const moment = require("moment");

const SingleArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ArticleHeader = styled.h1`
  font-size: 2.5em;
  margin: 0;
  padding: 1em;
  color: #444;
  width: 80vw;
  @media (min-width: 600px) {
    font-size: 3em;
    padding-top: 1em;
  }
`;
const ArticleImage = styled.img`
  width: 100vw;
  @media (min-width: 600px) {
    margin: 1em;
    width: 60vw;
  }
  @media (min-width: 1000px) {
    margin: 1em;
    width: 50vw;
  }
`;
const ArticleContent = styled.div`
  width: 80vw;
  text-align: left;
`;
const ArticleSubTitle = styled.h2`
  width: 80vw;
  text-align: left;
  margin-top: 20px;
  font-size: 1.5em;
`;
const ImageText = styled.p`
  text-align: center;
  width: 80vw;
  margin: 1em auto;
  :nth-last-of-type() {
    margin-bottom: 2em;
  }
`;
const ArticleLink = styled(ArticleSubTitle)`
  font-family: "Muli", sans-serif;
  cursor: pointer;
  font-size: 2em;
`;
class SingleArticle extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id } = this.props.match.params;
    const article = this.props.articles.find(el => {
      return el._id === id;
    });

    return (
      <SingleArticleWrapper>
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleImage src={article.imageURL} />
        <ImageText>{article.imageText}</ImageText>
        <ArticleLink as="a" href={article.link} target="_blank">
          Link to published article at {article.publisher}
        </ArticleLink>
        <ArticleSubTitle>
          Published {moment(article.date).format("Do MMMM YYYY")}
        </ArticleSubTitle>
        <ArticleContent>{parse(article.content)}</ArticleContent>
      </SingleArticleWrapper>
    );
  }
}

export default withState(SingleArticle);
