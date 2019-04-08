import React, { Component } from "react";
import styled from "styled-components";
import { withState } from "../MyState";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  margin: auto;
`;
const LoginInput = styled.input`
  margin-top: 0;
`;
const InputText = styled.h2`
  text-align: left;
  width: 80vw;
  @media (min-width: 600px) {
    width: 60vw;
  }
`;
const LoginBtn = styled(InputText)`
  cursor: pointer;
  padding: 0.25em;
  background-color: #d8d8d8;
  margin-top: 0.5em;
  transition: all 0.5s ease;
  :hover {
    background-color: #aba7a7;
    color: #fff;
  }
`;
const LoginTitle = styled.h1`
  text-align: left;
  margin-bottom: 1em;
  font-size: 2.25em;
  width: 80vw;
  @media (min-width: 600px) {
    width: 60vw;
  }
`;
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  login = () => {
    this.props.login(this.state.username, this.state.password);
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <LoginWrapper>
        <LoginTitle>Only Geoffrey beyond this point!</LoginTitle>
        <InputText>Username</InputText>
        <LoginInput
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          required
        />
        <InputText>Password</InputText>
        <LoginInput
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          required
        />
        <LoginBtn onClick={this.login}>Login</LoginBtn>
      </LoginWrapper>
    );
  }
}

export default withState(Login);
