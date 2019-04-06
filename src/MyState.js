import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class MyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      isLoggedIn: false,
      user: '',
      token: '',
      isEditing: false,
      articleToEdit: []
    }
  }

  getArticles = () => {
    axios.get('/api/articles').then(res => {
      this.setState({
        articles: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  saveEdit = (_id, article) => {
    axios.put(`/api/articles/${_id}`, article).then(res => {
      this.setState(prevState => ({
        articles: [res.data, ...prevState.articles],
        isEditing: false
      }))
    }).catch(err => {
      console.log(err)
    })
  }

  editing = (article) => {
    if(this.state.isLoggedIn) {
      this.setState({
        isEditing: true,
        articleToEdit: article
      })
    }
  }

  login = (username, password) => {
    axios.post('/auth/login', {username, password}).then(res => {
      const { token, user } = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      this.setState({
        user, 
        token,
        isLoggedIn: true
      })
    }).catch(err => {
      console.log(err)
    })
  }

  logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    this.setState({
      isLoggedIn: false,
      user: '',
      token: ''
    })
  }

  render() {
    const props = {
      getArticles: this.getArticles,
      saveEdit: this.saveEdit,
      editing: this.editing,
      login: this.login,
      logout: this.logout,
      ...this.state
    }

    return (
      <Provider value={props} >
        {this.props.children}
      </Provider>
    );
  }
}

export default MyState;

export function withState(Comp) {
  return props => <Consumer>
                    {value => <Comp {...value} {...props} />}
                  </Consumer>
}