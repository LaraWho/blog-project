import React, { Component } from "react";
import ArticleList from "./ArticleList";
import styled from "styled-components";
import { withState } from "../MyState";
import ReactPaginate from "react-paginate";

const HubWrapper = styled.div`
  width: 100vw;
`;
class ArticleHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 8
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getSomeArticles();
    this.props.getAllArticles();
  }

  handlePageClick = data => {
    let selected = data.selected + 1;
    let offset = Math.ceil(selected * 8);
    this.setState(
      {
        offset: offset
      },
      () => {
        this.props.getSomeArticles(selected);
      }
    );
  };

  render() {
    return (
      <HubWrapper>
        <ArticleList history={this.props.history} hubDisplay={true} />
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.pageCount}
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
