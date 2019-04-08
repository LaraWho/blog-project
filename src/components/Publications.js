import React, { Component } from "react";
import { withState } from "../MyState";
import styled from "styled-components";

const Link = styled.a`
  /* text-align: left; */
  width: 80vw;
  margin: auto;
  font-family: "Open Sans", sans-serif;
`;
const Header = styled.h1``;
class Publications extends Component {
  componentDidMount() {
    if (this.props.articles === undefined || this.props.articles.length === 0) {
      this.props.getArticles();
    }
  }

  render() {
    const publisherDictionary = this.props.articles.reduce((acc, article) => {
      if (acc[article.publisher]) {
        acc[article.publisher].push(article);
        return acc;
      } else {
        acc[article.publisher] = [article];
        return acc;
      }
    }, {});

    const articleTitleByPublisher = Object.entries(publisherDictionary).map(
      publisherArticleArray => {
        return (
          <div key={publisherArticleArray[0]}>
            <Header>{publisherArticleArray[0]}</Header>
            {publisherArticleArray[1].map(article => {
              return (
                <div>
                  <Link
                    key={article._id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </Link>
                  <br />
                </div>
              );
            })}
          </div>
        );
      }
    );

    return <div>{articleTitleByPublisher}</div>;
  }
}

export default withState(Publications);
