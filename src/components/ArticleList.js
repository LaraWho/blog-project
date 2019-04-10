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
  render() {
    let articleThumbnails = [];
    if (this.props.homeDisplay) {
      articleThumbnails = this.props.homeArticles;
    } else if (this.props.hubDisplay) {
      articleThumbnails = this.props.hubArticles;
    }
    const mappedArticleThumbnails = articleThumbnails.map(article => {
      return (
        <Thumbnail
          key={article._id}
          article={article}
          history={this.props.history}
          deleteArticle={this.props.deleteArticle}
        />
      );
    });
    return <ArticleWrapper>{mappedArticleThumbnails}</ArticleWrapper>;
  }
}

export default withState(ArticleList);
