import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { withState } from '../MyState';
import styled from 'styled-components';
const ReactQuill = require('react-quill');

const Editor = styled.div`

`

const Input = styled.input`
  :nth-of-type(1) {
    margin-top: 1em;
  }
  
`

const AddButton = styled.h2`
  cursor: pointer;
  width: 60vw;
  margin: auto;
  padding: 0.25em;
  background-color: #d8d8d8;
  margin-top: 0.5em;
  transition: all .5s ease;
  text-align: left;
  :hover {
    background-color: #aba7a7;
    color: #FFF;
  }
`

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      imageURL: '',
      link: '',
      title: ''
    }
  }
  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]

  handleChange = value => {
    this.setState({ text: value })
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addArticle = () => {
    const { text, imageURL, link, title } = this.state
    axios.post('/api/articles', {content: text, imageURL, link, title}).then(res => {
      console.log('saved!')
    }).catch(err => {
      console.log(err)
    })
  }
  
  render() {
    const { imageURL, link, title } = this.state
    return (
      <Editor>
        <div className="text-editor">
          <ReactQuill theme="snow"
                      onChange={this.handleChange}
                      modules={this.modules}
                      formats={this.formats}>
          </ReactQuill>
        </div>
        <Input type="text" placeholder="title" name="title" value={title} onChange={this.handleInputChange}/>
        <Input type="text" placeholder="imageurl" name="imageURL" value={imageURL} onChange={this.handleInputChange}/>
        <Input type="text" placeholder="email" name="link" value={link} onChange={this.handleInputChange}/>
        <AddButton onClick={() => this.addArticle()}>add</AddButton>
      </Editor>
    );
  }
}

export default withState(AddArticle);