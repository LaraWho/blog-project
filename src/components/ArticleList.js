import React, { Component } from "react";
import { withState } from "../MyState";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2.25em;
  margin-bottom: 2em;
`;
class ArticleList extends Component {
  componentDidMount() {
    if (this.props.articles === undefined || this.props.articles.length === 0) {
      this.props.getArticles();
    }
  }

  render() {
    const articleThumbnails = this.props.articles
      .slice(0)
      .reverse()
      .map(article => {
        return (
          <Thumbnail
            key={article._id}
            article={article}
            history={this.props.history}
          />
        );
      });
    return <ArticleWrapper>{articleThumbnails}</ArticleWrapper>;
  }
}

export default withState(ArticleList);
