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
  padding-bottom: 0;
  width: 80vw;
  @media (min-width: 600px) {
    font-size: 3em;
  }
`;
const ArticleImage = styled.img`
  width: 100vw;
  margin: 1em;
  @media (min-width: 600px) {
    width: 60vw;
  }
  @media (min-width: 1000px) {
    width: 50vw;
  }
`;
const ArticleContent = styled.div`
  width: 80vw;
  text-align: left;
`;
const ArticleSubTitle = styled.h2`
  width: 80vw;
  margin: 0.5em 0;
  text-align: left;
  font-size: 1.25em;
`;
const ImageText = styled.p`
  text-align: left;
  width: 80vw;
  margin: 0.5em auto;
  :nth-last-of-type() {
    margin-bottom: 2em;
  }
`;
const ArticleLink = styled(ArticleSubTitle)`
  font-family: "Muli", sans-serif;
  cursor: pointer;
  font-size: 1.5em;
`;
class SingleArticle extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { id } = this.props.match.params;
    const article = this.props.allArticles.find(matchingArticle => {
      return matchingArticle._id === id;
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
