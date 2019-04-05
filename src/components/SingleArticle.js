import React, { Component } from 'react';
import { withState } from '../MyState';
import styled from 'styled-components';
import parse from 'html-react-parser';
const moment = require('moment');

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
const ArticleImage = styled.img`
  width: 100vw;
  margin: 0;
`
const ArticleContent = styled.div`
  width: 80vw;
  margin: 2em auto;
  text-align: left;
`
const ArticleSubTitle = styled.h2`
  width: 80vw;
  text-align: left;
  margin: 20px auto 0 auto;
  font-size: 1.5em;
`
const ArticleLink = styled(ArticleSubTitle)`
  font-family: 'Amatic SC', sans-serif;
  cursor: pointer;
`
class SingleArticle extends Component {

  render() {
    const { id } = this.props.match.params
    const article = this.props.articles.find(el => {
      return el._id === id
    })
    
    return (
      <SingleArticleWrapper >
        <ArticleHeader>{article.title}</ArticleHeader>
        <ArticleImage src={article.imageURL}/>
        <ArticleLink as="a" href={article.link} target="_blank">Link to published article</ArticleLink>
        <ArticleSubTitle>Published {moment(article.date).format('Do MMMM YYYY')}</ArticleSubTitle>
        <ArticleContent>{parse(article.content)}</ArticleContent>
      </SingleArticleWrapper>
    );
  }
}

export default withState(SingleArticle);