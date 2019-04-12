import React, { Component } from "react";
import { withState } from "../MyState";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: left;
  width: 80vw;
  margin: auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: ${props => props.padding || "0"};
  @media (min-width: 900px) {
    max-width: 70vw;
  }
`;
const ContentWrapper = styled(Wrapper)`
  padding: 1em 0;
`;
const Link = styled.a`
  text-decoration: underline;
  font-family: "Open Sans", sans-serif;
`;
const Header = styled.h1`
  margin-top: 2em;
  margin-bottom: 0;
  text-align: left;
`;
const SubTitle = styled.h2`
  text-align: left;
`;
class Publications extends Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const publisherDictionary = this.props.allArticles.reduce(
      (acc, article) => {
        if (acc[article.publisher]) {
          acc[article.publisher].push(article);
          return acc;
        } else {
          acc[article.publisher] = [article];
          return acc;
        }
      },
      {}
    );

    const articleTitleByPublisher = Object.entries(publisherDictionary).map(
      publisherArticleArray => {
        return (
          <ContentWrapper key={publisherArticleArray[0]}>
            <SubTitle>{publisherArticleArray[0]}</SubTitle>
            {publisherArticleArray[1].map(article => {
              return (
                <Wrapper padding={"0.25em 0"} key={article._id}>
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </Link>
                  <br />
                </Wrapper>
              );
            })}
          </ContentWrapper>
        );
      }
    );

    return (
      <Wrapper>
        <Header>List of Written Work</Header>
        {articleTitleByPublisher}
      </Wrapper>
    );
  }
}

export default withState(Publications);
