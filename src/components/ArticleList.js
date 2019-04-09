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
  constructor(props) {
    super(props);
    this.state = {
      articleThumbnails: []
    };
  }
  componentDidMount() {
    if (
      !this.props.displayAll &&
      (this.props.articlesForHomePage === undefined ||
        this.props.articlesForHomePage.length === 0)
    ) {
      this.props.articlesForHomePage();
      this.setState({
        articleThumbnails: this.props.homeArticles
      });
    }
    if (
      this.props.displayAll &&
      (this.props.articlesToPaginate === undefined ||
        this.props.articlesToPaginate.length === 0)
    )
      this.props.getSomeArticles();
    this.setState({
      articleThumbnails: this.props.articlesToPaginate
    });
  }

  componentWillUnmount() {
    this.removeState();
  }

  removeState = () => {
    this.setState({
      articleThumbnails: []
    });
  };

  render() {
    // let articleThumbnails = [];
    // if (
    //   this.props.homeArticles.length !== 0 ||
    //   this.props.homeArticles.length !== undefined
    // ) {
    //   articleThumbnails = this.props.homeArticles;
    // } else if (
    //   this.props.articlesToPaginate.length !== 0 ||
    //   this.props.articlesToPaginate.length !== undefined
    // ) {
    //   articleThumbnails = this.props.articlesToPaginate;
    // }

    console.log(this.props.homeArticles);
    console.log(this.state.articleThumbnails);
    console.log(this.props.articlesToPaginate);

    const mappedArticleThumbnails = this.state.articleThumbnails
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
    return <ArticleWrapper>{mappedArticleThumbnails}</ArticleWrapper>;
  }
}

export default withState(ArticleList);
