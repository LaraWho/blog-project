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
      offset: 6
    };
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
        <ArticleList history={this.props.history} displayAll={true} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.props.pages}
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
