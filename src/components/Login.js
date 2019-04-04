import React, { Component } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  margin: auto;
`
const LoginInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  padding: 0.75em;
  margin: 1em;
  width: 80vw;
  font-size: 1em;
  margin-top: 0;
  border: 2px solid #d8d8d8;
  transition: border .5s ease;
  :focus {
    border: 2px solid #aba7a7;
    outline: none;
  }
  @media (min-width: 600px) {
    width: 60vw;
  }
`
const InputText = styled.h2`
  text-align: left;
  width: 80vw;
  @media (min-width: 600px) {
    width: 60vw;
  }
`
const LoginBtn = styled(InputText)`
  cursor: pointer;
  padding: 0.25em;
  background-color: #d8d8d8;
  margin-top: 0.5em;
  transition: all .5s ease;
  :hover {
    background-color: #aba7a7;
    color: #FFF;
  }
`
const LoginTitle = styled.h1`
  text-align: left;
  margin-bottom: 1em;
  font-size: 2.25em;
  width: 80vw;
  @media (min-width: 600px) {
    width: 60vw;
  }
`
class Login extends Component {

  render() {
    return (
      <LoginWrapper>
        <LoginTitle>Only Geoffrey beyond this point!</LoginTitle>
        <InputText>Email</InputText>
        <LoginInput ></LoginInput>
        <InputText>Password</InputText>
        <LoginInput ></LoginInput>
        <LoginBtn>Login</LoginBtn>
      </LoginWrapper>
    );
  }
}

export default Login;