import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import { withState } from '../MyState';
import styled from 'styled-components';
import Login from './Login';
import sweetie from 'sweetalert2';
import axios from 'axios';
const ReactQuill = require('react-quill');

const Editor = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; */
`
const Input = styled.input`
  margin: 0.5em;
`
const AddButton = styled.h2`
  cursor: pointer;
  width: 80vw;
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
  @media (min-width: 600px) {
    width: 60vw;
  }
`
const InputText = styled.h2`
  text-align: left;
  width: 80vw;
  margin: auto;
  :nth-of-type(1) {
    margin-top: 1em;
    @media (min-width: 600px) {
      margin-top: 2em;
  }
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
      title: '',
      date: ''
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
    const Toast = sweetie.mixin({
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 2000
    });
    const { text, imageURL, link, title, date } = this.state
    axios.post('/api/articles', {content: text, imageURL, link, title, date}).then(res => {
      Toast.fire({
        type: 'success',
        title: 'added!'
      })
      setTimeout(() => {
        this.props.history.push('/')     
    }, 1500)
    }).catch(err => {
      console.log(err)
    })
  }

  
  render() {
    const { imageURL, link, title, date } = this.state
    return (
      <Editor>
      {this.props.isLoggedIn ?
      <Editor>      
        <InputText>Title</InputText>
        <Input type="text" name="title" value={title} onChange={this.handleInputChange} required/>
        <InputText>Image URL</InputText>
        <Input type="text" name="imageURL" value={imageURL} onChange={this.handleInputChange}/>
        <InputText>Publication Link</InputText>
        <Input type="text" name="link" value={link} onChange={this.handleInputChange} required/>
        <InputText>Date Published</InputText>
        <Input type="text" name="date" value={date} onChange={this.handleInputChange} required/>
        <InputText>Content</InputText>
        <div className="text-editor" style={{width: '80vw', margin: '1em auto'}}>
        <ReactQuill theme="snow"
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={this.formats}>
        </ReactQuill>
        </div>
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