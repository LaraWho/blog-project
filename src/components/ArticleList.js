import React, {Component} from 'react';
import { withState } from '../MyState';
import styled from 'styled-components';
import Article from './Article';

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2.25em;
`
class ArticleList extends Component {

  componentDidMount() {
    this.props.getArticles()
    console.log(this.props.articles)
  }

  render() {

    const mappedArray = this.props.articles.slice(0).reverse().map(el => {
      return <Article key={el._id} article={el} history={this.props.history}/>
    })
    return (
      <ArticleWrapper>
        {mappedArray}
      </ArticleWrapper>
    );
  }
};

export default withState(ArticleList);