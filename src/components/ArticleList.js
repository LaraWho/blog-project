import React from 'react';
import styled from 'styled-components';
import Article from './Article';

const ArticleList = () => {
  const ArticleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 2.25em;
  `
  return (
    <ArticleWrapper>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
      <Article/>
    </ArticleWrapper>
  );
};

export default ArticleList;