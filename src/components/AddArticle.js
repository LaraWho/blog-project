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
  @media (min-width: 600px) {
    width: 60vw;
  }
  :nth-of-type(1) {
    margin-top: 1em;
    @media (min-width: 600px) {
      margin-top: 2em;
    }
  }
`
const Toast = sweetie.mixin({
  toast: true,
  position: 'bottom-right',
  showConfirmButton: false,
  timer: 2000
});
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      imageText: '',
      imageURL: '',
      link: '',
      title: '',
      date: '',
      publisher: ''
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if(this.props.isEditing) {
      const {editContent, title: editTitle, imageURL: editURL, imageText: editImageText, date: editDate, link: editLink, publisher: editPublisher} = this.props.articleToEdit
      this.setState({
        text: editContent,
        imageText: editImageText,
        imageURL: editURL,
        link: editLink,
        title: editTitle,
        date: editDate,
        publisher: editPublisher
      })
    }
  }

  componentWillUnmount() {
    this.props.removeEdit()
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
    const { text, imageText, imageURL, link, title, date, publisher } = this.state
    axios.post('/api/articles', {content: text, imageText, imageURL, link, title, date, publisher}).then(res => {
      Toast.fire({
        type: 'success',
        title: 'Saved!'
      })
      setTimeout(() => {
        this.props.history.push('/')
    }, 1500)
    }).catch(err => {
      console.log(err)
    })
  }

  saveEdit = (_id, article) => {
  this.props.saveEdit(_id, article)
  Toast.fire({
    type: 'success',
    title: 'Saved!'
  })
  setTimeout(() => {
    this.props.history.push('/')     
  }, 1500)
  }

  render() {
    const { _id, content: editContent } = this.props.articleToEdit
    const { text, imageText, imageURL, link, title, date, publisher } = this.state
    return (
      <Editor>
      {this.props.token !== '' ?
      <Editor>      
        <InputText>Title</InputText>
        <Input type="text" name="title" value={title} onChange={this.handleInputChange} required/>
        <InputText>Image URL</InputText>
        <Input type="text" name="imageURL" value={imageURL} onChange={this.handleInputChange} />
        <InputText>Image Text</InputText>
        <Input type="text" name="imageText" value={imageText} onChange={this.handleInputChange} />
        <InputText>Publication Link</InputText>
        <Input type="text" name="link" value={link} onChange={this.handleInputChange} required/>
        <InputText>Date Published</InputText>
        <Input type="text" name="date" value={date} onChange={this.handleInputChange} required/>
        <InputText>Place Published</InputText>
        <Input type="text" name="publisher" value={publisher} onChange={this.handleInputChange} required/>
        <InputText>Content</InputText>
        <div className="text-editor" style={{width: '80vw', margin: '1em auto'}}>
        <ReactQuill theme="snow"
                    onChange={this.handleChange}
                    modules={this.modules}
                    formats={this.formats}
                    defaultValue={this.props.isEditing ? editContent : ''}>
        </ReactQuill>
        </div>
        <AddButton onClick={this.props.isEditing ? () => this.saveEdit(_id, {content: text, imageText, imageURL, link, title, date, publisher}) : () => this.addArticle()}>save</AddButton>
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