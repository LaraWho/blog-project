import React, { Component } from 'react';
import { withState } from '../MyState';
import styled from 'styled-components';
var moment = require('moment');

const SingleArticleWrapper = styled.div`
  margin: auto;
  `

const ArticleHeader = styled.h1`
  font-size: 3em;
  margin: 0;
  padding: 0.2em;
  background-color: rgba(109,108,108,0.6);
  color: #FFF;
  width: 100vw;
`
const ArticleImage = styled.div`
  width: 100vw;
  height: 50vh;
  background-position: center;
  background-size: cover;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const ArticleContent = styled.p`
  width: 80vw;
  margin: 2em auto;
  :nth-of-type(1) {
    text-align: right;
    margin: 1em auto;
  }
`
class SingleArticle extends Component {

  render() {
    const { id } = this.props.match.params
    const article = this.props.articles.find(el => {
      return el._id === id
    })
    return (
      <SingleArticleWrapper >
        <ArticleImage style={{backgroundImage: `url(${article.imageURL})`}}>
          <ArticleHeader>{article.title}</ArticleHeader>
        </ArticleImage>
        <ArticleContent>Posted {moment(article.date).calendar()}</ArticleContent>
        <ArticleContent>{article.content}</ArticleContent>
      </SingleArticleWrapper>
    );
  }
}

export default withState(SingleArticle);