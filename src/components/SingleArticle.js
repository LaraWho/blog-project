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

const DeleteAndEdit = styled.button`
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  font-size: 1.5em;
  width: unset;
  width: 350px;
  padding: 5px;
  font-weight: 400;
  background-color: rgba(109, 108, 108, 0.9);
  border-color: #545454;
  border-style: solid;
  border-width: 2px 2px 0.5px 2px;
  color: #fff;
  transition: all 0.5s ease;
  :nth-of-type(2) {
    border-width: 0.5px 2px 2px 2px;
    color: #610707;
  }
  :hover {
    opacity: 0.5;
  }
`;

const ButtonBox = styled.div`
  margin-top: 1.5em;
  padding: 0.25em;
  background-color: #545454;
  @media (max-width: 746px) {
    margin-top: 1em;
    width: min-content;
  }
`;
class SingleArticle extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  edit = article => {
    this.props.history.push("/add");
    this.props.editing(article);
  };

  render() {
    const { id } = this.props.match.params;
    let matchingArticle = [];
    this.props.allArticles.length !== 0 &&
      (matchingArticle = this.props.allArticles.find(matchingArticle => {
        return matchingArticle._id === id;
      }));

    return (
      <SingleArticleWrapper>
        {this.props.token && (
          <ButtonBox>
            <DeleteAndEdit onClick={() => this.edit(matchingArticle)}>
              Edit
            </DeleteAndEdit>
            <DeleteAndEdit
              onClick={() => this.props.deleteOne(matchingArticle._id)}
            >
              Delete
            </DeleteAndEdit>
          </ButtonBox>
        )}

        <ArticleHeader>{matchingArticle.title}</ArticleHeader>
        <ArticleImage src={matchingArticle.imageURL} />
        <ImageText>{matchingArticle.imageText}</ImageText>
        <ArticleLink as="a" href={matchingArticle.link} target="_blank">
          {matchingArticle.link &&
            `Link to published article at ${matchingArticle.publisher}`}
        </ArticleLink>
        <ArticleSubTitle>
          Published {moment(matchingArticle.date).format("Do MMMM YYYY")}
        </ArticleSubTitle>
        <ArticleContent>
          {matchingArticle.content && parse(matchingArticle.content)}
        </ArticleContent>
      </SingleArticleWrapper>
    );
  }
}

export default withState(SingleArticle);
