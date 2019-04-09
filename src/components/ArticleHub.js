import React, { Component } from "react";
import ArticleList from "./ArticleList";
import styled from "styled-components";
import { withState } from "../MyState";
import ReactPaginate from "react-paginate";
import axios from "axios";

const HubWrapper = styled.div`
  width: 100vw;
`;
class ArticleHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 8,
      articlesToPaginate: [],
      pageCount: 0
    };
  }

  componentWillMount() {
    this.getSomeArticles();
  }

  getSomeArticles = page => {
    axios
      .get(`/api/articles/some/${page}`)
      .then(res => {
        this.setState({
          articlesToPaginate: res.data.docs,
          pageCount: res.data.pages
          // pageCount: Math.ceil(res.data.total / res.data.limit)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handlePageClick = data => {
    let selected = data.selected + 1;
    let offset = Math.ceil(selected * 8);
    this.setState(
      {
        offset: offset
      },
      () => {
        this.getSomeArticles(selected);
      }
    );
  };

  render() {
    return (
      <HubWrapper>
        <ArticleList
          history={this.props.history}
          hubDisplay={true}
          hubArticles={this.state.articlesToPaginate}
        />
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </HubWrapper>
    );
  }
}

export default withState(ArticleHub);
