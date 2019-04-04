import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class MyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      isLoggedIn: false
    }
  }

  getArticles = () => {
    axios.get('/api/articles').then(res => {
      this.setState({
        articles: res.data
      })
    })
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const props = {
      getArticles: this.getArticles,
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