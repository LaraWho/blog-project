import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();

class MyState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  getArticles = () => {
    axios.get('/api/articles').then(res => {
      this.setState({
        articles: res.data
      })
    })
  }


  render() {
    const props = {
      getArticles: this.getArticles,
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