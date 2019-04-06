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
      token: ''
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

  saveArticle = (id, article) => {
    axios.put(`/api/articles/${id}`, article).then(res => {
      console.log(res.data)
      this.setState(prevState => ({
        articles: [res.data, ...prevState.articles]
      }))
    }).catch(err => {
      console.log(err)
    })
  }

  login = (username, password) => {
    axios.post('/auth/login', {username, password}).then(res => {
      const { token, user } = res.data
      console.log(token, user)
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
      saveArticle: this.saveArticle,
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