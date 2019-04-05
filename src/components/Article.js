import React from 'react';
import styled from 'styled-components';
import { withState } from '../MyState';

const Article = (props) => {
  const Article = styled.div`
    cursor: pointer;
    margin: 10px;
    `
  const Thumbnail = styled.img`
    width: 350px;
    position: relative;
  `
  const ArticleHeader = styled.h2`
    position: absolute;
    z-index: 5;
    background-color: rgba(109, 108, 108, 0.5);
    color: #fff;
    width: 350px;
    margin: 0;
    padding: 5px;
    transition: all .5s ease;
    :hover {
      background-color: rgba(109, 108, 108, 0.8);
    }
  `
  const DeleteAndEdit = styled(ArticleHeader)`
    position: unset;
    border-color: #777;
    border-style: solid; 
    border-width: 0.5px 2px 2px 2px;
    color: #d60b0b;
    :nth-of-type(2) {
      border-width: 2px 2px 0.5px 2px;
      color: #444;
    }
  `

  return (
    <Article>
      {props.isLoggedIn ? 
      <Article onClick={() => props.history.push(`/${props.article._id}`)}>
        <ArticleHeader>{props.article.title}</ArticleHeader>
        <Thumbnail src={props.article.imageURL} alt={props.article.title}/>
        <DeleteAndEdit>edit</DeleteAndEdit>
        <DeleteAndEdit>delete</DeleteAndEdit>
      </Article>
        :
      <Article onClick={() => props.history.push(`/${props.article._id}`)}>
        <ArticleHeader>{props.article.title}</ArticleHeader>
        <Thumbnail src={props.article.imageURL} alt={props.article.title}/>
      </Article>
      }
    </Article>
  );
};

export default withState(Article);