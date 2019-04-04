import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { withState } from '../MyState';
import styled from 'styled-components';
import Login from './Login';
const ReactQuill = require('react-quill');

const Editor = styled.div`

`
const Input = styled.input`
  margin: 0.5em;
`
const AddButton = styled.h2`
  cursor: pointer;
  width: 60vw;
  margin: auto;
  padding: 0.25em;
  background-color: #d8d8d8;
  margin-top: 0.75em;
  transition: all .5s ease;
  text-align: left;
  :hover {
    background-color: #aba7a7;
    color: #FFF;
  }
`
const InputText = styled.h2`
  text-align: left;
  width: 80vw;
  margin: auto;
  :nth-of-type(1) {
    margin-top: 1em;
  }
  @media (min-width: 600px) {
    width: 60vw;
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
      {this.props.isLoggedIn ?
      <Editor>      
        <div className="text-editor">
          <ReactQuill theme="snow"
                      onChange={this.handleChange}
                      modules={this.modules}
                      formats={this.formats}>
          </ReactQuill>
        </div>
        <InputText>Title</InputText>
        <Input type="text" name="title" value={title} onChange={this.handleInputChange}/>
        <InputText>Image URL Only</InputText>
        <Input type="text" name="imageURL" value={imageURL} onChange={this.handleInputChange}/>
        <InputText>Publication Link</InputText>
        <Input type="text" name="link" value={link} onChange={this.handleInputChange}/>
        <AddButton onClick={() => this.addArticle()}>add</AddButton>
      </Editor>
      :
      <Editor>
        <Login history={this.props.history}/>
      </Editor>
      }
      </Editor>

    );
  }
}

export default withState(AddArticle);