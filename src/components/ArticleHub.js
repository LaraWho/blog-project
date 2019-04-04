import React from 'react';
import ArticleList from './ArticleList';
import styled from 'styled-components';

const ArticleHub = (props) => {
  const HubWrapper = styled.div`
  width: 100vw;
  `
  return (
    <HubWrapper>
      <ArticleList history={props.history}/>      
    </HubWrapper>
  );
};

export default ArticleHub;