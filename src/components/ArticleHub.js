import React, { Component } from "react";
import ArticleList from "./ArticleList";
import styled from "styled-components";
import { withState } from "../MyState";
import ReactPaginate from "react-paginate";
import axios from "axios";
import sweetie from "sweetalert2";

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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getSomeArticles();
    this.props.getAllArticles();
  }

  deleteArticle = id => {
    const toKeep = this.state.articlesToPaginate.filter(article => {
      return article._id !== id;
    });
    sweetie
      .fire({
        title: "Are you sure?! Are you sure?!",
        text:
          "Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?! Are you sure?!",
        showCancelButton: true,
        confirmButtonColor: "#610707",
        cancelButtonColor: "rgba(109,108,108,0.9)",
        cancelButtonText: "NO!",
        confirmButtonText: "DELETE!",
        padding: "2.5rem"
      })
      .then(result => {
        if (result.value) {
          axios.delete(`/api/articles/${id}`).then(res => {
            this.setState({
              articlesToPaginate: toKeep
            });
          });
        }
      });
  };
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
          deleteArticle={this.deleteArticle}
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
