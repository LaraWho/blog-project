import React, { Component } from "react";
import styled from "styled-components";
import { withState } from "../MyState";

const Article = styled.div`
  cursor: pointer;
  margin: 1.2em 0.55em;
  height: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Thumbnail = styled.div`
  width: 350px;
  height: fill-available;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const ArticleHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(109, 108, 108, 0.9);
  color: #fff;
  font-weight: 400;
  width: 350px;
  margin: 0;
  padding: 0.5em;
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
              style={{ backgroundImage: `url(${this.props.article.imageURL})` }}
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
              style={{ backgroundImage: `url(${this.props.article.imageURL})` }}
            />
          </Article>
        )}
      </Article>
    );
  }
}

export default withState(ThumbnailComp);
