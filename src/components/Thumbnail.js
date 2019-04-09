import React, { Component } from "react";
import styled from "styled-components";
import { withState } from "../MyState";

const Article = styled.div`
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Thumbnail = styled.img`
  width: 350px;
  position: relative;
`;
const ArticleHeader = styled.h2`
  background-color: rgba(109, 108, 108, 0.9);
  color: #fff;
  font-weight: 400;
  width: 350px;
  margin: 0;
  padding: 5px;
  transition: all 0.5s ease;
  :hover {
    background-color: rgba(109, 108, 108, 0.6);
  }
`;
const DeleteAndEdit = styled(ArticleHeader)`
  position: unset;
  font-weight: 400;
  border-color: #545454;
  border-style: solid;
  border-width: 0.5px 2px 2px 2px;
  color: #610707;
  :nth-of-type(2) {
    border-width: 2px 2px 0.5px 2px;
    color: #fff;
  }
`;
class ThumbnailComp extends Component {
  edit = article => {
    this.props.history.push("/add");
    this.props.editing(article);
  };

  render() {
    return (
      <Article>
        {this.props.token !== "" ? (
          <Article>
            <ArticleHeader
              onClick={() =>
                this.props.history.push(`/${this.props.article._id}`)
              }
            >
              {this.props.article.title}
            </ArticleHeader>
            <Thumbnail
              src={this.props.article.imageURL}
              alt={this.props.article.title}
            />
            <DeleteAndEdit onClick={() => this.edit(this.props.article)}>
              Edit
            </DeleteAndEdit>
            <DeleteAndEdit
              onClick={() => this.props.deleteArticle(this.props.article._id)}
            >
              Delete
            </DeleteAndEdit>
          </Article>
        ) : (
          <Article
            onClick={() =>
              this.props.history.push(`/${this.props.article._id}`)
            }
          >
            <ArticleHeader>{this.props.article.title}</ArticleHeader>
            <Thumbnail
              src={this.props.article.imageURL}
              alt={this.props.article.title}
            />
          </Article>
        )}
      </Article>
    );
  }
}

export default withState(ThumbnailComp);
