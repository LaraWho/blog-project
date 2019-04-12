import React, { Component } from "react";
import axios from "axios";
import sweetie from "sweetalert2";
const { Provider, Consumer } = React.createContext();

class MyState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      user: JSON.parse(localStorage.getItem("user")) || {},
      token: localStorage.token || "",
      isEditing: false,
      articleToEdit: [],
      articlesToLimit: [],
      pageCount: 0
    };
  }
  componentDidMount() {
    this.getAllArticles();
    this.getSomeArticles();
  }

  getSomeArticles = page => {
    axios
      .get(`/api/articles/${page}`)
      .then(res => {
        this.setState({
          articlesToLimit: res.data.docs,
          pageCount: res.data.pages
          // pageCount: Math.ceil(res.data.total / res.data.limit)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteArticle = id => {
    const toKeep = this.state.articlesToLimit.filter(article => {
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
            this.setState(
              {
                articlesToLimit: toKeep
              },
              () => {
                this.getSomeArticles();
              }
            );
          });
        }
      });
  };

  getAllArticles = () => {
    axios
      .get("/api/articles")
      .then(res => {
        this.setState({
          allArticles: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveEdit = (_id, article) => {
    axios
      .put(`/api/articles/${_id}`, article)
      .then(res => {
        this.setState(prevState => ({
          allArticles: [res.data, ...prevState.allArticles],
          isEditing: false
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  editing = article => {
    if (this.state.token) {
      this.setState({
        isEditing: true,
        articleToEdit: article
      });
    }
  };

  removeEdit = () => {
    this.setState({
      isEditing: false,
      articleToEdit: []
    });
  };

  login = (username, password) => {
    axios
      .post("/auth/login", { username, password })
      .then(res => {
        const { token, user } = res.data;
        console.log(token, user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.setState(
          {
            user,
            token
          },
          () => {
            window.location.href = "/";
          }
        );
      })
      .catch(err => {
        console.log(err);
        sweetie.fire({
          text: "Incorrect!",
          type: "error",
          confirmButtonText: "Try again",
          confirmButtonColor: "#777"
        });
      });
  };

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
      user: "",
      token: ""
    });
  };

  render() {
    const props = {
      getAllArticles: this.getAllArticles,
      getSomeArticles: this.getSomeArticles,
      deleteArticle: this.deleteArticle,
      saveEdit: this.saveEdit,
      editing: this.editing,
      removeEdit: this.removeEdit,
      login: this.login,
      logout: this.logout,
      ...this.state
    };

    return <Provider value={props}>{this.props.children}</Provider>;
  }
}

export default MyState;

export function withState(Comp) {
  return props => (
    <Consumer>{value => <Comp {...value} {...props} />}</Consumer>
  );
}
