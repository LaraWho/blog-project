import React, { Component } from 'react';
import { withState } from '../MyState';

class Publications extends Component {

  componentDidMount() {
    if(this.props.articles === undefined || this.props.articles.length === 0) {
      this.props.getArticles()
    }
  }

  render() {
    // let found = this.props.articles.find(el => {
    //   return el.publisher.match(/world/gi)
    // });
    // console.log(found)

    const mappedPW = this.props.articles.map(el => {
      return <div key={el._id}>
        {el.publisher.replace(/\s+/g, "").match(/physicsworld/gi) ?
        <a href={el.link} target="_blank" rel="noopener noreferrer">{el.title}</a> : null
        }
      </div>
    })

    return (
      <div>
        <h1>Physics World</h1>

        {mappedPW}
      </div>
    );
  }
}

export default withState(Publications);