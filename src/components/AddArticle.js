import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import { withState } from "../MyState";
import styled from "styled-components";
import Login from "./Login";
import sweetie from "sweetalert2";
import axios from "axios";
const ReactQuill = require("react-quill");

const Editor = styled.div``;
const Input = styled.input`
  margin: 0.5em;
`;
const AddButton = styled.h2`
  cursor: pointer;
  width: 80vw;
  margin: auto;
  padding: 0.25em;
  background-color: #d8d8d8;
  margin-top: 0.75em;
  transition: all 0.5s ease;
  text-align: left;
  :hover {
    background-color: #aba7a7;
    color: #fff;
  }
  @media (min-width: 600px) {
    width: 60vw;
  }
`;
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
`;
const Select = styled.select`
  width: 80vw;
  margin: auto;
  font-family: "Open Sans", sans-serif;
  padding: 0.75em;
  margin: 1em;
  width: 80vw;
  font-size: 1em;
  border: 2px solid #d8d8d8;
  -webkit-transition: border 0.5s ease;
  transition: border 0.5s ease;
  outline: none;
  :focus {
    border: 2px solid #aba7a7;
  }
  @media (min-width: 600px) {
    width: 60vw;
  }
`;

const Option = styled.option``;

const Toast = sweetie.mixin({
  toast: true,
  position: "bottom-right",
  showConfirmButton: false,
  timer: 2000
});
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      imageText: "",
      imageURL: "",
      link: "",
      title: "",
      date: "",
      publisher: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.isEditing) {
      const {
        editContent,
        title: editTitle,
        imageURL: editURL,
        imageText: editImageText,
        date: editDate,
        link: editLink,
        publisher: editPublisher
      } = this.props.articleToEdit;
      this.setState({
        text: editContent,
        imageText: editImageText,
        imageURL: editURL,
        link: editLink,
        title: editTitle,
        date: editDate,
        publisher: editPublisher
      });
    }
  }

  componentWillUnmount() {
    this.props.removeEdit();
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link"],
      ["clean"]
    ]
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link"
  ];

  handleChange = value => {
    this.setState({ text: value });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addArticle = () => {
    const {
      text,
      imageText,
      imageURL,
      link,
      title,
      date,
      publisher
    } = this.state;
    axios
      .post("/api/articles", {
        content: text,
        imageText,
        imageURL,
        link,
        title,
        date,
        publisher
      })
      .then(res => {
        Toast.fire({
          type: "success",
          title: "Saved!"
        });
        setTimeout(() => {
          this.props.history.push("/");
        }, 1500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveEdit = (_id, article) => {
    this.props.saveEdit(_id, article);
    Toast.fire({
      type: "success",
      title: "Saved!"
    });
    setTimeout(() => {
      this.props.history.push("/");
    }, 1500);
  };

  render() {
    const { _id, content: editContent } = this.props.articleToEdit;
    const {
      text,
      imageText,
      imageURL,
      link,
      title,
      date,
      publisher
    } = this.state;
    return (
      <Editor>
        {this.props.token !== "" ? (
          <Editor>
            <InputText>Title</InputText>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
              required
            />
            <InputText>Image URL</InputText>
            <Input
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={this.handleInputChange}
            />
            <InputText>Image Text</InputText>
            <Input
              type="text"
              name="imageText"
              value={imageText}
              onChange={this.handleInputChange}
            />
            <InputText>Publication Link</InputText>
            <Input
              type="text"
              name="link"
              value={link}
              onChange={this.handleInputChange}
              required
            />
            <InputText>Date Published</InputText>
            <Input
              type="text"
              name="date"
              value={date}
              onChange={this.handleInputChange}
              required
            />
            <InputText>Place Published</InputText>
            <Select
              name="publisher"
              value={publisher}
              onChange={this.handleInputChange}
            >
              <Option value="select">Select...</Option>
              <Option value="PhysicsWorld">PhysicsWorld</Option>
              <Option value="RegMedNet">RegMedNet</Option>
              <Option value="3DMedNet">3DMedNet</Option>
              <Option value="Reliawire">Reliawire</Option>
              <Option value="TheSignalMag">TheSignalMag</Option>
            </Select>
            {/* <Input type="text" name="publisher" value={publisher} onChange={this.handleInputChange} required/> */}
            <InputText>Content</InputText>
            <div
              className="text-editor"
              style={{ width: "80vw", margin: "1em auto" }}
            >
              <ReactQuill
                theme="snow"
                onChange={this.handleChange}
                modules={this.modules}
                formats={this.formats}
                defaultValue={this.props.isEditing ? editContent : ""}
              />
            </div>
            <AddButton
              onClick={
                this.props.isEditing
                  ? () =>
                      this.saveEdit(_id, {
                        content: text,
                        imageText,
                        imageURL,
                        link,
                        title,
                        date,
                        publisher
                      })
                  : () => this.addArticle()
              }
            >
              save
            </AddButton>
          </Editor>
        ) : (
          <Editor>
            <Login history={this.props.history} />
          </Editor>
        )}
      </Editor>
    );
  }
}

export default withState(AddArticle);
