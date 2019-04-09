import React, { Component } from "react";
import { withState } from "../MyState";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import axios from "axios";

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2.25em;
  margin-bottom: 2em;
`;
class ArticleList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     deleted: []
  //   };
  // }

  deleteArticle = id => {
    axios.delete(`/api/articles/${id}`).then(res => {
      console.log(res.data);
    });
  };

  render() {
    let articleThumbnails = [];
    if (this.props.homeDisplay) {
      articleThumbnails = this.props.homeArticles;
    } else if (this.props.hubDisplay) {
      articleThumbnails = this.props.hubArticles;
    }
    const mappedArticleThumbnails = articleThumbnails
      .slice(0)
      .reverse()
      .map(article => {
        return (
          <Thumbnail
            key={article._id}
            article={article}
            history={this.props.history}
            deleteArticle={this.deleteArticle}
          />
        );
      });
    return <ArticleWrapper>{mappedArticleThumbnails}</ArticleWrapper>;
  }
}

export default withState(ArticleList);
